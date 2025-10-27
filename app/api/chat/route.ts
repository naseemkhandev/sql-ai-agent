import { db } from "@/db";
import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import {
  convertToModelMessages,
  stepCountIs,
  streamText,
  tool,
  UIMessage,
} from "ai";
import z from "zod";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const SYSTEM_PROMPT = `
You are an expert SQL assistant that helps users to query their database using natural language.
  ${new Date().toLocaleString("sv-SE")}
  You have access to following tools:
  1. db tool - call this tool to query the database.
  2. schema tool - call this tool to get the database schema which will help you to write sql query.

  Rules:
  - Generate ONLY SELECT queries (no INSERT, UPDATE, DELETE, DROP)
  - Always use the schema provided by the schema tool
  - Pass in valid SQL syntax in db tool.
  - IMPORTANT: To query database call db tool, Don't return just SQL query.

  Always respond in a helpful, conversational tone while being technically accurate.
`;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    system: SYSTEM_PROMPT,
    model:
      process.env.AI_MODEL === "OPENAI"
        ? openai("gpt-5-nano")
        : google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    stopWhen: stepCountIs(5),
    tools: {
      schema: tool({
        description: "Call this tool to get database schema information.",
        inputSchema: z.object({}),
        execute: async () => {
          return `
          CREATE TABLE products (
            id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
            name text NOT NULL,
            category text NOT NULL,
            price real NOT NULL,
            stock integer DEFAULT 0 NOT NULL,
            created_at text DEFAULT CURRENT_TIMESTAMP
          )
          CREATE TABLE sales (
            id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
            product_id integer NOT NULL,
            quantity integer NOT NULL,
            total_amount real NOT NULL,
            sale_date text DEFAULT CURRENT_TIMESTAMP,
            customer_name text NOT NULL,
            region text NOT NULL,
            FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE no action ON DELETE no action
          )
`;
        },
      }),
      db: tool({
        description:
          "A SQL database tool to execute queries against a SQL database.",
        inputSchema: z.object({
          query: z.string().describe("The SQL query to execute."),
        }),
        execute: async ({ query }) => {
          if (!query.trim().toLowerCase().startsWith("select")) {
            return "Error: Only SELECT queries are allowed.";
          }
          return await db.run(query);
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}

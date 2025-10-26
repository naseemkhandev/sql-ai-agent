import { google } from "@ai-sdk/google";
import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, tool, UIMessage } from "ai";
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
        ? openai("gpt-4o")
        : google("gemini-2.5-flash"),
    messages: convertToModelMessages(messages),
    tools: {
      db: tool({
        description:
          "A SQL database tool to execute queries against a SQL database.",
        inputSchema: z.object({
          query: z.string().describe("The SQL query to execute."),
        }),
        execute: async ({ query }) => {
          console.log("Executing query:", query);
          return `Executed query: ${query}`;
        },
      }),
    },
  });

  return result.toUIMessageStreamResponse();
}

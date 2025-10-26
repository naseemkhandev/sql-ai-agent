/* eslint-disable react-hooks/purity */
"use client";

import NoChatMessages from "@/components/no-chat-messages";
import { cn } from "@/lib/utils";
import { useChat } from "@ai-sdk/react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

export default function Home({ className }: { className?: string }) {
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  console.log(status);

  return (
    <div className="h-screen p-1 overflow-hidden max-w-3xl mx-auto flex items-center justify-center">
      <div
        className={cn(
          "relative w-full h-full rounded-2xl overflow-hidden p-0.5",
          className
        )}
      >
        {/* Animated Outer Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-white/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Card */}
        <div className="relative flex flex-col w-full h-full rounded-xl border border-white/10 overflow-hidden bg-black/90 backdrop-blur-xl">
          {/* Inner Animated Background */}
          <motion.div
            className="absolute inset-0 bg-linear-to-br from-gray-800 via-black to-gray-900"
            animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          />

          {/* Floating Particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/10"
              animate={{
                y: ["0%", "-140%"],
                x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              style={{ left: `${Math.random() * 100}%`, bottom: "-10%" }}
            />
          ))}

          {/* Header */}
          <div className="px-4 py-3 border-b border-white/10 relative z-10">
            <h2 className="text-lg font-semibold text-white">
              🤖 SQL AI Agent
            </h2>
            <p className="text-xs text-white/70">
              Ask me anything about your SQL database!
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 text-sm flex flex-col relative z-10">
            {!messages?.length && <NoChatMessages />}
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "whitespace-pre-wrap",
                  message.role !== "user" ? "self-start" : "self-end"
                )}
              >
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case "text":
                      return (
                        <motion.div
                          key={`${message.id}-${i}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4 }}
                          className={cn(
                            "px-3 py-2 rounded-xl max-w-full shadow-md backdrop-blur-md w-fit",
                            message.role !== "user"
                              ? "bg-white/10 text-white self-start"
                              : "bg-white text-black font-medium self-end"
                          )}
                        >
                          {part.text}
                        </motion.div>
                      );
                  }
                })}
              </div>
            ))}

            {status === "submitted" && (
              <motion.div
                className="flex items-center gap-1 px-3 py-2 rounded-xl max-w-[30%] bg-white/10 self-start"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-200"></span>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse delay-400"></span>
              </motion.div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage({ text: input });
              setInput("");
            }}
          >
            <div className="flex items-center gap-2 p-3 border-t border-white/10 relative z-10">
              <input
                className="flex-1 px-3 py-2 text-sm bg-black/50 rounded-lg border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-white/50"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.currentTarget.value)}
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Send, Sparkles, Copy, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "assistant";
  content: string;
  code?: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI coding assistant. Describe what you want to build, and I'll help you generate the code.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "I understand you want to create that feature. Here's the code I generated for you:",
        code: `// React Component Example
import React, { useState } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-6 bg-card rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Counter: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-primary text-primary-foreground rounded"
      >
        Increment
      </button>
    </div>
  );
}

export default ExampleComponent;`,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const copyCode = (code: string, index: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    toast({
      title: "Copied to clipboard",
      description: "Code has been copied successfully",
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-2rem)]">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">AI Code Assistant</h1>
        <p className="text-muted-foreground">
          Describe your feature in natural language, and I'll generate the code
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <Card
              className={`max-w-[80%] p-4 ${
                message.role === "user"
                  ? "bg-primary/10 border-primary/50"
                  : "bg-card/50 border-border/50"
              }`}
            >
              <div className="flex items-start gap-3">
                {message.role === "assistant" && (
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm mb-2">{message.content}</p>
                  {message.code && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between bg-code-bg rounded-t-lg px-4 py-2 border-b border-border/50">
                        <span className="text-xs text-muted-foreground font-mono">typescript</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyCode(message.code!, index)}
                          className="h-6 text-xs"
                        >
                          {copiedIndex === index ? (
                            <>
                              <Check className="h-3 w-3 mr-1" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="h-3 w-3 mr-1" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                      <pre className="bg-code-bg p-4 rounded-b-lg overflow-x-auto">
                        <code className="text-xs font-mono text-foreground/90">
                          {message.code}
                        </code>
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <Card className="max-w-[80%] p-4 bg-card/50 border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                </div>
                <p className="text-sm text-muted-foreground">Generating code...</p>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe what you want to build... (e.g., 'Create a login form with email and password')"
          className="min-h-[100px] resize-none bg-card/50 border-border/50"
          disabled={isLoading}
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!input.trim() || isLoading} className="shadow-glow">
            <Send className="h-4 w-4 mr-2" />
            Generate Code
          </Button>
        </div>
      </form>
    </div>
  );
}

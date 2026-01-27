import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Brain, Send, Sparkles, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIMentorPage() {
  const navigate = useNavigate();
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "नमस्ते! I'm your AI Mentor for UPSC preparation. I can help you understand complex topics, clarify doubts, and provide personalized study guidance. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const suggestedQuestions = [
    "Explain the basic structure doctrine",
    "What are the key features of Indian federalism?",
    "Help me understand climate change impacts",
    "Explain the difference between ethics and morality",
  ];

  // Scroll to bottom whenever messages update
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleBack = () => navigate("/dashboard");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response (replace with real API call)
    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: `I understand your question: **"${input}"**. Here's a detailed explanation tailored for UPSC aspirants:\n\n- Key points will be highlighted.\n- Related topics and examples can be suggested.\n- You can ask for further clarification anytime.`,
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md text-white">
        <div className="container mx-auto px-4 py-4 max-w-4xl flex items-center justify-between">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
          >
            <ArrowLeft className="size-5" />
            Back
          </button>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Brain className="size-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">AI Mentor</h1>
              <p className="text-sm opacity-90">Your UPSC study companion</p>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl flex flex-col">
        <div className="flex-1 bg-white shadow rounded-xl border border-slate-200 flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeIn`}
              >
                <div
                  className={`max-w-[80%] rounded-xl p-4 ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-100 text-slate-900"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="size-4 text-indigo-600" />
                      <span className="text-xs font-semibold text-indigo-600">
                        AI Mentor
                      </span>
                    </div>
                  )}
                  <p
                    className="text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: msg.content.replace(/\n/g, "<br/>"),
                    }}
                  />
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start gap-2 items-center text-indigo-600 animate-pulse">
                <Loader2 className="animate-spin size-5" />
                <span>AI is typing...</span>
              </div>
            )}
            <div ref={chatEndRef}></div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="pt-4">
                <p className="text-sm text-slate-600 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => setInput(q)}
                      className="px-4 py-2 border border-indigo-300 rounded-full text-sm hover:bg-indigo-50 hover:border-indigo-400 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about UPSC preparation..."
                rows={1}
                className="flex-1 px-4 py-3 border border-slate-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="px-5 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="size-5" />
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

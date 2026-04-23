/* =============================================================
   FETCH TECHNOLOGY — AI Chat Widget
   On-site AI qualifies leads, then hands off to WhatsApp
   WhatsApp number: +6592295853 (update WHATSAPP_NUMBER to change)
   ============================================================= */
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";

const WHATSAPP_NUMBER = "6586069949"; // Change this to update the handoff number

type Message = {
  role: "user" | "assistant";
  content: string;
};

const GREETING: Message = {
  role: "assistant",
  content: "Hi! I'm Fetch's AI assistant. What brings you to our site today — are you exploring AI for your business, or is there something specific you're trying to solve?",
};

function buildWhatsAppUrl(messages: Message[]): string {
  // Build a pre-filled WhatsApp message summarising the conversation context
  const userMessages = messages
    .filter((m) => m.role === "user")
    .map((m) => m.content)
    .join(" | ");

  const prefilledText = encodeURIComponent(
    `Hi Fetch! I was chatting with your AI assistant. Here's a bit about what I'm looking for: ${userMessages}`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${prefilledText}`;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState("");
  const [readyForHandoff, setReadyForHandoff] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessage = trpc.chat.message.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
      if (data.readyForHandoff) {
        setReadyForHandoff(true);
      }
    },
  });

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, sendMessage.isPending]);

  // Show unread dot when closed and a new assistant message arrives
  useEffect(() => {
    if (!open && messages.length > 1) {
      setHasUnread(true);
    }
  }, [messages.length]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || sendMessage.isPending) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];
    setMessages(newMessages);
    setInput("");

    sendMessage.mutate({ messages: newMessages });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ── FLOATING BUTTON ── */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
        style={{ backgroundColor: "#FFBE16" }}
      >
        {open ? (
          <X className="w-6 h-6" style={{ color: "#091738" }} />
        ) : (
          <MessageCircle className="w-6 h-6" style={{ color: "#091738" }} />
        )}
        {hasUnread && !open && (
          <span
            className="absolute top-1 right-1 w-3 h-3 rounded-full border-2 border-white"
            style={{ backgroundColor: "#EF4444" }}
          />
        )}
      </button>

      {/* ── CHAT PANEL ── */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden flex flex-col"
          style={{
            height: "520px",
            boxShadow: "0 24px 64px rgba(9,23,56,0.25), 0 4px 16px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
            style={{ backgroundColor: "#17264E" }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#FFBE16" }}
            >
              <MessageCircle className="w-4 h-4" style={{ color: "#091738" }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-semibold font-body leading-tight">Fetch AI</div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-white/50 text-xs font-body">Online · Typically replies instantly</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white/80 transition-colors"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
            style={{ backgroundColor: "#F8FAFC" }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5"
                    style={{ backgroundColor: "#17264E" }}
                  >
                    <MessageCircle className="w-3 h-3" style={{ color: "#FFBE16" }} />
                  </div>
                )}
                <div
                  className="max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm font-body leading-relaxed"
                  style={{
                    backgroundColor: msg.role === "user" ? "#17264E" : "white",
                    color: msg.role === "user" ? "white" : "#1F2937",
                    borderBottomRightRadius: msg.role === "user" ? "4px" : undefined,
                    borderBottomLeftRadius: msg.role === "assistant" ? "4px" : undefined,
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {sendMessage.isPending && (
              <div className="flex justify-start">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-0.5"
                  style={{ backgroundColor: "#17264E" }}
                >
                  <MessageCircle className="w-3 h-3" style={{ color: "#FFBE16" }} />
                </div>
                <div
                  className="rounded-2xl rounded-bl-[4px] px-4 py-3 flex items-center gap-1"
                  style={{ backgroundColor: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.08)" }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* WhatsApp handoff card */}
            {readyForHandoff && (
              <div
                className="rounded-xl p-3.5 mt-2"
                style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}
              >
                <p className="text-xs text-gray-600 font-body mb-2.5 leading-relaxed">
                  Ready to connect with the Fetch team? Continue this conversation on WhatsApp — they'll pick up right where we left off.
                </p>
                <button
                  onClick={() => {
                    const url = buildWhatsAppUrl(messages);
                    window.open(url, '_blank', 'noopener,noreferrer');
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white text-sm font-semibold font-body transition-opacity hover:opacity-90 cursor-pointer"
                  style={{ backgroundColor: "#25D366", border: "none" }}
                >
                  {/* WhatsApp icon inline SVG */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Connect to Fetch Team on WhatsApp
                </button>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 px-3 py-3 flex-shrink-0"
            style={{ backgroundColor: "white", borderTop: "1px solid #E5E7EB" }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              disabled={sendMessage.isPending}
              className="flex-1 text-sm font-body outline-none bg-transparent text-gray-800 placeholder-gray-400 disabled:opacity-50"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || sendMessage.isPending}
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40 hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#FFBE16" }}
              aria-label="Send message"
            >
              {sendMessage.isPending ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" style={{ color: "#091738" }} />
              ) : (
                <Send className="w-3.5 h-3.5" style={{ color: "#091738" }} />
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, ChevronDown } from "lucide-react";

type Message = {
  id: number;
  from: "pal" | "user";
  text: string;
};

type QuickReply = {
  label: string;
  query: string;
};

const QUICK_REPLIES: QuickReply[] = [
  { label: "What is ATSfy?", query: "What is ATSfy?" },
  { label: "Show me the products", query: "What products does ATSfy have?" },
  { label: "Who is the founder?", query: "Who is the founder?" },
  { label: "What are the values?", query: "What are the core values?" },
  { label: "Ethics & privacy", query: "How does ATSfy handle ethics?" },
  { label: "Take me to Future Vision", query: "Go to future" },
];

function getResponse(input: string): { text: string; scrollTo?: string } {
  const q = input.toLowerCase();

  if (/^(hi|hello|hey|yo|sup)\b/.test(q))
    return {
      text: "Hey there! 👋 I'm Pal — your friendly guide to ATSfy Technologies. Ask me anything about what we do, our products, our values, or just say 'summary' for a quick overview!"
    };

  if (/summar|overview|explain|what.*this.*site|what.*atsfy.*do|tell me about/i.test(q))
    return {
      text: "ATSfy Technologies is a company building AI tools for real problems in India — especially in hiring, education, finance, and startups.\n\nThink of it as an umbrella for five smart AI products:\n• 🎓 Education AI — helps students learn better\n• 📚 Knowledge Enabler — makes information easy to find and use\n• 🧠 ATSfy Core — fair, honest hiring using AI\n• 🚀 StartupLens — helps startups find investors\n• 💰 Finance XAI — explains financial decisions in plain language\n\nIt's all built from Northeast India, with a strong focus on being fair, transparent, and accessible to everyone."
    };

  if (/what is atsfy|about atsfy|atsfy technolog/i.test(q))
    return {
      text: "ATSfy Technologies is an AI holding company based in Northeast India. It builds a connected ecosystem of AI tools — covering education, knowledge, hiring, startups, and finance. The goal is to make powerful AI accessible and fair, especially for people and regions that are often left out.",
      scrollTo: "#about"
    };

  if (/product|ecosystem|venture|all.*tool|what.*build/i.test(q))
    return {
      text: "ATSfy has six AI products:\n\n🎓 Education AI — personalised learning tools for students\n📚 Knowledge Enabler — makes knowledge easy to access and understand\n🧠 ATSfy Core — an honest, bias-free hiring system\n🚀 StartupLens — connects startups with the right investors\n🎤 Pitch Deck Pro — AI-powered pitch decks for founders\n💰 Finance XAI — explains your financial situation in simple terms\n\nAll six work together as one ecosystem.",
      scrollTo: "#ecosystem"
    };

  if (/education|learn|student|school/i.test(q))
    return {
      text: "Education AI is ATSfy's tool for students and learners. It personalises how content is delivered — adapting to your pace, your language, and your level — so learning actually sticks. Think of it as a smart tutor that knows when to slow down.",
      scrollTo: "#ecosystem"
    };

  if (/knowledge|information|access.*info/i.test(q))
    return {
      text: "Knowledge Enabler makes information easier to find, understand, and use. Whether you're a student, a professional, or someone in a rural area with limited internet — it's built to work for you, not just for people with great connectivity and fluent English.",
      scrollTo: "#ecosystem"
    };

  if (/core|hiring|job|recruit|ats|bias.*hire|fair.*hire/i.test(q))
    return {
      text: "ATSfy Core is a hiring system that removes bias and opacity from recruitment. Instead of letting resumes get filtered out by keywords or network connections, it evaluates candidates on actual merit — and explains every decision it makes. No black boxes.",
      scrollTo: "#ecosystem"
    };

  if (/startup|lens|investor|fund/i.test(q))
    return {
      text: "StartupLens helps early-stage startups find the right investors. It analyses a startup's profile and matches it with investors who are actually a good fit — saving founders from the exhausting spray-and-pray approach to fundraising.",
      scrollTo: "#ecosystem"
    };

  if (/pitch|deck|presentation|slide|fundrais/i.test(q))
    return {
      text: "Pitch Deck Pro is ATSfy's AI-powered pitch deck builder. Most founders have a great idea but struggle to present it in a way investors respond to. Pitch Deck Pro builds structured, professional presentations for you — covering market sizing, traction, narrative, and visual storytelling — tailored to your startup's story.",
      scrollTo: "#ecosystem"
    };

  if (/finance|money|xai|loan|financial|explain.*finance/i.test(q))
    return {
      text: "Finance XAI takes complex financial decisions — like loan approvals, credit scores, or investment advice — and explains them in plain language. If a system says 'no', Finance XAI tells you exactly why, and what you can do about it.",
      scrollTo: "#ecosystem"
    };

  if (/value|stand for|belief|principle.*company/i.test(q))
    return {
      text: "ATSfy's six core values are:\n\n💡 Innovation — rethink, don't just patch\n🛡️ Integrity — full transparency, always\n🤝 Collaboration — build open ecosystems\n🚀 Ambition — world-class AI from Northeast India\n🌱 Rootedness — stay connected to the communities that shaped us\n🌍 Accessibility — design for the margins first\n\nThese aren't slogans — they're the decisions ATSfy makes when things get hard.",
      scrollTo: "#values"
    };

  if (/ethic|privacy|bias|fair|responsible|data/i.test(q))
    return {
      text: "ATSfy takes AI ethics seriously. Here's what that means in practice:\n\n🔍 Every decision is explainable — no black boxes\n🔒 Your data is never sold or shared without consent\n⚖️ Models are regularly audited for bias across gender, caste, and region\n👤 For big decisions, a human is always in the loop\n🌍 Everything is designed to be accessible, not just to the privileged\n\nIt's not a checklist — it's how the company builds.",
      scrollTo: "#ethics"
    };

  if (/founder|ayan|pal|who.*behind|who.*start/i.test(q))
    return {
      text: "ATSfy was founded by Ayan Pal — a farmer-turned-tech-founder from Northeast India. His mission is to build hiring systems as honest and visible as a field in daylight. He brings a first-principles approach: if a system isn't fair to everyone, it needs to be rebuilt, not patched.",
      scrollTo: "#founder"
    };

  if (/vision|future|roadmap|plan|goal|where.*headed|2025|2030/i.test(q))
    return {
      text: "ATSfy's vision is big: to become India's leading AI infrastructure company — starting from Northeast India and expanding across the country and beyond. The roadmap runs from 2025 to 2031, covering product launches, community expansion, research partnerships, and eventually open-sourcing the core intelligence layer.",
      scrollTo: "#future"
    };

  if (/go to|navigate|take me|scroll to|show me/i.test(q)) {
    if (/about/i.test(q)) return { text: "Taking you to the About section!", scrollTo: "#about" };
    if (/ecosystem|product/i.test(q)) return { text: "Taking you to the Ecosystem section!", scrollTo: "#ecosystem" };
    if (/value/i.test(q)) return { text: "Taking you to the Values section!", scrollTo: "#values" };
    if (/vision/i.test(q)) return { text: "Taking you to the Vision section!", scrollTo: "#vision" };
    if (/ethic/i.test(q)) return { text: "Taking you to the Ethics section!", scrollTo: "#ethics" };
    if (/founder/i.test(q)) return { text: "Taking you to the Founder section!", scrollTo: "#founder" };
    if (/future/i.test(q)) return { text: "Taking you to the Future Vision section!", scrollTo: "#future" };
    return { text: "Where would you like to go? Try: About, Ecosystem, Values, Vision, Ethics, Founder, or Future." };
  }

  if (/contact|email|reach|touch/i.test(q))
    return { text: "You can reach ATSfy at info.atsfy@gmail.com — or connect on LinkedIn through the footer." };

  if (/northeast|india|where.*from|location/i.test(q))
    return { text: "ATSfy is based in Northeast India — a region often overlooked by the tech world. That's intentional: building world-class AI infrastructure from here is part of the mission, not an afterthought." };

  if (/thank|thanks|great|awesome|nice|good/i.test(q))
    return { text: "Glad I could help! 😊 Feel free to ask me anything else about ATSfy." };

  return {
    text: "I'm not sure about that one — I'm still learning! Try asking me about ATSfy's products, values, ethics, the founder, or just say 'summary' for a quick overview. You can also ask me to take you to any section of the site."
  };
}

let msgId = 0;
const nextId = () => ++msgId;

const WELCOME: Message = {
  id: nextId(),
  from: "pal",
  text: "Hi! I'm Pal 👋 — your guide to ATSfy Technologies. I can explain what we do, walk you through our products, or take you to any part of this site. What would you like to know?"
};

export function PalAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  function send(query?: string) {
    const text = (query ?? input).trim();
    if (!text) return;

    const userMsg: Message = { id: nextId(), from: "user", text };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const { text: responseText, scrollTo } = getResponse(text);
      setTyping(false);
      setMessages(prev => [...prev, { id: nextId(), from: "pal", text: responseText }]);

      if (scrollTo) {
        setTimeout(() => {
          document.querySelector(scrollTo)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      }
    }, 700);
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") send();
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_24px_rgba(59,130,246,0.5)] flex items-center justify-center text-white focus:outline-none"
        aria-label="Open Pal assistant"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <ChevronDown className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <Bot className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/30 pointer-events-none" />
        )}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 flex flex-col"
            style={{ height: "520px", background: "rgba(5,10,21,0.97)", backdropFilter: "blur(20px)" }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8 bg-gradient-to-r from-primary/10 to-accent/10 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md shadow-primary/30">
                <Bot className="w-4.5 h-4.5 text-white" style={{ width: "18px", height: "18px" }} />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">Pal</p>
                <p className="text-[11px] text-emerald-400 mt-0.5">● Online · ATSfy Guide</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="ml-auto w-7 h-7 flex items-center justify-center rounded-lg hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
              {messages.map(m => (
                <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  {m.from === "pal" && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center">
                      <Bot style={{ width: "12px", height: "12px" }} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      m.from === "user"
                        ? "bg-primary text-white rounded-br-sm"
                        : "bg-white/6 border border-white/8 text-white/90 rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex-shrink-0 mr-2 mt-0.5 flex items-center justify-center">
                    <Bot style={{ width: "12px", height: "12px" }} className="text-white" />
                  </div>
                  <div className="px-3.5 py-3 rounded-2xl rounded-bl-sm bg-white/6 border border-white/8 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                {QUICK_REPLIES.map(qr => (
                  <button
                    key={qr.label}
                    onClick={() => send(qr.query)}
                    className="px-2.5 py-1 rounded-full text-xs border border-primary/30 text-primary/80 hover:bg-primary/10 hover:border-primary/60 hover:text-primary transition-all duration-150"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 pb-3 flex-shrink-0 border-t border-white/8 pt-2">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-primary/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask me anything…"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 focus:outline-none"
                />
                <button
                  onClick={() => send()}
                  disabled={!input.trim()}
                  className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center disabled:opacity-30 hover:bg-primary/80 transition-colors flex-shrink-0"
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Users, Rocket, Presentation, LineChart, MapPin, ShieldCheck, Zap } from "lucide-react";

const products = [
  { icon: GraduationCap, name: "Education AI", one: "Personalised learning for every student", color: "text-purple-400", bg: "bg-purple-400/10 border-purple-400/20" },
  { icon: BrainCircuit, name: "Knowledge Enabler", one: "Complex info made simple and actionable", color: "text-blue-400", bg: "bg-blue-400/10 border-blue-400/20" },
  { icon: Users, name: "ATSfy Core", one: "Fair, transparent AI hiring — no black boxes", color: "text-emerald-400", bg: "bg-emerald-400/10 border-emerald-400/20" },
  { icon: Rocket, name: "StartupLens", one: "Validate your startup, find the right investors", color: "text-orange-400", bg: "bg-orange-400/10 border-orange-400/20" },
  { icon: Presentation, name: "Pitch Deck Pro", one: "AI-built investor decks in minutes", color: "text-pink-400", bg: "bg-pink-400/10 border-pink-400/20" },
  { icon: LineChart, name: "Finance XAI", one: "Financial guidance in plain language", color: "text-indigo-400", bg: "bg-indigo-400/10 border-indigo-400/20" },
];

const highlights = [
  { icon: Zap, label: "6 AI Ventures", sub: "One connected ecosystem" },
  { icon: MapPin, label: "Northeast India", sub: "Building for India & beyond" },
  { icon: ShieldCheck, label: "Ethics-First", sub: "Explainable, fair, transparent" },
];

export function PlatformSummary() {
  return (
    <section className="py-16 relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">At a Glance</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-snug">
            What is ATSFY Technologies?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            ATSFY Technologies is an AI company from <span className="text-white font-medium">Northeast India</span> building six interconnected AI tools — covering how people <span className="text-white font-medium">learn, find work, launch startups, pitch investors, and manage money</span>. Every product is built to be fair, explainable, and accessible to everyone — not just those with privilege or connections.
          </p>
        </motion.div>

        {/* Product grid */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {products.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
            >
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-3 ${p.bg} group-hover:scale-110 transition-transform duration-300`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <p className={`text-xs font-bold mb-1 ${p.color}`}>{p.name}</p>
              <p className="text-[11px] text-muted-foreground leading-snug">{p.one}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10"
        >
          {highlights.map((h, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <h.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">{h.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{h.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Users, Rocket, LineChart, Presentation, ArrowUpRight, ArrowRight } from "lucide-react";

const products = [
  {
    id: "education-ai",
    title: "Education AI",
    subtitle: "Talent Readiness",
    badge: "Knowledge Enabler ↗",
    tagline: "Preparing the next generation",
    problem: "Traditional education fails to personalize learning or surface skill gaps in real time.",
    description: "AI-powered teaching and formative assessment tools that adapt to each learner's pace, identify gaps instantly, and align curricula to real-world industry needs.",
    users: "Students · Educators · Schools · Upskilling Institutes",
    href: "https://education-ai-assistant.lovable.app/",
    linkLabel: "Open Education AI",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-500",
    shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    glow: "rgba(168,85,247,0.15)"
  },
  {
    id: "knowledge-enabler",
    title: "Knowledge Enabler",
    subtitle: "AI Knowledge Assistant",
    badge: "Ask · Learn · Act",
    tagline: "Turning information into insight",
    problem: "Information overload makes it nearly impossible to extract actionable knowledge efficiently.",
    description: "A conversational AI assistant that distils complex topics into clear, contextual, and actionable knowledge — bridging the gap between raw information and real understanding.",
    users: "Learners · Researchers · Corporate Teams · Knowledge Workers",
    href: "https://knowledge-enabler.lovable.app/chat",
    linkLabel: "Open Knowledge Enabler",
    icon: BrainCircuit,
    color: "from-blue-400 to-cyan-400",
    shadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
    glow: "rgba(56,189,248,0.15)"
  },
  {
    id: "atsfy-core",
    title: "ATSfy Core",
    subtitle: "Core Intelligence Layer",
    badge: "Recruiter & Candidate Intelligence",
    tagline: "Transparent hiring, end-to-end",
    problem: "Hiring is opaque and biased — recruiters miss talent; candidates never know why they're rejected.",
    description: "An AI-driven transparent hiring platform that gives recruiters precision-matched shortlists and candidates clear, explainable feedback — eliminating black-box decisions from both sides.",
    users: "HR Teams · Recruiters · Job Seekers · Talent Acquisition Leaders",
    href: "https://atsfy-your-resume.lovable.app/",
    linkLabel: "Open ATSfy Core",
    icon: Users,
    color: "from-emerald-400 to-teal-500",
    shadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
    glow: "rgba(52,211,153,0.15)"
  },
  {
    id: "startuplens",
    title: "StartupLens",
    subtitle: "Startup Validation & Founder Tools",
    badge: "Score · Validate · Build",
    tagline: "Clarity before capital",
    problem: "Founders lack objective validation; investors lack fast, data-driven deal screening tools.",
    description: "An AI-powered scoring engine that evaluates startups across impact, market viability, and readiness — giving founders honest signals and investors intelligent deal flow analytics.",
    users: "Early-Stage Founders · Angel Investors · Incubators · Ecosystem Enablers",
    href: "https://ventureval.lovable.app/",
    linkLabel: "Open StartupLens",
    icon: Rocket,
    color: "from-orange-400 to-rose-400",
    shadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]",
    glow: "rgba(251,146,60,0.15)"
  },
  {
    id: "pitch-deck-pro",
    title: "Pitch Deck Pro",
    subtitle: "Investor-Ready Storytelling",
    badge: "AI · Narrative · Pitch",
    tagline: "From idea to investor-ready in minutes",
    problem: "Most founders have a great idea but struggle to translate it into a compelling, professional pitch that investors actually respond to.",
    description: "An AI-powered pitch deck builder that crafts investor-ready presentations — structured narrative, market sizing, traction slides, and visual storytelling — tailored to your startup's unique story.",
    users: "Founders · Early-Stage Startups · Incubatees · Student Entrepreneurs",
    href: "https://pitchdeckanalyse.lovable.app",
    linkLabel: "Open Pitch Deck Pro",
    icon: Presentation,
    color: "from-pink-500 to-fuchsia-600",
    shadow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    glow: "rgba(236,72,153,0.15)"
  },
  {
    id: "finance-xai",
    title: "Finance XAI",
    subtitle: "Financial Reasoning & Growth",
    badge: "Explainable · Transparent · Actionable",
    tagline: "Financial clarity for everyone",
    problem: "Financial advice is either inaccessible or opaque — people make costly decisions without understanding why.",
    description: "Explainable AI (XAI) for personal and business finance that doesn't just recommend — it explains. Transparent budgeting, goal planning, and growth strategies anyone can understand and trust.",
    users: "Individuals · Small Business Owners · Financial Advisors · Goal-Driven Savers",
    href: "https://intelli-finance-insights--ayanpal0698.replit.app/",
    linkLabel: "Open Finance XAI",
    icon: LineChart,
    color: "from-blue-600 to-indigo-600",
    shadow: "hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]",
    glow: "rgba(79,70,229,0.15)"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <span className="text-sm font-medium text-muted-foreground">Six Verticals. One Intelligence Layer.</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
          >
            The ATSFY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Six interconnected AI ventures that collectively cover the full arc of human potential — from learning to earning, building to thriving.
          </motion.p>
        </div>

        {/* Journey Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            The ATSFY User Journey — One Ecosystem, Every Stage of Life
          </p>

          {/* Desktop roadmap */}
          <div className="hidden md:flex items-stretch gap-0 relative">
            {/* Connecting line behind everything */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/30 via-blue-400/40 via-emerald-400/40 via-orange-400/40 to-indigo-500/30 -translate-y-1/2 pointer-events-none" />

            {[
              { step: "01", label: "Learn", product: "Education AI", icon: GraduationCap, color: "from-purple-500 to-indigo-500", glow: "shadow-purple-500/20", border: "border-purple-500/30", desc: "Discover, upskill & grow" },
              { step: "02", label: "Know", product: "Knowledge Enabler", icon: BrainCircuit, color: "from-blue-400 to-cyan-400", glow: "shadow-blue-400/20", border: "border-blue-400/30", desc: "Contextualise knowledge" },
              { step: "03", label: "Get Hired", product: "ATSfy Core", icon: Users, color: "from-emerald-400 to-teal-500", glow: "shadow-emerald-400/20", border: "border-emerald-400/30", desc: "Match talent to opportunity" },
              { step: "04", label: "Build", product: "StartupLens", icon: Rocket, color: "from-orange-400 to-rose-400", glow: "shadow-orange-400/20", border: "border-orange-400/30", desc: "Validate & launch ventures" },
              { step: "05", label: "Pitch", product: "Pitch Deck Pro", icon: Presentation, color: "from-pink-500 to-fuchsia-600", glow: "shadow-pink-500/20", border: "border-pink-500/30", desc: "Win investor confidence" },
              { step: "06", label: "Grow", product: "Finance XAI", icon: LineChart, color: "from-indigo-500 to-blue-600", glow: "shadow-indigo-500/20", border: "border-indigo-500/30", desc: "Achieve financial freedom" },
            ].map((node, i, arr) => (
              <div key={node.step} className="flex items-center flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, type: "spring", stiffness: 260, damping: 20 }}
                  className={`relative z-10 flex-1 flex flex-col items-center text-center p-5 rounded-2xl border ${node.border} bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${node.glow} mx-1`}
                >
                  <div className="text-xs font-bold text-muted-foreground/50 mb-3">{node.step}</div>
                  <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center bg-gradient-to-br ${node.color} shadow-md`}>
                    <node.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-base font-bold text-white mb-0.5">{node.label}</p>
                  <p className="text-xs font-semibold text-muted-foreground mb-1">{node.product}</p>
                  <p className="text-xs text-muted-foreground/60 leading-snug">{node.desc}</p>
                </motion.div>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-white/20 flex-shrink-0 mx-1 z-10" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile roadmap — vertical */}
          <div className="md:hidden flex flex-col gap-3 relative pl-8">
            <div className="absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple-500/30 via-blue-400/30 via-emerald-400/30 via-orange-400/30 to-indigo-500/30" />
            {[
              { step: "01", label: "Learn", product: "Education AI", icon: GraduationCap, color: "from-purple-500 to-indigo-500", border: "border-purple-500/30" },
              { step: "02", label: "Know", product: "Knowledge Enabler", icon: BrainCircuit, color: "from-blue-400 to-cyan-400", border: "border-blue-400/30" },
              { step: "03", label: "Get Hired", product: "ATSfy Core", icon: Users, color: "from-emerald-400 to-teal-500", border: "border-emerald-400/30" },
              { step: "04", label: "Build", product: "StartupLens", icon: Rocket, color: "from-orange-400 to-rose-400", border: "border-orange-400/30" },
              { step: "05", label: "Pitch", product: "Pitch Deck Pro", icon: Presentation, color: "from-pink-500 to-fuchsia-600", border: "border-pink-500/30" },
              { step: "06", label: "Grow", product: "Finance XAI", icon: LineChart, color: "from-indigo-500 to-blue-600", border: "border-indigo-500/30" },
            ].map((node, i) => (
              <motion.div
                key={node.step}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center gap-4 p-4 rounded-xl border ${node.border} bg-white/[0.02]`}
              >
                <div className={`absolute -left-[1.65rem] w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${node.color} border-2 border-background flex-shrink-0`}>
                  <node.icon className="w-2.5 h-2.5 text-white" />
                </div>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${node.color} flex-shrink-0`}>
                  <node.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{node.label} <span className="font-normal text-muted-foreground">— {node.product}</span></p>
                </div>
                <span className="ml-auto text-xs font-bold text-muted-foreground/40">{node.step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              variants={item}
              className={`glass-card p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-2 flex flex-col ${product.shadow} ${idx === products.length - 1 && products.length % 3 !== 0 && products.length % 2 === 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${product.color} shadow-lg`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r ${product.color} bg-opacity-10 text-white/80 border border-white/10`}>
                  {product.badge}
                </span>
              </div>

              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                  {product.subtitle}
                </span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {product.title}
                </h3>
                <p className="text-sm text-accent/80 font-medium mt-1">{product.tagline}</p>
              </div>

              <div className="mt-4 mb-4 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <p className="text-xs text-muted-foreground/70 uppercase tracking-wider font-semibold mb-1">Problem Solved</p>
                <p className="text-sm text-blue-100/60 leading-relaxed italic">{product.problem}</p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              <div className="pt-5 border-t border-white/10 mt-auto">
                <p className="text-xs text-muted-foreground/60 uppercase tracking-wider font-semibold mb-2">Target Users</p>
                <p className="text-sm text-white/70 mb-4">{product.users}</p>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r ${product.color} opacity-80 hover:opacity-100 transition-all duration-200 hover:scale-[1.03] shadow-sm`}
                >
                  {product.linkLabel}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}

          {/* Connective intelligence card */}
          <motion.div
            variants={item}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center items-center text-center border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3">ATSFY Core Layer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The shared intelligence backbone — data models, AI reasoning engines, and infrastructure — that connects and amplifies every product in the ecosystem.
            </p>
            <span className="text-xs font-semibold text-primary/80 tracking-wider uppercase">Powering all ventures →</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Users, UserCheck, Rocket, LineChart, ArrowUpRight } from "lucide-react";

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
    icon: Rocket,
    color: "from-orange-400 to-rose-400",
    shadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]",
    glow: "rgba(251,146,60,0.15)"
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
            <span className="text-sm font-medium text-muted-foreground">Five Verticals. One Intelligence Layer.</span>
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
            Five interconnected AI ventures that collectively cover the full arc of human potential — from learning to earning, building to thriving.
          </motion.p>
        </div>

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
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white/70">{product.users}</p>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:text-white transition-all duration-300 flex-shrink-0 ml-2" />
                </div>
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

import { motion } from "framer-motion";
import { GraduationCap, BrainCircuit, Users, UserCheck, Rocket, LineChart, ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "education-ai",
    title: "Education AI",
    subtitle: "Talent Readiness",
    description: "AI-powered teaching & assessment tools that prepare the next generation of talent for the future workforce.",
    icon: GraduationCap,
    color: "from-purple-500 to-indigo-500",
    shadow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    linkText: "Knowledge Enabler"
  },
  {
    id: "knowledge-enabler",
    title: "Knowledge Enabler",
    subtitle: "AI Knowledge Assistant",
    description: "Conversational AI that transforms complex information into accessible, actionable knowledge for learners and professionals.",
    icon: BrainCircuit,
    color: "from-blue-400 to-cyan-400",
    shadow: "hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
    linkText: "Explore Assistant"
  },
  {
    id: "atsfy-recruiter",
    title: "ATSfy Core",
    subtitle: "Recruiter Intelligence",
    description: "The core intelligence layer providing AI-driven, transparent hiring infrastructure powering modern recruiting teams.",
    icon: Users,
    color: "from-emerald-400 to-teal-500",
    shadow: "hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]",
    linkText: "Core Platform"
  },
  {
    id: "atsfy-candidate",
    title: "ATSfy Core",
    subtitle: "Candidate Intelligence",
    description: "Empowering candidates with AI-driven insights, skill gap analysis, and transparent matching algorithms.",
    icon: UserCheck,
    color: "from-teal-400 to-emerald-500",
    shadow: "hover:shadow-[0_0_30px_rgba(45,212,191,0.2)]",
    linkText: "Candidate Portal"
  },
  {
    id: "startuplens",
    title: "StartupLens",
    subtitle: "Startup Validation & Tools",
    description: "AI-powered startup scoring evaluating impact, viability, and market readiness to empower founders and investors.",
    icon: Rocket,
    color: "from-orange-400 to-rose-400",
    shadow: "hover:shadow-[0_0_30px_rgba(251,146,60,0.2)]",
    linkText: "Evaluate Startup"
  },
  {
    id: "finance-xai",
    title: "Finance XAI",
    subtitle: "Financial Reasoning",
    description: "Explainable AI (XAI) for transparent financial guidance, intelligent budgeting, and strategic goal planning.",
    icon: LineChart,
    color: "from-blue-600 to-indigo-600",
    shadow: "hover:shadow-[0_0_30px_rgba(79,70,229,0.2)]",
    linkText: "Financial Growth"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            The ATSFY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Ecosystem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A synergistic suite of AI products designed to elevate human potential, validate innovation, and drive financial clarity.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              className={`glass-card p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-2 ${product.shadow}`}
            >
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${product.color} shadow-lg`}>
                <product.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1 block">
                  {product.subtitle}
                </span>
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-colors">
                  {product.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mt-4 mb-8 min-h-[80px]">
                {product.description}
              </p>
              
              <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors flex items-center gap-1">
                  {product.linkText}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

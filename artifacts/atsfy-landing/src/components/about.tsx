import { motion } from "framer-motion";
import { Cpu, Layers, Zap, GitMerge, ShieldCheck, TrendingUp } from "lucide-react";

const valueProps = [
  {
    icon: GitMerge,
    title: "End-to-End Life Arc",
    desc: "We cover every stage — learn, get hired, build a startup, manage wealth. No other AI company addresses the full human journey in one connected ecosystem."
  },
  {
    icon: Layers,
    title: "Shared Intelligence Layer",
    desc: "Every product runs on the same underlying AI architecture. Insights from one vertical compound value in all others — making the ecosystem smarter the more it grows."
  },
  {
    icon: ShieldCheck,
    title: "Explainability at the Core",
    desc: "From hiring decisions to financial advice, ATSFY bets on transparency. Our XAI-first approach builds trust where black-box AI has historically failed people."
  },
  {
    icon: TrendingUp,
    title: "Region-First, World-Ready",
    desc: "Built with the nuances of India's Northeast in mind, our solutions are natively inclusive — designed for emerging markets but architected to scale globally."
  },
  {
    icon: Cpu,
    title: "Compounding Intelligence",
    desc: "Each new user, each decision, each outcome feeds the core layer. The ATSFY ecosystem gets exponentially more capable over time — not linearly."
  },
  {
    icon: Zap,
    title: "Rapid Venture Deployment",
    desc: "Because our infrastructure is shared, launching a new AI vertical takes weeks, not years. ATSFY can spin up focused AI tools at a pace traditional firms cannot match."
  }
];

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Value Proposition Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden mb-16"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <Cpu className="w-3.5 h-3.5 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Our Core Value Proposition</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Not Just a Holding Company. <br />
              <span className="text-muted-foreground font-light">The Intelligence That Connects Them All.</span>
            </h2>

            <p className="text-xl text-blue-100/80 leading-relaxed mb-6 font-light">
              ATSFY Technologies is the connective tissue of an AI ecosystem that no single vertical can create alone. We build the shared data architecture, core reasoning models, and deployment infrastructure that give rise to focused AI ventures — each addressing a real problem, all amplifying each other.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From the moment a student begins learning, through their career, into entrepreneurship, and across their financial life — ATSFY's ecosystem follows that journey. Talent feeds hiring. Hiring informs education. Startups unlock financial tools. Finance validates business viability. 
              <span className="text-white/80 font-medium"> It's a flywheel, not a portfolio.</span>
            </p>
          </div>
        </motion.div>

        {/* Value Prop Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-10">What makes ATSFY uniquely positioned</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valueProps.map((vp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <vp.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">{vp.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{vp.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

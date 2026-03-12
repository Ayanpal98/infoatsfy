import { motion } from "framer-motion";
import { Telescope, Globe2, Flame, Users2, Landmark, BrainCircuit } from "lucide-react";

const milestones = [
  {
    year: "2025–26",
    title: "Root & Launch",
    desc: "Establish the core intelligence layer. Launch all five verticals in Northeast India. Build early community of learners, founders, and job-seekers.",
    color: "border-blue-500/50 bg-blue-500/5"
  },
  {
    year: "2027–28",
    title: "Pan-India Scale",
    desc: "Expand across Tier 2 and Tier 3 India. Integrate product data pipelines to activate the ecosystem flywheel. Onboard 1M+ users across all verticals.",
    color: "border-cyan-500/50 bg-cyan-500/5"
  },
  {
    year: "2029–30",
    title: "South & Southeast Asia",
    desc: "Enter Bangladesh, Sri Lanka, Vietnam, and Indonesia — emerging economies with identical talent and financial inclusion challenges. Localize AI models for each market.",
    color: "border-teal-500/50 bg-teal-500/5"
  },
  {
    year: "2031+",
    title: "Global AI Ecosystem",
    desc: "Become a reference model for how AI ecosystems can be built responsibly and inclusively — from the Global South outward. 10M+ lives impacted.",
    color: "border-emerald-500/50 bg-emerald-500/5"
  }
];

const aspirations = [
  {
    icon: Flame,
    title: "A Beacon from the Northeast",
    desc: "Prove that world-class AI innovation can originate from historically underserved regions — making Northeast India a globally recognized hub for responsible AI."
  },
  {
    icon: Users2,
    title: "10 Million Lives Transformed",
    desc: "Touch 10 million people across education, employment, entrepreneurship, and financial wellness by 2030 — measured in outcomes, not just users."
  },
  {
    icon: Globe2,
    title: "The Emerging Market Blueprint",
    desc: "Create a replicable model for AI ecosystem development in emerging markets that other nations and regions can adopt and adapt."
  },
  {
    icon: BrainCircuit,
    title: "Federated AI Intelligence",
    desc: "Develop a federated learning architecture where ecosystem insights compound without compromising individual privacy — setting the global standard for ethical AI."
  },
  {
    icon: Landmark,
    title: "Policy & AI Governance",
    desc: "Partner with governments and institutions to shape India's AI policy — advocating for explainability, fairness, and equitable access as non-negotiables."
  },
  {
    icon: Telescope,
    title: "Open Ecosystem Infrastructure",
    desc: "Eventually open-source the core intelligence layer — enabling startups globally to build on ATSFY's infrastructure and expand the ecosystem beyond what we could build alone."
  }
];

export function FutureVision() {
  return (
    <section id="future" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-primary/8 to-transparent blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-accent/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden mb-20 border border-primary/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="relative z-10 px-8 md:px-16 py-12 md:py-14 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
              <Telescope className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Mission</p>
              <p className="text-xl md:text-2xl font-display font-semibold text-white leading-snug">
                To build an interconnected AI ecosystem that democratizes opportunity — from education to employment, entrepreneurship to financial freedom — rooted in Northeast India and built to scale across the world's emerging economies.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Telescope className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">Long-Term Aspirations</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-accent">Future Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ATSFY Technologies is not building products — it's building a new paradigm. A future where AI ecosystems emerge from the ground up, rooted in real communities, solving real problems, and scaling without abandoning their origins.
          </p>
        </motion.div>

        {/* Big Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-10 md:p-16 mb-20 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-display font-light text-white/90 leading-relaxed mb-6">
              "The most transformative AI ecosystems of the next decade will not emerge from Silicon Valley. They will come from the places with the most urgent problems, the most untapped talent, and the deepest motivation to build for real impact."
            </p>
            <span className="text-sm text-muted-foreground font-medium tracking-wider uppercase">— The ATSFY Thesis</span>
          </div>
        </motion.div>

        {/* Roadmap Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-10">The Road Ahead</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${m.color} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-primary tracking-wider uppercase">{m.year}</span>
                </div>
                <h4 className="text-white font-bold text-lg mb-3">{m.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Aspirations Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-10">What we're building toward</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aspirations.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 leading-snug">{a.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            We're at the beginning. And we're building in public, with purpose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@atsfy.com"
              className="group px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] flex items-center justify-center gap-2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Partner With Us</span>
            </a>
            <a
              href="#ecosystem"
              className="px-8 py-4 glass-card text-white rounded-xl font-semibold text-lg transition-all hover:bg-white/5 flex items-center justify-center"
            >
              Explore the Ecosystem
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

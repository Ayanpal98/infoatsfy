import { motion } from "framer-motion";
import { Lightbulb, ShieldHalf, Users, Rocket, Leaf, Globe } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We don't patch old systems — we rethink them from scratch. Every product we build starts with the question: what would this look like if it were designed today, for the people who need it most?",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    glow: "group-hover:shadow-yellow-500/10"
  },
  {
    icon: ShieldHalf,
    title: "Integrity",
    desc: "We say what our systems do. We don't hide behind algorithmic complexity or bury trade-offs in fine print. Transparency is not a feature — it is the foundation everything else is built on.",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    glow: "group-hover:shadow-blue-500/10"
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "The best solutions to India's hardest problems won't come from a single team working in isolation. We build open ecosystems, partner across sectors, and treat our users as co-creators.",
    color: "text-violet-400",
    bg: "bg-violet-400/10 border-violet-400/20",
    glow: "group-hover:shadow-violet-500/10"
  },
  {
    icon: Rocket,
    title: "Ambition",
    desc: "We're from Northeast India — a region the world largely ignores — and we're building world-class AI infrastructure from here. That takes a particular kind of refusal to settle for what seems possible.",
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/20",
    glow: "group-hover:shadow-orange-500/10"
  },
  {
    icon: Leaf,
    title: "Rootedness",
    desc: "Growth that doesn't serve the people closest to us isn't progress. We stay connected to the communities, languages, and contexts that shaped us — and let that ground every decision we make.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20",
    glow: "group-hover:shadow-emerald-500/10"
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "If our tools only work for people with high-speed internet, English fluency, and a college degree, we've solved the wrong problem. We build for the margins first, and let that raise the bar for everyone.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20",
    glow: "group-hover:shadow-cyan-500/10"
  }
];

export function Values() {
  return (
    <section id="values" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-yellow-500/4 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <ShieldHalf className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-sm font-medium text-muted-foreground">What We Stand For</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            Our Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
              Values
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            These aren't aspirational posters on a wall. They are the decisions we make when things get hard, when shortcuts are tempting, and when the easier path leads somewhere we don't want to go.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`group p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 hover:shadow-xl ${v.glow}`}
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${v.bg} group-hover:scale-110 transition-transform duration-300`}>
                <v.icon className={`w-5 h-5 ${v.color}`} />
              </div>
              <h4 className={`font-bold text-xl mb-3 ${v.color}`}>{v.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

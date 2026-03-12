import { motion } from "framer-motion";
import { ShieldCheck, Eye, Scale, Lock, RefreshCw, HandHeart } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Explainability by Default",
    desc: "Every AI decision we make — in hiring, finance, or education — comes with a reason. We build systems that explain their outputs in plain language, not black boxes that produce verdicts without accountability.",
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20"
  },
  {
    icon: Lock,
    title: "Data Privacy & Sovereignty",
    desc: "We treat user data as a right, not a resource. Data is collected only with explicit consent, stored with enterprise-grade encryption, and never sold or used to train models without permission.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10 border-emerald-400/20"
  },
  {
    icon: Scale,
    title: "Bias Detection & Mitigation",
    desc: "Our models are continuously audited for bias across gender, caste, region, language, and socioeconomic background. We actively correct for historical inequities in our training data rather than encoding them.",
    color: "text-violet-400",
    bg: "bg-violet-400/10 border-violet-400/20"
  },
  {
    icon: RefreshCw,
    title: "Continuous Fairness Auditing",
    desc: "Ethics is not a one-time checklist. We run recurring third-party audits on all live models, publish fairness reports, and iterate based on community feedback — especially from underrepresented populations.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10 border-cyan-400/20"
  },
  {
    icon: HandHeart,
    title: "Human-in-the-Loop",
    desc: "AI augments human judgment — it never replaces it for consequential decisions. Hiring outcomes, loan assessments, and educational recommendations always have a human review pathway and an appeals process.",
    color: "text-orange-400",
    bg: "bg-orange-400/10 border-orange-400/20"
  },
  {
    icon: ShieldCheck,
    title: "Inclusive Design",
    desc: "We build for India's full diversity — across languages, literacy levels, connectivity constraints, and cultural contexts. Responsible AI means accessible AI, especially for those who need it most.",
    color: "text-teal-400",
    bg: "bg-teal-400/10 border-teal-400/20"
  }
];

const commitments = [
  { label: "Explainable AI (XAI)", sub: "across all products" },
  { label: "Zero data brokering", sub: "ever" },
  { label: "Bias audits", sub: "on every model release" },
  { label: "Open fairness reports", sub: "published publicly" },
];

export function Ethics() {
  return (
    <section id="ethics" className="pt-28 pb-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-500/5 blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-violet-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">Responsible AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5 leading-tight">
            AI With a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
              Conscience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building powerful AI is easy. Building AI that is fair, transparent, and trustworthy — especially for communities that have historically been excluded or harmed by technology — is the harder and more important challenge.
          </p>
        </motion.div>

        {/* Bold commitment strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16"
        >
          {commitments.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <p className="text-white font-bold text-base leading-snug">{c.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Principles grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 group"
            >
              <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${p.bg} group-hover:scale-110 transition-transform duration-300`}>
                <p.icon className={`w-5 h-5 ${p.color}`} />
              </div>
              <h4 className={`font-bold text-lg mb-3 ${p.color}`}>{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pledge card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-emerald-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-background to-teal-900/10 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          <div className="relative z-10 px-8 md:px-16 py-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-3">Our Pledge</p>
              <p className="text-xl md:text-2xl font-display font-semibold text-white leading-snug mb-3">
                We will never deploy a model we would not be comfortable explaining to the people it affects — in the language they speak, in terms they understand.
              </p>
              <p className="text-muted-foreground text-sm">
                This is not a legal disclaimer. It is the standard we hold ourselves to — and invite our users, partners, and critics to hold us to as well.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Linkedin, Sprout, Quote } from "lucide-react";

export function Founder() {
  return (
    <section id="founder" className="py-16 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sprout className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-sm font-medium text-muted-foreground">The Person Behind the Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Founder</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center md:items-start">

              {/* Avatar / Initials */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30 text-3xl font-display font-bold text-white select-none">
                    AP
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
                    <Sprout className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/atsfy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-xs font-semibold text-[#7bb3f0] hover:bg-[#0A66C2]/25 hover:border-[#0A66C2]/50 transition-all duration-200"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Founder & Managing Partner</p>
                <h3 className="text-3xl font-display font-bold text-white mb-1">Ayan Pal</h3>
                <p className="text-sm font-medium text-muted-foreground mb-6">ATSfy Technologies</p>

                {/* Quote */}
                <div className="relative pl-5 border-l-2 border-primary/40 mb-6">
                  <Quote className="absolute -top-1 -left-3 w-5 h-5 text-primary/40" />
                  <p className="text-lg text-white/85 font-light leading-relaxed italic">
                    Hardcore farmer turned tech founder. Building ATSfy — a transparent, merit-first hiring system as honest and visible as a field in daylight.
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ayan brings a first-principles perspective to a problem that too often goes unseen: the opacity and inequity baked into modern hiring. Rooted in Northeast India and driven by the belief that merit should speak louder than networks, he is building the infrastructure for a fairer professional world.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

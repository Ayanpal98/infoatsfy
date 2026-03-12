import { motion } from "framer-motion";
import { Cpu, Layers, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden"
        >
          {/* Inner decorative bg */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              The Engine <span className="text-muted-foreground font-light">Behind the Ecosystem</span>
            </h2>
            
            <p className="text-xl text-blue-100/80 leading-relaxed mb-10 font-light">
              ATSFY Technologies isn't just a holding company. We are the foundational core intelligence layer. We build the shared infrastructure, models, and reasoning engines that give rise to our specialized vertical applications.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { icon: Layers, title: "Shared Architecture", desc: "Common data models that bridge different verticals securely." },
                { icon: Cpu, title: "Core Intelligence", desc: "Centralized AI reasoning engines powering all products." },
                { icon: Zap, title: "Rapid Deployment", desc: "Infrastructure that allows us to spin up new AI tools fast." }
              ].map((feature, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <feature.icon className="w-8 h-8 text-accent" />
                  <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}

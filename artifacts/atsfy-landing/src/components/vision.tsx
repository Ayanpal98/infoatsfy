import { motion } from "framer-motion";
import { Globe, MapPin, Network } from "lucide-react";

export function Vision() {
  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">Our Roots</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
              From Northeast India <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">To the World</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that world-class innovation can happen anywhere. Deeply rooted in the Northeast of India, ATSFY Technologies is building an interconnected AI ecosystem that solves global challenges.
            </p>
            
            <ul className="space-y-4">
              {[
                { icon: Network, title: "Interconnected Synergy", desc: "Our products don't just exist; they communicate, share intelligence, and compound value." },
                { icon: Globe, title: "Global Applicability", desc: "Built locally, designed to scale globally across borders and industries." }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 aspect-[4/3] flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src={`${import.meta.env.BASE_URL}images/globe-nodes.png`}
                alt="Global AI Network"
                className="w-full h-full object-cover rounded-xl filter brightness-110 contrast-125 transition-transform duration-700 group-hover:scale-105 mix-blend-lighten"
              />
              {/* Overlay styling for the image to blend better with dark theme */}
              <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_40px_rgba(5,10,21,1)]" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

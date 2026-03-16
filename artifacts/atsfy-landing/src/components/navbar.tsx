import { useState, useEffect, useRef } from "react";
import { Menu, X, Cpu, GraduationCap, BrainCircuit, Users, Rocket, Presentation, LineChart, ChevronDown, ArrowUpRight, ShieldCheck, Lightbulb, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const products = [
  {
    icon: GraduationCap,
    name: "Education AI",
    tagline: "Personalised learning for every student",
    href: "https://education-ai-assistant.lovable.app/",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20"
  },
  {
    icon: BrainCircuit,
    name: "Knowledge Enabler",
    tagline: "Complex info made simple and actionable",
    href: "https://knowledge-enabler.lovable.app/chat",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20"
  },
  {
    icon: Users,
    name: "ATSfy Core",
    tagline: "Fair, transparent AI hiring — no black boxes",
    href: "https://atsfy-your-resume.lovable.app/",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20"
  },
  {
    icon: Rocket,
    name: "StartupLens",
    tagline: "Validate your startup, match the right investors",
    href: "https://ventureval.lovable.app/",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20"
  },
  {
    icon: Presentation,
    name: "Pitch Deck Pro",
    tagline: "AI-built investor decks in minutes",
    href: "https://pitchdeckanalyse.lovable.app",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/20"
  },
  {
    icon: LineChart,
    name: "Finance XAI",
    tagline: "Financial guidance explained in plain language",
    href: "https://intelli-finance-insights--ayanpal0698.replit.app/",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20"
  },
];

const quickLinks = [
  { label: "Our Values", href: "#values", icon: Lightbulb },
  { label: "AI Ethics", href: "#ethics", icon: ShieldCheck },
  { label: "Founder Story", href: "#founder", icon: MapPin },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setEcosystemOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Values", href: "#values" },
    { name: "Vision", href: "#vision" },
    { name: "Ethics", href: "#ethics" },
    { name: "Founder", href: "#founder" },
    { name: "Future", href: "#future" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        "backdrop-blur-xl border-b",
        isScrolled
          ? "bg-[rgba(5,10,21,0.85)] border-white/10 shadow-[0_1px_32px_rgba(0,0,0,0.5)] py-4"
          : "bg-[rgba(5,10,21,0.35)] border-white/[0.06] py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white">
            ATSFY <span className="text-primary font-medium">Technologies</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">

          {/* Ecosystem mega-menu trigger */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setEcosystemOpen((o) => !o)}
              className={cn(
                "flex items-center gap-1.5 text-sm font-medium transition-colors duration-200",
                ecosystemOpen ? "text-white" : "text-muted-foreground hover:text-white"
              )}
            >
              Ecosystem
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", ecosystemOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {ecosystemOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-[780px] rounded-2xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.7)] overflow-hidden"
                  style={{ background: "rgba(5,10,25,0.97)", backdropFilter: "blur(24px)" }}
                >
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-5 pb-4 border-b border-white/8">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">ATSFY Ecosystem</p>
                        <h3 className="text-lg font-display font-bold text-white mb-1">Six AI Ventures. One Connected Platform.</h3>
                        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
                          Built from Northeast India — covering the full arc from <span className="text-white/80">learning</span> to <span className="text-white/80">earning</span>, <span className="text-white/80">building</span> to <span className="text-white/80">thriving</span>. Every product is explainable, fair, and accessible.
                        </p>
                      </div>
                      <a
                        href="#ecosystem"
                        onClick={() => setEcosystemOpen(false)}
                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors"
                      >
                        Full Ecosystem <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Products grid */}
                    <div className="grid grid-cols-3 gap-2.5 mb-5">
                      {products.map((p, i) => (
                        <a
                          key={i}
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setEcosystemOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200 group"
                        >
                          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 ${p.bg} group-hover:scale-110 transition-transform duration-200`}>
                            <p.icon className={`w-4 h-4 ${p.color}`} />
                          </div>
                          <div className="min-w-0">
                            <p className={`text-xs font-bold leading-snug ${p.color}`}>{p.name}</p>
                            <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{p.tagline}</p>
                          </div>
                          <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-white/50 flex-shrink-0 mt-0.5 ml-auto transition-colors" />
                        </a>
                      ))}
                    </div>

                    {/* Quick links footer */}
                    <div className="flex items-center gap-2 pt-4 border-t border-white/8">
                      <p className="text-[11px] text-muted-foreground/60 font-medium mr-2">Explore:</p>
                      {quickLinks.map((ql, i) => (
                        <a
                          key={i}
                          href={ql.href}
                          onClick={() => setEcosystemOpen(false)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium text-muted-foreground border border-white/8 hover:bg-white/5 hover:text-white hover:border-white/15 transition-all duration-150"
                        >
                          <ql.icon className="w-3 h-3" />
                          {ql.label}
                        </a>
                      ))}
                      <a
                        href="#future"
                        onClick={() => setEcosystemOpen(false)}
                        className="ml-auto flex items-center gap-1 text-[11px] font-medium text-primary/70 hover:text-primary transition-colors"
                      >
                        See our roadmap →
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Regular nav links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#ecosystem"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Explore Ecosystem
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(5,10,21,0.97)] backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">

          {/* Mobile ecosystem summary */}
          <div className="rounded-xl border border-white/8 p-4 mb-2">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Ecosystem — 6 Ventures</p>
            <div className="grid grid-cols-2 gap-2">
              {products.map((p, i) => (
                <a
                  key={i}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <p.icon className={`w-3.5 h-3.5 flex-shrink-0 ${p.color}`} />
                  <span className="text-xs font-medium text-white/80">{p.name}</span>
                </a>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-muted-foreground hover:text-white px-4 py-2 rounded-md hover:bg-white/5"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#ecosystem"
            className="text-base font-medium text-white px-4 py-2 rounded-md bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Explore Ecosystem
          </a>
        </div>
      )}
    </header>
  );
}

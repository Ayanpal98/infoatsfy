import { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Ecosystem", href: "#ecosystem" },
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
        <a 
          href="#" 
          className="flex items-center gap-2.5 group"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide text-white">
            ATSFY <span className="text-primary font-medium">Technologies</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-[rgba(5,10,21,0.92)] backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
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

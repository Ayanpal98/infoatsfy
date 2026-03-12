import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/80 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-wide text-white">
                ATSFY <span className="text-primary font-medium">Technologies</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm mb-6">
              Building an interconnected AI infrastructure — from talent readiness to financial growth — emerging from the Northeast for India and beyond.
            </p>
            <a href="mailto:hello@atsfy.com" className="text-white hover:text-primary transition-colors font-medium">
              hello@atsfy.com
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Ecosystem</h4>
            <ul className="space-y-4">
              {['Education AI', 'Knowledge Enabler', 'ATSfy Core', 'StartupLens', 'Finance XAI'].map((item) => (
                <li key={item}>
                  <a href="#ecosystem" className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Vision', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ATSFY Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

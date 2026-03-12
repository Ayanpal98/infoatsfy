import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Ecosystem } from "@/components/ecosystem";
import { Vision } from "@/components/vision";
import { About } from "@/components/about";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <About />
        <Vision />
      </main>
      <Footer />
    </div>
  );
}

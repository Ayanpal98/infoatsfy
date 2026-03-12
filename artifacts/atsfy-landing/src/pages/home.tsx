import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Ecosystem } from "@/components/ecosystem";
import { About } from "@/components/about";
import { Values } from "@/components/values";
import { Vision } from "@/components/vision";
import { Ethics } from "@/components/ethics";
import { Founder } from "@/components/founder";
import { FutureVision } from "@/components/future-vision";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <About />
        <Values />
        <Vision />
        <Ethics />
        <Founder />
        <FutureVision />
      </main>
      <Footer />
    </div>
  );
}

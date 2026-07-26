import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ExperiencesIntro } from "@/components/experiences-intro";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Seamless transition into Experiences Intro */}
      <ExperiencesIntro />
    </main>
  );
}

import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col">
      <Navbar />
      <Hero />
      
      {/* The rest of the page would go here, continuing below the wave */}
      {/* For now we just add a placeholder section below to show the wave effect properly */}
      <section className="bg-secondary min-h-[50vh]">
        {/* Next section content goes here */}
      </section>
    </main>
  );
}

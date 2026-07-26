import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col pt-[120px]">
      <Navbar />
      
      <div className="flex-grow max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24 w-full text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 leading-[1.1] tracking-[-0.02em]">
          Visual <br className="hidden md:block"/><span className="italic">Gallery</span>
        </h1>

        <div className="space-y-16 text-[16px] md:text-[18px] text-foreground/80 font-light leading-[2.2] tracking-wide">
          
          <section>
            <p className="italic text-terracotta text-xl mb-6">Curated visual spaces</p>
            <p>The website is designed to accommodate future experiences and events as the brand grows, making it easy to add new workshops, collaborations, wellness experiences, festivals, and community events.</p>
            <p className="mt-8 opacity-60">Visual gallery collection coming soon.</p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col pt-[120px]">
      <Navbar />
      
      <div className="flex-grow max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24 w-full text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 leading-[1.1] tracking-[-0.02em]">
          About <br className="hidden md:block"/><span className="italic">The Artisan House</span>
        </h1>

        <div className="space-y-16 text-[16px] md:text-[18px] text-foreground/80 font-light leading-[2.2] tracking-wide">
          
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Brand Concept</h2>
            <p className="mb-6">The Artisan House is a creative experience brand that brings people together through art, wellness, community, and memories. We create calm, inspiring spaces where people can slow down, express themselves, connect with others, and make lasting memories.</p>
            <p>Rather than simply organizing events, we design thoughtfully curated experiences that encourage creativity, mindfulness, celebration, and genuine human connection.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Slogan</h2>
            <p className="italic text-terracotta text-xl">Art &bull; Wellness &bull; Community &bull; Memories</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Short Brand Bio</h2>
            <p>The Artisan House is where creativity meets connection. We curate unique art, wellness, community, memories that inspire people to pause, create, and celebrate meaningful moments together.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Our Vision</h2>
            <p>To build a community where creativity, mindfulness, and meaningful connections become part of everyday life through thoughtfully designed experiences.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Our Mission</h2>
            <p>To create memorable experiences that inspire creativity, encourage genuine human connection, and bring moments of joy, relaxation, and celebration into people's lives.</p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}

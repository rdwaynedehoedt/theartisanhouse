import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ExperiencesPage() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col pt-[120px]">
      <Navbar />
      
      <div className="flex-grow max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24 w-full text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 leading-[1.1] tracking-[-0.02em]">
          Our <br className="hidden md:block"/><span className="italic">Experiences</span>
        </h1>

        <div className="space-y-16 text-[16px] md:text-[18px] text-foreground/80 font-light leading-[2.2] tracking-wide">
          
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Signature Experiences</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>Sip &amp; Paint Sessions</li>
              <li>Creative Wellness Sessions</li>
              <li>Mindful Conversations</li>
              <li>Creative Memories to take home</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Custom Experiences</h2>
            <p>We also design personalised creative events tailored to individual requirements, making every celebration unique and memorable.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-6">Our Experience Includes</h2>
            <ul className="space-y-4 list-disc list-inside">
              <li>A relaxing and welcoming atmosphere</li>
              <li>Guided creative sessions</li>
              <li>Meaningful conversations</li>
              <li>Mindfulness and wellness activities</li>
              <li>Quality refreshments (depending on the event)</li>
              <li>Beautifully curated event styling</li>
              <li>Creative keepsakes to take home</li>
              <li>Lasting memories and connections</li>
            </ul>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}

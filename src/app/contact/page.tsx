import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col pt-[120px]">
      <Navbar />
      
      <div className="flex-grow max-w-[800px] mx-auto px-6 md:px-10 py-16 md:py-24 w-full text-center md:text-left">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-20 leading-[1.1] tracking-[-0.02em]">
          Get in <br className="hidden md:block"/><span className="italic">Touch</span>
        </h1>

        <div className="space-y-16 text-[16px] md:text-[18px] text-foreground/80 font-light leading-[2.2] tracking-wide">
          
          <section>
            <p className="mb-8">We would love to hear from you. Whether you are looking to book a signature experience, host a private event, or collaborate with us.</p>
            
            <div className="flex flex-col gap-6 md:items-start items-center">
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Email</h3>
                <a href="mailto:hello@theartisanhouse.com" className="hover:text-terracotta transition-colors">hello@theartisanhouse.com</a>
              </div>
              
              <div>
                <h3 className="font-serif text-xl text-foreground mb-2">Social</h3>
                <a href="https://www.instagram.com/theartisanhouseofficial/" target="_blank" rel="noreferrer" className="hover:text-terracotta transition-colors">@theartisanhouseofficial</a>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}

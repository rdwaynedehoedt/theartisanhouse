import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#FAF8F5] w-full border-t border-terracotta/10 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col items-center">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center text-center mb-16">
          <Link href="/" className="font-serif text-3xl tracking-tight text-foreground mb-6 hover:opacity-80 transition-opacity">
            The Artisan House.
          </Link>
          <p className="text-[10px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-terracotta">
            Art &bull; Wellness &bull; Community &bull; Memories
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mb-20 text-[12px] font-medium tracking-[0.05em] uppercase text-foreground/70">
          <Link href="#" className="hover:text-terracotta transition-colors">About</Link>
          <Link href="#" className="hover:text-terracotta transition-colors">Experiences</Link>
          <Link href="#" className="hover:text-terracotta transition-colors">Events</Link>
          <Link href="#" className="hover:text-terracotta transition-colors">Gallery</Link>
          <Link href="#" className="hover:text-terracotta transition-colors">Contact</Link>
          <Link href="#" className="hover:text-terracotta transition-colors">Book an Experience</Link>
          <a 
            href="https://www.instagram.com/theartisanhouseofficial/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-terracotta transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-[12px] text-foreground/40 font-light w-full">
          &copy; 2026 The Artisan House. All rights reserved.
        </div>
        
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { StudioCrosshair, StudioDotGrid } from "./StudioDecorations";

export default function BrandFooter() {
  return (
    <footer className="w-full bg-[#17243A] text-[#FFF9EE] border-t border-white/10 relative overflow-hidden pb-28 md:pb-8">
      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 pattern-fine-grid-navy opacity-40 pointer-events-none" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-[#315BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-10 w-80 h-80 bg-[#F08075]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="px-margin-mobile lg:px-margin pt-16 sm:pt-20 pb-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/10">
          
          {/* Studio Brand Bio */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="inline-block group bg-white px-3.5 py-1.5 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
              <Image
                src="/webly-logo-navy.png"
                alt="WEBLY Studio"
                width={120}
                height={38}
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </Link>
            <p className="font-body-md text-sm text-[#DCD9F5] max-w-sm leading-relaxed">
              Bespoke digital flagships, creative monographs, and interactive celebration experiences crafted with typographic precision.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-[#FFF9EE]/70 font-mono">
              <StudioCrosshair size={12} stroke="#315BFF" />
              <span>Studio Grid 1.0 • Chennai, India</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3.5">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F6D77A] font-bold block">
              Navigation
            </span>
            <nav className="flex flex-col space-y-2.5 text-xs sm:text-sm font-medium">
              <Link
                href="/"
                className="text-[#DCD9F5] hover:text-white transition-colors"
              >
                Home
              </Link>
              <a
                href="/#offerings"
                className="text-[#DCD9F5] hover:text-white transition-colors"
              >
                Offerings &amp; Packages
              </a>
              <a
                href="/#work"
                className="text-[#DCD9F5] hover:text-white transition-colors"
              >
                Curated Work
              </a>
              <Link
                href="/pricing"
                className="text-[#DCD9F5] hover:text-white transition-colors"
              >
                Pricing Breakdown
              </Link>
              <a
                href="/#why-us"
                className="text-[#DCD9F5] hover:text-white transition-colors"
              >
                Philosophy
              </a>
              <a
                href="/#contact"
                className="text-[#DCD9F5] hover:text-white transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Direct Transmission Contacts */}
          <div className="md:col-span-3 space-y-3.5">
            <span className="font-label-sm text-xs uppercase tracking-widest text-[#F08075] font-bold block">
              Direct Transmission
            </span>
            <div className="flex flex-col space-y-3 text-xs sm:text-sm">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/60 block mb-0.5 font-bold">
                  WhatsApp Direct
                </span>
                <a
                  className="text-[#FFF9EE] hover:text-[#315BFF] transition-colors font-semibold"
                  href="https://wa.me/916379290968?text=Hello%20Webly%20Studio,%20I%20would%20like%20to%20start%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 63792 90968
                </a>
              </div>
              <div className="pt-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/60 block mb-0.5 font-bold">
                  Email Studio
                </span>
                <a
                  className="text-[#FFF9EE] hover:text-[#315BFF] transition-colors font-semibold break-all"
                  href="mailto:webly.studioservice@gmail.com"
                >
                  webly.studioservice@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <StudioDotGrid cols={6} rows={3} fill="#DCD9F5" opacity={0.25} gap={10} />
            </div>
          </div>
        </div>

        {/* Bottom Legal / Metadata Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-label-sm text-[10px] sm:text-xs uppercase tracking-widest text-[#DCD9F5]/80 gap-3">
          <div>© 2025 WEBLY STUDIO. ALL RIGHTS RESERVED.</div>
          <div className="flex items-center gap-3">
            <span>YOUR IDEAS. OUR DIGITAL CANVAS.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#315BFF]" />
            <span>EST. 2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

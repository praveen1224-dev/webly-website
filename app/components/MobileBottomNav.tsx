"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, Sparkles, CreditCard, MessageCircle } from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const isPricing = pathname === "/pricing";

  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md rounded-full px-2.5 py-1.5 bg-white/90 backdrop-blur-xl border border-[#17243A]/10 shadow-[0_8px_30px_rgba(23,36,58,0.14)] pb-safe">
      <div className="flex items-center justify-between gap-1">
        <Link
          href="/"
          className={`flex flex-col items-center justify-center min-w-[52px] min-h-[44px] py-1 px-2 rounded-full transition-all text-center ${
            !isPricing
              ? "text-[#315BFF] bg-[#315BFF]/10 font-bold"
              : "text-[#17243A]/70 hover:text-[#17243A]"
          }`}
          aria-label="Home"
        >
          <Home size={17} />
          <span className="font-label-sm text-[10px] uppercase tracking-wider mt-0.5">Home</span>
        </Link>

        <a
          href="/#offerings"
          className="flex flex-col items-center justify-center min-w-[52px] min-h-[44px] py-1 px-2 rounded-full text-[#17243A]/70 hover:text-[#17243A] hover:bg-[#17243A]/5 transition-all text-center"
          aria-label="Offerings"
        >
          <Sparkles size={17} />
          <span className="font-label-sm text-[10px] uppercase tracking-wider mt-0.5">Offerings</span>
        </a>

        <a
          href="/#work"
          className="flex flex-col items-center justify-center min-w-[52px] min-h-[44px] py-1 px-2 rounded-full text-[#17243A]/70 hover:text-[#17243A] hover:bg-[#17243A]/5 transition-all text-center"
          aria-label="Work"
        >
          <Layers size={17} />
          <span className="font-label-sm text-[10px] uppercase tracking-wider mt-0.5">Work</span>
        </a>

        <Link
          href="/pricing"
          className={`flex flex-col items-center justify-center min-w-[52px] min-h-[44px] py-1 px-2 rounded-full transition-all text-center ${
            isPricing
              ? "text-[#315BFF] bg-[#315BFF]/10 font-bold"
              : "text-[#17243A]/70 hover:text-[#17243A]"
          }`}
          aria-label="Pricing"
        >
          <CreditCard size={17} />
          <span className="font-label-sm text-[10px] uppercase tracking-wider mt-0.5">Pricing</span>
        </Link>

        <a
          href="https://wa.me/916379290968?text=Hello%20Webly%20Studio,%20I%20would%20like%20to%20start%20a%20project."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 min-h-[44px] px-3.5 py-1.5 rounded-full bg-[#315BFF] text-white hover:bg-[#17243A] transition-all shadow-sm font-bold text-[11px] uppercase tracking-wider shrink-0 cursor-pointer"
          aria-label="Start Project via WhatsApp"
        >
          <MessageCircle size={15} className="shrink-0" />
          <span>Start</span>
        </a>
      </div>
    </nav>
  );
}

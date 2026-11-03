"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUM = "916379290968";
const WHATSAPP_DISPLAY = "+91 63792 90968";
const STUDIO_EMAIL = "webly.studioservice@gmail.com";

export default function BrandFooter() {
  return (
    <footer className="relative bg-[#000000] text-white pt-20 pb-12 overflow-hidden border-t border-white/[0.08]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Top Info Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block group">
              <Image
                src="/webly-logo.png"
                alt="WEBLY"
                width={140}
                height={50}
                className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <p className="font-syne text-lg font-bold text-white max-w-sm">
              We build digital experiences that stand apart.
            </p>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm font-sans">
              An independent web design and development atelier. Thoughtful art direction, handcrafted code, and founder-direct collaboration.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3 font-mono text-xs text-white/60">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
              NAVIGATION
            </p>
            <ul className="space-y-2">
              <li>
                <a href="#previews" className="hover:text-white transition">
                  Website Previews
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Studio Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing Index
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  Detailed Rate Card ↗
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Inquiries */}
          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-white/70">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
              DIRECT INQUIRIES
            </p>
            <div>
              <span className="text-white/40 block text-[10px]">WHATSAPP HOTLINE</span>
              <a
                href={`https://wa.me/${WHATSAPP_NUM}`}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline mt-0.5 inline-block text-sm font-semibold"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>

            <div className="pt-2">
              <span className="text-white/40 block text-[10px]">STUDIO EMAIL</span>
              <a
                href={`mailto:${STUDIO_EMAIL}`}
                className="text-white hover:underline mt-0.5 inline-block"
              >
                {STUDIO_EMAIL}
              </a>
            </div>

            <div className="pt-2 font-mono text-[10px] text-[#d8c3a5] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              <span>AVAILABLE FOR COMMISSIONS · CHENNAI &amp; WORLDWIDE</span>
            </div>
          </div>
        </div>

        {/* Massive Outlined Watermark Typography (Direct from Reference Image!) */}
        <div className="relative py-12 select-none overflow-hidden text-center">
          <p className="font-syne text-[80px] sm:text-[140px] md:text-[200px] lg:text-[260px] font-black tracking-tighter uppercase leading-none text-stroke-watermark pointer-events-none">
            WEBLY
          </p>
        </div>

        {/* Legal & Status Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40 border-t border-white/[0.06] pt-8">
          <p>© 2025 WEBLY STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span>DIGITAL ATELIER</span>
            <span>•</span>
            <span>HANDCRAFTED NEXT.JS</span>
            <span>•</span>
            <span>FOUNDER DIRECT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

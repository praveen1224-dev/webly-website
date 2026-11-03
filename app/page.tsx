"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";

import LogoIntro from "./components/LogoIntro";
import ChromeStar from "./components/ChromeStar";
import InteractivePreviews from "./components/InteractivePreviews";
import BentoShowcase from "./components/BentoShowcase";
import CascadingResults from "./components/CascadingResults";
import EditorialServices from "./components/EditorialServices";
import ReferencePricing from "./components/ReferencePricing";
import SplitFaq from "./components/SplitFaq";
import BrandFooter from "./components/BrandFooter";

const WHATSAPP_NUM = "916379290968";
const WHATSAPP_DISPLAY = "+91 63792 90968";

function getWhatsAppLink(serviceOrText?: string) {
  const text = serviceOrText
    ? `Hi WEBLY! I'm interested in discussing "${serviceOrText}". Please share timeline, scope, and quotation.`
    : "Hi WEBLY! I would like to discuss initiating a bespoke web project.";
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#000000] text-[#f4f4f5] selection:bg-white selection:text-black font-sans">
      {/* 1. Cinematic WEBLY Opening Logo Animation */}
      <LogoIntro />

      {/* 2. Minimalist Floating Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#000000]/85 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Brand Mark */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/webly-logo.png"
              alt="WEBLY"
              width={140}
              height={50}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-syne font-bold text-sm tracking-[0.25em] text-white uppercase hidden sm:inline-block">
              WEBLY
            </span>
          </Link>

          {/* Minimal Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">
            <a href="#previews" className="hover:text-white transition-colors">
              Previews
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Rate Card ↗
            </Link>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">Let&apos;s Talk</span>
              <span className="sm:hidden">WhatsApp</span>
              <ArrowRight size={13} className="hidden sm:inline" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-out Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/[0.08] bg-[#09090c] px-6 py-6 font-mono text-xs uppercase tracking-widest text-white/70 space-y-4 shadow-2xl">
            <a
              href="#previews"
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-white/[0.06] pb-3 hover:text-white"
            >
              Real Website Previews
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-white/[0.06] pb-3 hover:text-white"
            >
              Studio Services
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-white/[0.06] pb-3 hover:text-white"
            >
              Pricing Panels
            </a>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-white/[0.06] pb-3 hover:text-white"
            >
              Complete Rate Directory ↗
            </Link>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-white/[0.06] pb-3 hover:text-white"
            >
              FAQ
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm bg-white py-3 font-semibold text-black hover:bg-neutral-200 transition"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION — High-End Monochromatic Cinematic Editorial */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle Dark Ambient Gradients */}
        <div className="pointer-events-none absolute inset-0 bg-grid-hairline opacity-25" />
        <div className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-white/[0.025] blur-[140px] rounded-full" />

        <div className="relative mx-auto max-w-[1440px] w-full">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-8">
              {/* Top Capsule Kicker */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-white/75 mb-6 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <span>ACCEPTING COMMISSIONS · CHENNAI &amp; WORLDWIDE</span>
              </div>

              {/* Bold Command Headline (Matching Reference Typography Hierarchy) */}
              <h1 className="font-syne text-[46px] sm:text-[68px] lg:text-[84px] font-bold leading-[0.92] tracking-[-0.035em] text-[#ffffff] uppercase">
                WE BUILD DIGITAL
                <br />
                EXPERIENCES THAT
                <br />
                <span className="font-serif italic font-normal text-white/70 lowercase sm:text-[60px] lg:text-[76px] tracking-normal">
                  stand
                </span>{" "}
                APART.
              </h1>

              {/* Concise Supporting Sentence — No Bloat */}
              <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-white/60 font-sans border-l-2 border-white/20 pl-4">
                From unforgettable milestone invitations to complete digital platforms, we turn ideas into websites people actually remember. Handcrafted code. Direct collaboration. Zero agency bloat.
              </p>

              {/* Dual Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
                >
                  <span>Start Your Project</span>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
                    <ArrowRight size={12} />
                  </div>
                </a>

                <a
                  href="#previews"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-6 py-3.5 font-mono text-xs uppercase tracking-wider text-white/80 transition-all hover:bg-white/10 hover:border-white/40 hover:text-white"
                >
                  <span>Explore Live Previews</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>

            {/* Right Column: 3D Chrome Starburst Sculpture (Exact from Reference!) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <ChromeStar size={340} />
            </div>
          </div>

          {/* Production Ecosystem Bar */}
          <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-white/40">
            <span className="text-[10px] uppercase tracking-widest text-white/30">
              PRODUCTION STACK &amp; STANDARDS:
            </span>
            <div className="flex flex-wrap items-center gap-6 text-white/60">
              <span className="hover:text-white transition">Next.js 16</span>
              <span>•</span>
              <span className="hover:text-white transition">React 19</span>
              <span>•</span>
              <span className="hover:text-white transition">TypeScript</span>
              <span>•</span>
              <span className="hover:text-white transition">Tailwind CSS v4</span>
              <span>•</span>
              <span className="hover:text-white transition">Sub-0.5s Global Edge</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Real Interactive Website Previews (Zero Fake AI Images!) */}
      <InteractivePreviews />

      {/* 5. Asymmetrical Modular Bento UI Showcase */}
      <BentoShowcase />

      {/* 6. Editorial Services Layout (Large Numbered Rows) */}
      <EditorialServices />

      {/* 7. Proven Results / The Studio Standard (Angled Cascading Dark Cards) */}
      <CascadingResults />

      {/* 8. Reference-Inspired Pricing Panels */}
      <ReferencePricing />

      {/* 9. Split Layout FAQ */}
      <SplitFaq />

      {/* 10. Giant Watermark Outlined Brand Footer */}
      <BrandFooter />
    </main>
  );
}

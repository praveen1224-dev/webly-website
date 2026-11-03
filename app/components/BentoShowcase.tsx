"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Code2,
  Cpu,
  Globe,
  Layers,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const WHATSAPP_NUM = "916379290968";

export default function BentoShowcase() {
  const [activeMetricTab, setActiveMetricTab] = useState<"speed" | "mobile" | "seo">("speed");

  return (
    <section className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#060608] border-b border-white/[0.08]">
      {/* Background Architectural Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-hairline opacity-20" />

      <div className="mx-auto max-w-[1440px] relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            <span>THE STUDIO STANDARD</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[0.96]">
            CRAFT THAT DELIVERS
            <br />
            <span className="font-serif italic font-normal text-[#d8c3a5] lowercase sm:text-5xl lg:text-6xl">
              real
            </span>{" "}
            IMPACT.
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed font-sans max-w-xl">
            We reject bloated templates and disposable page-builders. Every WEBLY build combines art-directed editorial design with surgically clean code for authority and conversion.
          </p>
        </div>

        {/* Asymmetrical Bento Grid — Inspired directly by Reference Image! */}
        <div className="grid gap-6 md:grid-cols-12">
          {/* Card 1 (Top Left / Span 7): Large Performance Showcase Panel */}
          <div className="md:col-span-7 rounded-2xl border border-white/[0.1] bg-[#0c0c10] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="pointer-events-none absolute top-0 right-0 h-48 w-48 rounded-full bg-white/[0.03] blur-3xl" />

            <div>
              {/* Header inside Card */}
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                    SPEED &amp; CLIENT EXPERIENCE
                  </span>
                </div>
                <div className="flex gap-1 font-mono text-[9px]">
                  {(["speed", "mobile", "seo"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveMetricTab(tab)}
                      className={`px-3 py-1 rounded-sm transition ${
                        activeMetricTab === tab
                          ? "bg-white text-black font-semibold"
                          : "bg-white/5 text-white/50 hover:text-white"
                      }`}
                    >
                      {tab.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Metric Display */}
              {activeMetricTab === "speed" && (
                <div>
                  <span className="font-mono text-[10px] text-white/40 block">AVERAGE MOBILE LOAD TIME:</span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-syne text-5xl sm:text-6xl font-bold text-white tracking-tight">
                      0.4s
                    </span>
                    <span className="font-mono text-xs text-[#d8c3a5]">
                      Near-instant page transition
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans max-w-lg">
                    Pure hand-coded Next.js with edge caching and zero slow plugins. Your visitors experience immediate response, whether checking a wedding invitation on mobile or browsing a business portfolio.
                  </p>
                </div>
              )}

              {activeMetricTab === "mobile" && (
                <div>
                  <span className="font-mono text-[10px] text-white/40 block">MOBILE READABILITY &amp; TOUCH:</span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-syne text-5xl sm:text-6xl font-bold text-white tracking-tight">
                      100%
                    </span>
                    <span className="font-mono text-xs text-[#d8c3a5]">
                      Native Touch Ergonomics
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans max-w-lg">
                    Every touch target, button height, and typographic scale is designed deliberately for smartphones. Your website feels natural and effortless in the palm of your hand.
                  </p>
                </div>
              )}

              {activeMetricTab === "seo" && (
                <div>
                  <span className="font-mono text-[10px] text-white/40 block">SEARCH ENGINE &amp; SHARING SCORE:</span>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="font-syne text-5xl sm:text-6xl font-bold text-white tracking-tight">
                      98+
                    </span>
                    <span className="font-mono text-xs text-[#d8c3a5]">
                      Verified Semantic Structure
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-white/60 leading-relaxed font-sans max-w-lg">
                    Clean URLs, rich OpenGraph link preview cards for WhatsApp and social media, and structured search metadata built directly into the source code.
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Inclusions Strip */}
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-4 font-mono text-[10px]">
              <div>
                <span className="text-white/40 block">OPTIMIZATION</span>
                <span className="text-white font-semibold">Lossless WebP</span>
              </div>
              <div>
                <span className="text-white/40 block">PERFORMANCE</span>
                <span className="text-white font-semibold">Sub-Second Load</span>
              </div>
              <div>
                <span className="text-white/40 block">COMPATIBILITY</span>
                <span className="text-white font-semibold">iOS &amp; Android</span>
              </div>
            </div>
          </div>

          {/* Card 2 (Top Right / Span 5): Conversion & Inquiries Panel */}
          <div className="md:col-span-5 rounded-2xl border border-white/[0.1] bg-[#0c0c10] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-4 border-b border-white/[0.06] pb-3">
                <span>CONVERSION ARCHITECTURE</span>
                <span className="text-white/80">DIRECT ACTIONS</span>
              </div>

              <h3 className="font-syne text-xl font-bold text-white mb-2">
                Frictionless Client Pathways
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-sans mb-6">
                Websites built with direct pathways to engagement: instant WhatsApp click-to-chat, seamless RSVP captures, and easy inquiry routing.
              </p>

              {/* Visual Curve Graphic in Liquid Silver / White */}
              <div className="relative h-28 w-full rounded-lg bg-black/60 border border-white/5 p-3 flex flex-col justify-end overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
                <svg viewBox="0 0 300 80" fill="none" className="w-full h-16">
                  <path
                    d="M0 60 Q 50 40, 100 50 T 200 25 T 300 10"
                    stroke="#ffffff"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle cx="200" cy="25" r="3.5" fill="#ffffff" />
                  <circle cx="300" cy="10" r="4.5" fill="#d8c3a5" />
                </svg>
                <div className="flex justify-between items-center font-mono text-[9px] text-white/40 mt-1">
                  <span>DISCOVERY</span>
                  <span>INTERACTION</span>
                  <span className="text-white font-semibold">INQUIRY SENT</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs">
              <span className="text-white/50 text-[10px]">WHATSAPP CLICK-TO-CHAT</span>
              <span className="text-white font-semibold text-xs">Pre-Configured</span>
            </div>
          </div>

          {/* Card 3 (Bottom Left / Span 5): Founder-Direct Handshake Card */}
          <div className="md:col-span-5 rounded-2xl border border-white/[0.1] bg-[#0c0c10] p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-3 border-b border-white/[0.06] pb-3">
                <span>FOUNDER PARTNERSHIP</span>
                <span className="text-white font-mono">1-ON-1</span>
              </div>

              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4">
                <MessageCircle size={18} />
              </div>

              <h3 className="font-syne text-2xl font-bold text-white">
                Founder-Direct Collaboration
              </h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed font-sans">
                You work directly with the senior designer and developer building your site. No agency middlemen, account managers, or long ticket delays.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <a
                href={`https://wa.me/${WHATSAPP_NUM}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition"
              >
                <span>Connect with Founder (+91 63792 90968)</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Card 4 (Bottom Right / Span 7): Handcrafted Architecture Chips */}
          <div className="md:col-span-7 rounded-2xl border border-white/[0.1] bg-[#0c0c10] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-4 border-b border-white/[0.06] pb-3">
                <span>ENGINEERING INTEGRITY</span>
                <span className="text-white/60">HANDCRAFTED CODE</span>
              </div>

              <h3 className="font-syne text-2xl font-bold text-white mb-2">
                100% Code &amp; Domain Ownership
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-sans max-w-lg mb-6">
                You receive full source code, asset files, and domain controls upon completion. No proprietary platform lock-in and zero recurring monthly builder fees.
              </p>

              {/* Architecture Layer Chips */}
              <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md">
                  <Code2 size={16} className="text-white mb-2" />
                  <span className="font-semibold text-white block">Next.js 16</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">Lean Modern Framework</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md">
                  <Cpu size={16} className="text-white mb-2" />
                  <span className="font-semibold text-white block">React 19</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">Smooth Micro-State</span>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-md">
                  <Globe size={16} className="text-white mb-2" />
                  <span className="font-semibold text-white block">Global CDN</span>
                  <span className="text-[10px] text-white/40 block mt-0.5">High-Speed Edge Delivery</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-white/40">
              <span>ZERO TEMPLATE BLOAT</span>
              <span className="text-white font-semibold">CLEAN HANDOVER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

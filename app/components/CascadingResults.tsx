"use client";

import { Check, ShieldCheck, Zap, Clock, ArrowRight } from "lucide-react";

const WHATSAPP_NUM = "916379290968";

export default function CascadingResults() {
  return (
    <section className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#000000] border-b border-white/[0.08] overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-32 right-1/4 h-96 w-96 rounded-full bg-white/[0.02] blur-[140px]" />

      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          {/* Left Column: Bold Typographic Statement & 4-Phase Protocol */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>THE STUDIO STANDARD</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[0.96]">
              PROVEN CRAFT
              <br />
              YOU CAN <span className="font-serif italic font-normal text-[#d8c3a5] lowercase">trust.</span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed font-sans max-w-md">
              We do not inflate portfolios with imaginary statistics or fake client claims. Every engagement is built with honesty, transparency, and surgical precision.
            </p>

            {/* The Four-Phase Protocol Mini Checklist */}
            <div className="mt-8 space-y-3 font-mono text-xs">
              {[
                { step: "01", name: "DISCOVER", desc: "Scope & aesthetic tone via direct WhatsApp consultation." },
                { step: "02", name: "DESIGN", desc: "Bespoke art direction & responsive compositions." },
                { step: "03", name: "DEVELOP", desc: "Handcrafted Next.js & Tailwind architecture." },
                { step: "04", name: "LAUNCH", desc: "Cross-device audit & complete domain handover." },
              ].map((phase) => (
                <div
                  key={phase.step}
                  className="flex items-center gap-4 rounded-lg border border-white/[0.06] bg-[#0c0c10] p-3.5 hover:border-white/20 transition-colors"
                >
                  <span className="font-syne text-sm font-bold text-white/40">{phase.step}</span>
                  <div className="flex-1">
                    <span className="font-semibold text-white mr-2">{phase.name}:</span>
                    <span className="text-white/50">{phase.desc}</span>
                  </div>
                  <Check size={14} className="text-white shrink-0" />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20WEBLY!%20I%20would%20like%20to%20consult%20directly%20with%20the%20founder.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition shadow-sm"
              >
                <span>Connect With Founder</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Angled Cascading Dark Cards (Direct from Reference Image!) */}
          <div className="lg:col-span-6 isometric-stage flex justify-center py-8">
            <div className="relative w-full max-w-md space-y-4">
              {/* Card 1: Velocity */}
              <div className="isometric-card rounded-2xl border border-white/20 bg-[#14141a] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <div className="flex items-center justify-between text-white/40 font-mono text-[10px] mb-2">
                  <span>VELOCITY &amp; SCHEDULE</span>
                  <Clock size={14} className="text-white/60" />
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-syne text-4xl font-bold text-white block">3 to 10 Days</span>
                    <span className="text-xs text-white/60 font-sans mt-0.5 block">
                      Rapid turnaround from agreement to live deployment
                    </span>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white font-semibold">
                    100% On-Time
                  </span>
                </div>
              </div>

              {/* Card 2: Ownership */}
              <div className="isometric-card rounded-2xl border border-white/20 bg-[#121217] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl ml-4 sm:ml-8 -mt-2">
                <div className="flex items-center justify-between text-white/40 font-mono text-[10px] mb-2">
                  <span>INDEPENDENT INTEGRITY</span>
                  <ShieldCheck size={14} className="text-white/60" />
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-syne text-4xl font-bold text-white block">100% Ownership</span>
                    <span className="text-xs text-white/60 font-sans mt-0.5 block">
                      Complete source code, assets &amp; domain handover
                    </span>
                  </div>
                  <span className="rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] text-white font-semibold">
                    Zero Lock-In
                  </span>
                </div>
              </div>

              {/* Card 3: Speed */}
              <div className="isometric-card rounded-2xl border border-white/20 bg-[#0e0e12] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-xl ml-8 sm:ml-16 -mt-2">
                <div className="flex items-center justify-between text-white/40 font-mono text-[10px] mb-2">
                  <span>PERFORMANCE LATENCY</span>
                  <Zap size={14} className="text-[#d8c3a5]" />
                </div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="font-syne text-4xl font-bold text-white block">Sub-0.5s</span>
                    <span className="text-xs text-white/60 font-sans mt-0.5 block">
                      Fast global edge page delivery
                    </span>
                  </div>
                  <span className="rounded-full bg-white/15 text-[#d8c3a5] px-2.5 py-1 font-mono text-[10px] font-semibold">
                    Optimized Speed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

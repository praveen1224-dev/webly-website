"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const WHATSAPP_NUM = "916379290968";
const WHATSAPP_DISPLAY = "+91 63792 90968";

const faqs = [
  {
    q: "How fast can you deliver and launch my website?",
    a: "Standard single-page websites (like Online Invitations and Student Portfolios) launch in 2 to 4 days. Multi-page business presences and e-commerce stores typically take 5 to 10 days. We commit to a firm delivery schedule before kickoff.",
  },
  {
    q: "How does the WhatsApp consultation process work?",
    a: "Direct and zero friction. You reach out on WhatsApp (+91 63792 90968) with your ideas, feature checklist, or reference designs. We scope the deliverables, confirm the transparent fixed price, and share live staging links throughout the build.",
  },
  {
    q: "Are there any hidden fees beyond the starting prices?",
    a: "None. All listed rates cover a complete, functional website for that scope. Custom third-party requirements (e.g. specialized payment accounts or external APIs) are quoted transparently upfront.",
  },
  {
    q: "Do I own the complete code and domain once launched?",
    a: "Yes, 100%. We provide a clean GitHub/codebase export and full domain configuration. Zero vendor lock-in or recurring platform fees.",
  },
  {
    q: "Can I request revisions during the design process?",
    a: "Yes. Every project includes structured review checkpoints during design and development. We refine until you are completely confident in the typography, flow, and visual craft.",
  },
  {
    q: "What tech stack do you build with?",
    a: "Production-grade Next.js (App Router), React 19, TypeScript, and Tailwind CSS v4. This delivers sub-second speeds, flawless mobile responsiveness, and high Google SEO scores.",
  },
];

export default function SplitFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#060608] border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Headline & Direct WhatsApp Action */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>FREQUENT INQUIRIES</span>
            </div>

            <h2 className="font-syne text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase leading-[0.96]">
              YOUR QUESTIONS
              <br />
              <span className="font-serif italic font-normal text-white/70 lowercase sm:text-5xl">
                answered.
              </span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed font-sans max-w-sm">
              Everything you need to know about our direct founder collaboration, turnaround timelines, pricing transparency, and codebase ownership.
            </p>

            <div className="mt-8">
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20WEBLY!%20I%20have%20a%20question%20before%20starting.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition"
              >
                <MessageCircle size={15} />
                <span>Ask on WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Sleek Pill Accordion Items */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-white/30 bg-[#121217] shadow-lg"
                      : "border-white/[0.08] bg-[#0c0c10] hover:border-white/20"
                  }`}
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <span className="font-syne text-base font-semibold text-white pr-4">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "border-white bg-white text-black"
                          : "border-white/20 text-white/60"
                      }`}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs leading-relaxed text-white/65 font-sans border-t border-white/[0.04]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

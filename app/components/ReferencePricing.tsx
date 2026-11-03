"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Info, MessageCircle, Sparkles } from "lucide-react";

const WHATSAPP_NUM = "916379290968";
const WHATSAPP_DISPLAY = "+91 63792 90968";

function getWhatsAppLink(service: string) {
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
    `Hi WEBLY! I would like to book or discuss the "${service}". Please share timeline and scope details.`
  )}`;
}

const allEightServices = [
  { name: "Online Invitation Website", price: "₹499", detail: "Digital RSVP, itinerary, countdown, venue maps", category: "Personal" },
  { name: "Birthday Surprise Website", price: "₹999", detail: "Interactive memory vault, clue lockers, wishes board", category: "Personal" },
  { name: "Student Portfolio Website", price: "₹1,499", detail: "Project showcase, resume download, GitHub sync", category: "Personal" },
  { name: "Personal Portfolio Website", price: "₹1,999", detail: "Narrative bio, case studies drawer, custom domain", category: "Personal" },
  { name: "Small Business Website", price: "₹3,999", detail: "Conversion pages, WhatsApp click-to-book, local SEO", category: "Business" },
  { name: "Professional Business Website", price: "₹7,999", detail: "Multi-page corporate presence, lead workflows, case studies", category: "Business" },
  { name: "E-commerce Website", price: "₹12,999", detail: "Digital storefront, product catalog, cart & payments", category: "Commerce" },
  { name: "Custom Web Applications", price: "Custom Quote", detail: "Proprietary software, client dashboards, API tools", category: "Custom" },
];

export default function ReferencePricing() {
  const [showFullIndex, setShowFullIndex] = useState(false);

  return (
    <section id="pricing" className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#000000] border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading — Inspired by Reference Image */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>TRANSPARENT FOUNDATION RATES</span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[0.96]">
            FLEXIBLE PRICING FOR
            <br />
            EVERY <span className="font-serif italic font-normal text-white/70 lowercase sm:text-5xl lg:text-6xl">need.</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
            Transparent, predictable economics with zero agency markups or hidden fees. We verify scope before any commission begins.
          </p>
        </div>

        {/* The 3 Hero Pricing Panels — Exact High-Contrast Treatment from Reference! */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch max-w-6xl mx-auto">
          {/* Card 1 (Dark Charcoal): Personal & Milestone Entry */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-6 sm:p-8 transition-all duration-300 hover:border-white/25">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-3 border-b border-white/[0.06] pb-3">
                <span>PERSONAL &amp; CELEBRATION</span>
                <span>01</span>
              </div>

              <h3 className="font-syne text-xl font-bold text-white">
                Personal &amp; Invitation
              </h3>
              <p className="mt-2 text-xs text-white/55 font-sans leading-relaxed">
                For unforgettable weddings, birthday surprises, student showcases, and creator portfolios.
              </p>

              {/* Prominent Price */}
              <div className="mt-6 border-y border-white/[0.06] py-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block">
                  STARTING FROM
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-syne text-4xl sm:text-5xl font-bold text-white">
                    ₹499
                  </span>
                  <span className="font-mono text-xs text-white/40">/ single project</span>
                </div>
                <span className="font-mono text-[10px] text-white/50 block mt-1">
                  Online Invitation ₹499 · Birthday ₹999 · Portfolio ₹1,499–₹1,999
                </span>
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-2.5 font-mono text-xs text-white/70">
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>Custom Handcrafted Design</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>Interactive RSVP &amp; Countdown</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>Mobile-First Touch Polish</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>2 to 5 Days Typical Turnaround</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06]">
              <a
                href={getWhatsAppLink("Personal / Online Invitation Website (From ₹499)")}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-white hover:text-black transition"
              >
                <MessageCircle size={14} />
                <span>Book Personal Project</span>
              </a>
            </div>
          </div>

          {/* Card 2 (THE CENTERPIECE HIGHLIGHT - SOLID WHITE CARD WITH BLACK TEXT! Direct from Reference!) */}
          <div className="relative flex flex-col justify-between rounded-2xl bg-[#ffffff] text-[#09090b] p-6 sm:p-8 shadow-[0_20px_60px_rgba(255,255,255,0.15)] scale-[1.02] border-2 border-white z-10">
            {/* Highlight Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-black text-white px-4 py-1 font-mono text-[9px] uppercase tracking-widest font-bold shadow-md flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#d8c3a5]" />
              <span>MOST POPULAR CHOICE</span>
            </div>

            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-black/50 mb-3 border-b border-black/10 pb-3">
                <span className="font-semibold text-black/70">BUSINESS ARCHITECTURE</span>
                <span>02</span>
              </div>

              <h3 className="font-syne text-2xl font-bold text-black">
                Business &amp; Enterprise
              </h3>
              <p className="mt-2 text-xs text-black/70 font-sans leading-relaxed">
                Authority, high trust, and automated customer inquiry capture engineered for expanding ventures.
              </p>

              {/* Prominent Price */}
              <div className="mt-6 border-y border-black/10 py-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-black/50 block font-semibold">
                  FOUNDATIONAL RATE
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-syne text-4xl sm:text-5xl font-bold text-black">
                    ₹3,999
                  </span>
                  <span className="font-mono text-xs text-black/50">– ₹7,999</span>
                </div>
                <span className="font-mono text-[10px] text-black/60 block mt-1">
                  Small Business ₹3,999 · Professional Multi-Page ₹7,999
                </span>
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-2.5 font-mono text-xs text-black/80 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-black shrink-0 stroke-[3]" />
                  <span>Multi-Page Semantic Architecture</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-black shrink-0 stroke-[3]" />
                  <span>WhatsApp Click-to-Book Integration</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-black shrink-0 stroke-[3]" />
                  <span>Local SEO &amp; Schema Metadata</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-black shrink-0 stroke-[3]" />
                  <span>100% Code &amp; Domain Ownership</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-black shrink-0 stroke-[3]" />
                  <span>Performance Audit 95+ Score</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-black/10">
              <a
                href={getWhatsAppLink("Business Website (₹3,999 – ₹7,999)")}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-black py-3.5 font-mono text-xs uppercase tracking-wider font-bold text-white hover:bg-neutral-800 transition shadow-lg"
              >
                <MessageCircle size={15} />
                <span>Start Business Project</span>
              </a>
            </div>
          </div>

          {/* Card 3 (Dark Charcoal): E-Commerce & Custom Web Apps */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0c10] p-6 sm:p-8 transition-all duration-300 hover:border-white/25">
            <div>
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 mb-3 border-b border-white/[0.06] pb-3">
                <span>COMMERCE &amp; BESPOKE</span>
                <span>03</span>
              </div>

              <h3 className="font-syne text-xl font-bold text-white">
                Commerce &amp; Custom Apps
              </h3>
              <p className="mt-2 text-xs text-white/55 font-sans leading-relaxed">
                Direct-to-consumer digital shops, payment gateways, calculation engines, and specialized software.
              </p>

              {/* Prominent Price */}
              <div className="mt-6 border-y border-white/[0.06] py-5">
                <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block">
                  STARTING FROM
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-syne text-4xl sm:text-5xl font-bold text-white">
                    ₹12,999
                  </span>
                  <span className="font-mono text-xs text-white/40">/ Custom Quote</span>
                </div>
                <span className="font-mono text-[10px] text-white/50 block mt-1">
                  E-Commerce Storefront ₹12,999 · Web Apps: Custom Quote
                </span>
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-2.5 font-mono text-xs text-white/70">
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>Product Catalog &amp; Cart Logic</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>Razorpay / Stripe Payment Setup</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>Custom API &amp; Dashboard Logic</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={14} className="text-white shrink-0" />
                  <span>Dedicated Post-Launch Handover</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.06]">
              <a
                href={getWhatsAppLink("E-commerce Store / Custom Web Application (₹12,999+)")}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-white hover:bg-white hover:text-black transition"
              >
                <MessageCircle size={14} />
                <span>Discuss Store or App</span>
              </a>
            </div>
          </div>
        </div>

        {/* Expandable Complete 8-Discipline Rate Card */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <button
            onClick={() => setShowFullIndex(!showFullIndex)}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white transition rounded-full border border-white/15 bg-white/5 px-6 py-2.5"
          >
            <span>{showFullIndex ? "Hide Complete 8-Discipline Rate Card" : "View Complete 8-Discipline Rate Card"}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showFullIndex ? "rotate-180" : ""}`} />
          </button>

          {showFullIndex && (
            <div className="mt-8 rounded-xl border border-white/[0.1] bg-[#0c0c10] overflow-hidden text-left divide-y divide-white/[0.06] shadow-2xl animate-fadeIn">
              <div className="p-4 bg-white/5 font-mono text-[10px] uppercase text-white/50 tracking-wider flex justify-between">
                <span>SERVICE DISCIPLINE &amp; INCLUSIONS</span>
                <span>BASE INVESTMENT</span>
              </div>

              {allEightServices.map((item) => (
                <div key={item.name} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/[0.02]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-syne text-base font-bold text-white">{item.name}</span>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/10 text-white/60 uppercase">{item.category}</span>
                    </div>
                    <p className="font-sans text-xs text-white/50 mt-1">{item.detail}</p>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-auto shrink-0">
                    <span className="font-serif text-lg font-bold text-white">{item.price}</span>
                    <a
                      href={getWhatsAppLink(item.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-sm bg-white/10 hover:bg-white hover:text-black px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-white transition"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Scope Note Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.08] bg-[#0c0c10] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl mx-auto font-mono text-xs text-white/50">
          <div className="flex items-center gap-3">
            <Info size={16} className="text-white/70 shrink-0" />
            <p>
              All rates represent foundational builds. Final investment is confirmed transparently on WhatsApp based on your exact deliverables and timeline.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 text-white hover:underline shrink-0"
          >
            <span>Detailed Pricing Page</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

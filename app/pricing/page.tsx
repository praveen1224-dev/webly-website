"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUM = "916379290968";
const WHATSAPP_DISPLAY = "+91 63792 90968";
const STUDIO_EMAIL = "webly.studioservice@gmail.com";

const services = [
  {
    category: "PERSONAL DISCIPLINES",
    description: "Make your milestones, personality, and career portfolio stand out.",
    items: [
      {
        name: "Online Invitation Website",
        price: "₹499",
        detail:
          "Immersive RSVP portals, venue itineraries & bespoke event storytelling for weddings and private milestones.",
      },
      {
        name: "Birthday Surprise Website",
        price: "₹999",
        detail:
          "Interactive memory vaults, hidden message clues, time capsules & personalized celebration portals.",
      },
      {
        name: "Student Portfolio Website",
        price: "₹1,499",
        detail:
          "High-impact project showcase platforms engineered to dominate competitive interviews, internships & hackathons.",
      },
      {
        name: "Personal Portfolio Website",
        price: "₹1,999",
        detail:
          "Tailored digital identity for creators, executives, architects & independent consultants demanding authority.",
      },
    ],
  },
  {
    category: "BUSINESS DISCIPLINES",
    description: "Establish authority, build credibility, and generate frictionless inquiries.",
    items: [
      {
        name: "Small Business Website",
        price: "₹3,999",
        detail:
          "Conversion-focused local commerce, professional service pages, WhatsApp click-to-book integrations & SEO.",
      },
      {
        name: "Professional Business Website",
        price: "₹7,999",
        detail:
          "Multi-page corporate presence, case studies, team directories, investor relations & automated inquiry routing.",
      },
      {
        name: "E-commerce Website",
        price: "₹12,999",
        detail:
          "Direct-to-consumer digital storefronts, payment gateways, catalog management & frictionless shopping carts.",
      },
    ],
  },
];

function whatsappLink(service: string) {
  const message = `Hi WEBLY! I'm interested in the ${service}. Please share details, scope, and quotation.`;
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(message)}`;
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#060608] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#060608]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/webly-logo.png"
              alt="WEBLY"
              width={140}
              height={50}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 transition hover:text-white"
          >
            <ArrowLeft size={14} />
            <span>Return to Studio</span>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 border-b border-white/[0.08]">
        <div className="relative mx-auto max-w-[1440px] text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>TRANSPARENT ECONOMICS // ARCHITECTURAL CODE</span>
          </div>

          <h1 className="mx-auto mt-7 max-w-4xl font-serif text-5xl sm:text-6xl lg:text-7xl font-medium leading-[0.96] tracking-tight text-white">
            TRANSPARENT
            <br />
            <span className="italic font-normal text-white/60">
              INVESTMENT INDEX
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/55 font-sans">
            Explore our foundational rates across all eight studio disciplines.
            Every build is handcrafted with surgical precision. Contact us directly
            on WhatsApp to confirm timeline, scope, and final investment before work
            begins.
          </p>
        </div>
      </section>

      {/* Pricing Grids */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1440px] space-y-16">
          {services.map((group) => (
            <div key={group.category}>
              <div className="mb-8 border-b border-white/[0.08] pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {group.category}
                  </p>
                  <p className="mt-1 font-serif text-2xl font-medium text-white">
                    {group.category === "PERSONAL DISCIPLINES"
                      ? "Personal & Narrative Milestones"
                      : "Business & Enterprise Presences"}
                  </p>
                </div>
                <p className="text-xs text-white/50">{group.description}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map((service, index) => {
                  const isHighlighted =
                    service.name === "Professional Business Website";
                  return (
                    <article
                      key={service.name}
                      className={`group flex flex-col justify-between rounded-sm border p-6 sm:p-8 transition-all duration-300 hover:border-white/30 ${
                        isHighlighted
                          ? "border-white/25 bg-[#121216] shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                          : "border-white/[0.08] bg-[#0c0c0f] hover:bg-[#111115]"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-4 border-b border-white/[0.06] pb-3">
                          <h2 className="font-serif text-2xl font-semibold tracking-tight text-white">
                            {service.name}
                          </h2>
                          <span className="font-mono text-xs text-white/30">
                            0{index + 1}
                          </span>
                        </div>

                        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/55">
                          {service.detail}
                        </p>

                        <div className="mt-8 border-t border-white/[0.06] pt-5">
                          <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                            BASE INVESTMENT
                          </p>
                          <p className="mt-1 font-serif text-3xl font-semibold tracking-tight text-white">
                            {service.price}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-white/50">
                          <Check size={13} className="text-emerald-400" />
                          <span>Scope and timeline verified prior to commission</span>
                        </div>
                      </div>

                      <a
                        href={whatsappLink(service.name)}
                        target="_blank"
                        rel="noreferrer"
                        className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xs px-5 py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition ${
                          isHighlighted
                            ? "bg-white font-semibold text-black hover:bg-neutral-200"
                            : "border border-white/20 bg-white/[0.04] text-white hover:bg-white hover:text-black"
                        }`}
                      >
                        <MessageCircle size={14} />
                        <span>Enquire on WhatsApp</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Custom Web Application Banner */}
          <div className="rounded-sm border border-white/[0.12] bg-[#0c0c0f] p-7 sm:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              DISCIPLINE 08 // BESPOKE PLATFORMS
            </p>
            <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                  Custom Web Applications / Proprietary Systems
                </h2>
                <p className="mt-2 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/55 font-sans">
                  Specialized client portals, dynamic interactive pricing
                  calculators, internal business software, or API integrations.
                  We prepare an architectural technical blueprint and deliver a
                  transparent project proposal.
                </p>
                <p className="mt-4 font-serif text-2xl font-semibold text-white">
                  Custom Quote
                </p>
              </div>

              <a
                href={whatsappLink("Custom Web Applications / Web App")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xs bg-white px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] font-semibold text-black transition hover:bg-neutral-200"
              >
                <span>Discuss Your Project</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Pricing Terms Note */}
          <div className="text-center font-mono text-xs leading-relaxed text-white/40 max-w-2xl mx-auto pt-6">
            All listed rates represent foundational builds. Final costs are
            determined by specific architectural requirements, integrations,
            deliverables, and turnaround times. Domain registration and external
            infrastructure are reviewed transparently.
          </div>
        </div>
      </section>

      {/* Pricing Footer */}
      <footer className="bg-[#000000] text-white px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-12 border-b border-white/[0.08]">
            <div className="space-y-4">
              <Link href="/">
                <Image
                  src="/webly-logo.png"
                  alt="WEBLY"
                  width={130}
                  height={45}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-xs text-white/50 leading-relaxed max-w-sm">
                Bespoke web development for individuals, celebrations, and
                modern enterprises.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                DIRECT TRANSMISSION
              </p>
              <div className="mt-4 space-y-2 font-mono text-xs text-white/70">
                <p>
                  WhatsApp:{" "}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUM}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:underline ml-1"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${STUDIO_EMAIL}`}
                    className="text-white hover:underline ml-1"
                  >
                    {STUDIO_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                QUICK ACCESS
              </p>
              <ul className="mt-4 space-y-2 font-mono text-xs text-white/60">
                <li>
                  <Link href="/#works" className="hover:text-white transition">
                    Selected Works
                  </Link>
                </li>
                <li>
                  <Link href="/#disciplines" className="hover:text-white transition">
                    Studio Disciplines
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:text-white transition">
                    Return to Homepage ↑
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40">
            <p>© 2025 WEBLY. ALL RIGHTS RESERVED.</p>
            <div className="flex items-center gap-4">
              <span>DIGITAL ATELIER</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>INDEPENDENT PRACTICE</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

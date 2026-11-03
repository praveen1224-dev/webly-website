"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  HelpCircle,
  Info,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUM = "916379290968";
const WHATSAPP_DISPLAY = "+91 63792 90968";
const STUDIO_EMAIL = "webly.studioservice@gmail.com";

const pricingTiers = [
  {
    category: "PERSONAL & MILESTONE DISCIPLINES",
    description: "Handcrafted web experiences for life milestones, career launches, and personal authority.",
    items: [
      {
        number: "01",
        name: "Online Invitation Website",
        price: "₹499",
        badge: "Flagship Celebration",
        turnaround: "2–4 Days",
        detail:
          "Bespoke digital RSVP portals and event storytelling for weddings, receptions, engagements, and private galas.",
        deliverables: [
          "Interactive Guest RSVP Vault",
          "Google Maps Venue Directions",
          "Live Event Countdown Timer",
          "Event Schedule & Itinerary Timeline",
          "Mobile-First Touchscreen Polish",
          "Custom WhatsApp RSVP Notification",
        ],
        idealFor: "Weddings, private milestone celebrations, anniversaries",
      },
      {
        number: "02",
        name: "Birthday Surprise Website",
        price: "₹999",
        badge: "Celebration Portal",
        turnaround: "3–5 Days",
        detail:
          "Personalized memory vaults, hidden message clues, time capsules, and interactive celebration portals for loved ones.",
        deliverables: [
          "Interactive Memory Vault",
          "Hidden Clue / Message Locker",
          "High-Resolution Photo Gallery",
          "Custom Wishes & Video Wall",
          "Background Music Player Integration",
          "Password / PIN Protected Portal",
        ],
        idealFor: "Significant birthdays, romantic surprises, tributes",
      },
      {
        number: "03",
        name: "Student Portfolio Website",
        price: "₹1,499",
        badge: "Career Launch",
        turnaround: "3–5 Days",
        detail:
          "High-impact showcase platforms engineered to dominate competitive interviews, internships, and hackathons.",
        deliverables: [
          "Interactive Project Showcase Cards",
          "Resume PDF Viewer & Direct Download",
          "GitHub, LinkedIn, & Dev Profile Sync",
          "Hackathon & Award Badges Section",
          "Sub-Second Page Load Speed (<0.8s)",
          "Clean Next.js Code Handover",
        ],
        idealFor: "Engineering students, CS grads, bootcamp graduates, designers",
      },
      {
        number: "04",
        name: "Personal Portfolio Website",
        price: "₹1,999",
        badge: "Executive Identity",
        turnaround: "4–7 Days",
        detail:
          "Tailored digital identity for creators, executives, architects, and independent consultants demanding authority.",
        deliverables: [
          "Editorial Biography & Core Philosophy",
          "Curated Case Studies & Gallery Drawer",
          "Custom Inquiry & Booking Form",
          "Full SEO Metadata & Social Graph Tags",
          "Fluid Micro-Interactions & Transitions",
          "100% Code & Asset Handover",
        ],
        idealFor: "Freelancers, creators, executives, independent consultants",
      },
    ],
  },
  {
    category: "BUSINESS & COMMERCIAL DISCIPLINES",
    description: "Conversion-focused web presences built to establish credibility and capture inbound demand.",
    items: [
      {
        number: "05",
        name: "Small Business Website",
        price: "₹3,999",
        badge: "Local Authority",
        turnaround: "5–8 Days",
        detail:
          "Modern service pages, local SEO optimization, and frictionless WhatsApp click-to-book integrations.",
        deliverables: [
          "Service Catalog & Pricing Structure",
          "WhatsApp Direct Click-to-Book Integration",
          "Google Maps & Local Search Optimization",
          "Mobile-Optimized Touch Layouts",
          "Client Testimonials & Trust Markers",
          "Contact & Location Inquiry Form",
        ],
        idealFor: "Local shops, clinics, law offices, boutique studios, salons",
      },
      {
        number: "06",
        name: "Professional Business Website",
        price: "₹7,999",
        badge: "Corporate Presence",
        turnaround: "7–10 Days",
        detail:
          "Comprehensive multi-page corporate presence, case registries, team directories, and automated inquiry routing.",
        deliverables: [
          "Multi-Page Architecture (Home, Services, About, Team, Case Studies, Contact)",
          "Dynamic Inquiry & Lead Intake Workflows",
          "Institutional Trust Badges & Metrics",
          "Enterprise SEO & Schema Markup",
          "Performance Audit Score 95+ Guaranteed",
          "Full Codebase & Domain Setup Handover",
        ],
        idealFor: "Expanding companies, corporate agencies, B2B services, consultancies",
      },
      {
        number: "07",
        name: "E-commerce Website",
        price: "₹12,999",
        badge: "Digital Commerce",
        turnaround: "10–14 Days",
        detail:
          "Direct-to-consumer digital storefronts, payment gateways, product catalogs, and frictionless shopping carts.",
        deliverables: [
          "Product Catalog & Collection Filtering",
          "Instant Sliding Cart / Shopping Bag Drawer",
          "Razorpay / Stripe / UPI Payment Setup",
          "Customer Order Intake & WhatsApp Confirmation",
          "Mobile-Optimized Fast Checkout Flow",
          "Inventory & Product Management Setup",
        ],
        idealFor: "Boutique fashion, craft artisans, consumer goods, digital products",
      },
      {
        number: "08",
        name: "Custom Web Applications",
        price: "Custom Quote",
        badge: "Bespoke Engineering",
        turnaround: "Scoped per project",
        detail:
          "Specialized workflows, proprietary client dashboards, dynamic calculators, internal tooling, and API services.",
        deliverables: [
          "Tailored User Authentication & Dashboards",
          "Proprietary Business Logic & Calculators",
          "Third-Party REST / GraphQL API Integrations",
          "Relational / Serverless Database Setup",
          "Architectural Technical Specification Document",
          "Dedicated Post-Launch Deployment Support",
        ],
        idealFor: "SaaS startups, specialized enterprise tooling, custom web portals",
      },
    ],
  },
];

const pricingFaqs = [
  {
    q: "Why are WEBLY's starting rates so accessible compared to traditional agencies?",
    a: "We operate as an independent digital studio without bloated agency overhead, sales commissions, or junior account manager salaries. You collaborate directly with the developer and designer building your site. This allows us to deliver high-craft, hand-coded Next.js websites at honest, transparent rates.",
  },
  {
    q: "What factors might adjust the base starting rate for my project?",
    a: "The starting rate covers a complete, foundational, production-ready website for that discipline. If your project requires extensive additional pages (e.g., 10+ sub-pages), custom third-party API integrations, complex payment gateways, or extensive animation scripting, we provide a transparent, fixed-price quote upfront before starting.",
  },
  {
    q: "How do revisions work during the build?",
    a: "Every engagement includes dedicated revision checkpoints. During Phase Two (Design) and Phase Three (Develop), we share staging previews where you can test the layout, typography, and interactive flows. We refine until you are completely satisfied with the look and feel.",
  },
  {
    q: "Are hosting and domain costs included?",
    a: "We deploy client websites to high-speed global edge networks (such as Vercel or Cloudflare), which offer generous free-tier hosting for most small-to-medium websites with zero monthly fee. If you already have a domain, we map it free of charge. If you need a new domain (e.g. .com or .in), you purchase it directly so you retain 100% legal ownership.",
  },
  {
    q: "How do project payments work?",
    a: "For transparency and security, we typically operate on a simple milestone model: a 50% deposit upon project kickoff after agreeing on scope, and the remaining 50% upon final staging review and domain handover.",
  },
];

function getWhatsAppLink(service: string) {
  const message = `Hi WEBLY! I'm interested in discussing the "${service}". Please share timeline, scope, and quotation.`;
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(message)}`;
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-[#060608] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* =========================================================================
          HEADER
      ========================================================================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#060608]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
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

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/80 transition-all hover:bg-white hover:text-black"
          >
            <ArrowLeft size={13} />
            <span>Return to Studio</span>
          </Link>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION
      ========================================================================= */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-24 sm:pt-40 lg:px-12 border-b border-white/[0.08]">
        <div className="pointer-events-none absolute inset-0 bg-grid-hairline opacity-30" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] blur-[120px] rounded-full" />

        <div className="relative mx-auto max-w-[1440px] text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            <span>TRANSPARENT FOUNDATION RATES · ALL EIGHT SERVICES</span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl font-syne text-4xl sm:text-6xl lg:text-7xl font-bold leading-[0.96] tracking-tight text-white uppercase">
            TRANSPARENT
            <br />
            <span className="font-serif italic font-normal text-white/70 lowercase sm:text-5xl lg:text-6xl">
              investment
            </span>{" "}
            INDEX
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/60 font-sans">
            Explore our foundational rates across all eight studio disciplines. Every build is handcrafted with surgical precision, clean Next.js architecture, and zero template bloat. Contact us directly on WhatsApp to confirm timeline, scope, and final investment before work begins.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20WEBLY!%20I%20would%20like%20to%20discuss%20pricing%20and%20scope.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-black transition hover:bg-neutral-200"
            >
              <MessageCircle size={15} />
              <span>Discuss Pricing on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRICING TIERS GRID
      ========================================================================= */}
      <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12 border-b border-white/[0.08]">
        <div className="mx-auto max-w-[1440px] space-y-20">
          {pricingTiers.map((group) => (
            <div key={group.category}>
              {/* Category Header */}
              <div className="mb-10 border-b border-white/[0.08] pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/45">
                    {group.category}
                  </p>
                  <p className="mt-1 font-syne text-2xl sm:text-3xl font-bold text-white">
                    {group.category.includes("PERSONAL")
                      ? "Personal & Narrative Milestones"
                      : "Business & Enterprise Presences"}
                  </p>
                </div>
                <p className="text-xs text-white/55 font-sans max-w-md">{group.description}</p>
              </div>

              {/* Grid of Cards */}
              <div className="grid gap-6 md:grid-cols-2">
                {group.items.map((item) => {
                  const isFeatured =
                    item.name === "Professional Business Website" ||
                    item.name === "Online Invitation Website";

                  return (
                    <article
                      key={item.name}
                      className={`group flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-all duration-300 hover:border-white/30 ${
                        isFeatured
                          ? "border-white/25 bg-[#121217] shadow-xl"
                          : "border-white/[0.08] bg-[#0c0c10] hover:bg-[#111116]"
                      }`}
                    >
                      <div>
                        {/* Top Index & Badge */}
                        <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 font-mono text-[10px]">
                          <span className="text-white/40">{item.number} //</span>
                          <span className="rounded bg-white/10 px-2.5 py-0.5 text-white/80 uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>

                        {/* Title & Investment */}
                        <div className="mt-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                          <h2 className="font-syne text-2xl font-bold tracking-tight text-white">
                            {item.name}
                          </h2>
                          <div className="text-left sm:text-right shrink-0">
                            <span className="font-mono text-[10px] text-white/40 uppercase block">
                              STARTING AT
                            </span>
                            <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                              {item.price}
                            </span>
                          </div>
                        </div>

                        {/* Detail */}
                        <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/60 font-sans">
                          {item.detail}
                        </p>

                        {/* Turnaround Pill */}
                        <div className="mt-4 flex items-center gap-2 font-mono text-[11px] text-white/50">
                          <Clock size={13} className="text-[#d8c3a5]" />
                          <span>Estimated Turnaround: {item.turnaround}</span>
                        </div>

                        {/* Deliverables Checklist */}
                        <div className="mt-6 border-t border-white/[0.06] pt-5">
                          <p className="font-mono text-[10px] uppercase tracking-wider text-white/40 mb-3">
                            WHAT IS INCLUDED:
                          </p>
                          <ul className="space-y-2 font-mono text-[11px] text-white/70">
                            {item.deliverables.map((del) => (
                              <li key={del} className="flex items-start gap-2">
                                <Check size={13} className="text-white shrink-0 mt-0.5" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer Action */}
                      <div className="mt-8 border-t border-white/[0.06] pt-5">
                        <div className="font-mono text-[10px] text-white/40 mb-3">
                          <span>IDEAL FOR: </span>
                          <span className="text-white/70">{item.idealFor}</span>
                        </div>
                        <a
                          href={getWhatsAppLink(item.name)}
                          target="_blank"
                          rel="noreferrer"
                          className={`flex w-full items-center justify-center gap-2 rounded-sm py-3.5 font-mono text-xs uppercase tracking-[0.16em] transition font-semibold ${
                            isFeatured
                              ? "bg-white text-black hover:bg-neutral-200"
                              : "border border-white/20 bg-white/[0.04] text-white hover:bg-white hover:text-black"
                          }`}
                        >
                          <MessageCircle size={15} />
                          <span>Inquire on WhatsApp</span>
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Pricing FAQ Section */}
          <div className="mt-20 border-t border-white/[0.08] pt-16">
            <div className="mb-10 text-center max-w-xl mx-auto">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-2">
                TRANSPARENCY &amp; SCOPE
              </p>
              <h2 className="font-syne text-2xl sm:text-3xl font-bold text-white uppercase">
                PRICING &amp; INVESTMENT FAQ
              </h2>
            </div>

            <div className="mx-auto max-w-3xl divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {pricingFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={faq.q} className="py-5">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between text-left group"
                    >
                      <span className="font-syne text-base font-semibold text-white group-hover:text-neutral-200 transition">
                        {faq.q}
                      </span>
                      <span className="ml-4 flex h-6 w-6 items-center justify-center rounded-full border border-white/10 text-white/60 transition group-hover:text-white shrink-0">
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </span>
                    </button>
                    {isOpen && (
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-white/65 font-sans">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom WhatsApp Discussion Callout */}
          <div className="rounded-xl border border-white/[0.1] bg-[#111116] p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-syne text-2xl font-bold text-white">
                Ready to confirm your timeline and scope?
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-white/60 font-sans max-w-xl">
                Send a quick WhatsApp message with your project goals or inspiration links. We will review your brief and share a clear scope outline within hours.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20WEBLY!%20I%20am%20ready%20to%20discuss%20my%20website%20project%20scope.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-7 py-3.5 font-mono text-xs uppercase tracking-wider font-semibold text-black transition hover:bg-neutral-200 shrink-0"
            >
              <MessageCircle size={15} />
              <span>Open WhatsApp Conversation</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRICING FOOTER
      ========================================================================= */}
      <footer className="bg-[#000000] text-white px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-white/[0.08]">
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
              <p className="text-xs text-white/50 leading-relaxed max-w-sm font-sans">
                Bespoke web design and development for visionary individuals, celebrations, and modern enterprises.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                DIRECT TRANSMISSION
              </p>
              <div className="space-y-2 font-mono text-xs text-white/70">
                <p>
                  WhatsApp Consultation:{" "}
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
                  Electronic Mail:{" "}
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
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 mb-3">
                QUICK ACCESS
              </p>
              <ul className="space-y-2 font-mono text-xs text-white/60">
                <li>
                  <Link href="/#work" className="hover:text-white transition">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition">
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

          {/* Massive Outlined Watermark Typography */}
          <div className="relative py-12 select-none overflow-hidden text-center">
            <p className="font-syne text-[80px] sm:text-[140px] md:text-[200px] font-black tracking-tighter uppercase leading-none text-stroke-watermark pointer-events-none">
              WEBLY
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-white/40">
            <p>© 2025 WEBLY Studio. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>DIGITAL ATELIER</span>
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span>CHENNAI · REMOTE WORLDWIDE</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

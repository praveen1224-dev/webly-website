"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Info,
  Menu,
  MessageCircle,
  X,
} from "lucide-react";

const WHATSAPP_NUM = "916379290968";
const WHATSAPP_DISPLAY = "+91 63792 90968";
const STUDIO_EMAIL = "webly.studioservice@gmail.com";

function getWhatsAppLink(serviceOrText?: string) {
  const text = serviceOrText
    ? `Hi WEBLY! I'm interested in discussing "${serviceOrText}". Please share details, scope, and quotation.`
    : "Hi WEBLY! I would like to discuss initiating a bespoke web project.";
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`;
}

// 8 Studio Disciplines
const studioDisciplines = [
  {
    number: "01",
    title: "ONLINE INVITATION WEBSITES",
    description:
      "Immersive RSVP portals, venue itineraries & bespoke event storytelling for weddings and private milestones.",
    price: "Starting ₹499",
    rawPrice: "₹499",
    features: "Digital RSVP, Event Itinerary, Interactive Story",
  },
  {
    number: "02",
    title: "BIRTHDAY SURPRISE WEBSITES",
    description:
      "Interactive memory vaults, hidden message clues, time capsules & personalized celebration portals.",
    price: "Starting ₹999",
    rawPrice: "₹999",
    features: "Interactive Celebration, Vault Media, Custom Wishes",
  },
  {
    number: "03",
    title: "STUDENT PORTFOLIO WEBSITES",
    description:
      "High-impact project showcase platforms engineered to dominate competitive interviews, internships & hackathons.",
    price: "Starting ₹1,499",
    rawPrice: "₹1,499",
    features: "Resume Showcase, GitHub Links, Project Cards",
  },
  {
    number: "04",
    title: "PERSONAL PORTFOLIO WEBSITES",
    description:
      "Tailored digital identity for creators, executives, architects & independent consultants demanding authority.",
    price: "Starting ₹1,999",
    rawPrice: "₹1,999",
    features: "Creators, Consultants, Curated Narrative Identity",
  },
  {
    number: "05",
    title: "SMALL BUSINESS WEBSITES",
    description:
      "Conversion-focused local commerce, professional service pages, WhatsApp click-to-book integrations & SEO.",
    price: "Starting ₹3,999",
    rawPrice: "₹3,999",
    features: "Lead Conversion, Services, WhatsApp Bookings, Local SEO",
  },
  {
    number: "06",
    title: "PROFESSIONAL BUSINESS WEBSITES",
    description:
      "Multi-page corporate presence, case studies, team directories, investor relations & automated inquiry routing.",
    price: "Starting ₹7,999",
    rawPrice: "₹7,999",
    features: "Multi-page corporate, dynamic inquiry workflows",
  },
  {
    number: "07",
    title: "E-COMMERCE WEBSITES",
    description:
      "Direct-to-consumer digital storefronts, payment gateways, catalog management & frictionless shopping carts.",
    price: "Starting ₹12,999",
    rawPrice: "₹12,999",
    features: "Digital Storefront, Payment Gateway, Inventory Flow",
  },
  {
    number: "08",
    title: "CUSTOM WEB APPLICATIONS",
    description:
      "Specialized workflows, proprietary client dashboards, dynamic calculators, internal tooling & API services.",
    price: "Custom Quote",
    rawPrice: "Get a Quote",
    features: "Proprietary Software, APIs, Custom Workflows",
  },
];

// The Four-Phase Protocol
const protocolSteps = [
  {
    sequence: "SEQUENCE 01",
    tag: "FOUNDATION",
    title: "DISCOVER",
    description:
      "Clarifying objectives, content architecture, aesthetic tone, and functional scope through direct WhatsApp consultation. Zero bloated 40-page briefs.",
    step: "STEP 01 / 04",
    status: "",
  },
  {
    sequence: "SEQUENCE 02",
    tag: "FORM",
    title: "DESIGN",
    description:
      "Sculpting bespoke art direction, typographic hierarchy, and responsive layout compositions tailored exclusively to your vision.",
    step: "STEP 02 / 04",
    status: "ITERATIVE REVIEW",
  },
  {
    sequence: "SEQUENCE 03",
    tag: "SYNTHESIS",
    title: "DEVELOP",
    description:
      "Hand-coding modular, lightning-fast web code using modern frameworks with zero bloat, semantic structure, and fluid micro-interactions.",
    step: "STEP 03 / 04",
    status: "",
  },
  {
    sequence: "SEQUENCE 04",
    tag: "RELEASE",
    title: "LAUNCH",
    description:
      "Cross-device validation, performance audits, domain deployment, and seamless handover ready for immediate engagement.",
    step: "STEP 04 / 04",
    status: "HANDOVER COMPLETE",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#060608] text-[#f4f4f5] selection:bg-white selection:text-black">
      {/* =========================================================================
          1. TWO-TIER STICKY HEADER & STUDIO STATUS TICKER
      ========================================================================= */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#060608]/90 backdrop-blur-xl">
        {/* Tier 1: Main Brand Bar */}
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Brand Monogram & Wordmark */}
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/webly-logo.png"
              alt="WEBLY"
              width={140}
              height={50}
              priority
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 font-mono text-[11px] tracking-[0.2em] uppercase text-white/60 md:flex">
            <a
              href="#works"
              className="transition-colors duration-200 hover:text-white"
            >
              SELECTED WORKS
            </a>
            <a
              href="#disciplines"
              className="transition-colors duration-200 hover:text-white"
            >
              DISCIPLINES
            </a>
            <a
              href="#protocol"
              className="transition-colors duration-200 hover:text-white"
            >
              PROCESS
            </a>
            <a
              href="#ethos"
              className="transition-colors duration-200 hover:text-white"
            >
              ETHOS
            </a>
            <Link
              href="/pricing"
              className="transition-colors duration-200 hover:text-white"
            >
              PRICING
            </Link>
          </nav>

          {/* Desktop Initiate Project Pill CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-mono text-[10px] uppercase tracking-[0.16em] font-semibold text-[#060608] transition hover:bg-neutral-200 shadow-[0_0_15px_rgba(255,255,255,0.12)]"
            >
              <span>INITIATE PROJECT</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-black/60" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-white/80 md:hidden"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Tier 2: Studio Sub-Ticker Bar */}
        <div className="border-t border-white/[0.06] bg-[#09090c] py-2 px-5 sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1440px] flex-col sm:flex-row sm:items-center justify-between gap-1.5 font-mono text-[10px] tracking-[0.18em] uppercase">
            <div className="text-white/40 truncate">
              WEBLY {"//"} DIGITAL DESIGN &amp; DEVELOPMENT / INDEPENDENT WEB STUDIO
            </div>
            <div className="flex items-center gap-2 text-white/70 shrink-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>ACCEPTING NEW PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav className="border-t border-white/10 bg-[#060608] px-6 py-6 md:hidden">
            <div className="space-y-4 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
              <a
                href="#works"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.08] pb-3 hover:text-white"
              >
                <span>SELECTED WORKS</span>
                <ArrowRight size={14} className="text-white/30" />
              </a>
              <a
                href="#disciplines"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.08] pb-3 hover:text-white"
              >
                <span>DISCIPLINES</span>
                <ArrowRight size={14} className="text-white/30" />
              </a>
              <a
                href="#protocol"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.08] pb-3 hover:text-white"
              >
                <span>PROCESS</span>
                <ArrowRight size={14} className="text-white/30" />
              </a>
              <a
                href="#ethos"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.08] pb-3 hover:text-white"
              >
                <span>ETHOS</span>
                <ArrowRight size={14} className="text-white/30" />
              </a>
              <Link
                href="/pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/[0.08] pb-3 hover:text-white"
              >
                <span>PRICING</span>
                <ArrowRight size={14} className="text-white/30" />
              </Link>
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 font-mono text-xs uppercase tracking-[0.16em] font-semibold text-black transition hover:bg-neutral-200"
            >
              <MessageCircle size={15} />
              <span>INITIATE PROJECT VIA WHATSAPP</span>
            </a>
          </nav>
        )}
      </header>

      {/* =========================================================================
          2. DARK EDITORIAL HERO WITH MAISON VENDÔME ARTIFACT
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#060608] px-5 sm:px-8 lg:px-12 pt-32 sm:pt-40 pb-20 sm:pb-28 border-b border-white/[0.08]">
        {/* Subtle architectural atmosphere */}
        <div className="pointer-events-none absolute inset-0 bg-grid-hairline opacity-30" />

        <div className="relative mx-auto max-w-[1440px] grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Column: Typographic Monument */}
          <div>
            {/* Atelier Kicker */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-white/30" />
              <p className="font-mono text-[10px] tracking-[0.28em] text-white/50 uppercase">
                BESPOKE WEB ATELIER
              </p>
            </div>

            {/* Approved Hero Headline */}
            <h1 className="font-serif text-[42px] sm:text-[62px] lg:text-[76px] font-medium leading-[0.93] tracking-[-0.03em] text-[#F3F2EE]">
              CRAFTING
              <br />
              DIGITAL
              <br />
              <span className="italic font-normal text-white/70">
                ARTIFACTS WITH
              </span>
              <br />
              ARCHITECTURAL
              <br />
              DISCIPLINE &amp;
              <br />
              TIMELESS
              <br />
              PRECISION.
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-xl text-sm sm:text-base leading-relaxed text-white/55 font-sans">
              Bespoke web development for visionary individuals, bespoke
              celebrations, and modern enterprises. We reject generic templates
              and disposable interfaces in pursuit of quiet architectural
              authority.
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-sm bg-white px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-black transition hover:bg-neutral-200"
              >
                <span>INITIATE PROJECT VIA WHATSAPP</span>
              </a>

              <a
                href="#works"
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/20 bg-white/[0.02] px-7 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white/80 transition hover:border-white/50 hover:bg-white/[0.06] hover:text-white"
              >
                <span>EXPLORE SELECTED INDEX</span>
              </a>
            </div>

            {/* Metrics Row */}
            <div className="mt-12 grid grid-cols-3 border-t border-white/[0.1] pt-6 max-w-lg">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                  TURNAROUND
                </p>
                <p className="mt-1 font-serif text-lg sm:text-xl font-medium text-white">
                  3 to 10 Days
                </p>
              </div>

              <div className="border-l border-white/[0.1] pl-5 sm:pl-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                  DIRECT CHANNEL
                </p>
                <p className="mt-1 font-serif text-lg sm:text-xl font-medium text-white">
                  Founder Direct
                </p>
              </div>

              <div className="border-l border-white/[0.1] pl-5 sm:pl-7">
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/40">
                  BASE ENTRY
                </p>
                <p className="mt-1 font-serif text-lg sm:text-xl font-medium text-white">
                  From ₹499
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Maison Vendôme Architectural Artifact */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="rounded-sm border border-white/[0.12] bg-[#0c0c0f] p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              {/* Browser / Shell Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-2.5 font-mono text-[10px] text-white/50">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="tracking-[0.15em] text-white/60">
                    atelier.maisonvendome.design
                  </span>
                </div>
                <div className="rounded border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 text-[9px] font-mono tracking-wider text-emerald-400">
                  60 FPS
                </div>
              </div>

              {/* Artifact Stage Canvas */}
              <div className="relative my-2.5 aspect-[4/5] sm:aspect-[4/5] w-full overflow-hidden rounded-xs border border-white/[0.08] bg-black">
                {/* Artwork Graphic */}
                <Image
                  src="/images/hero-maison.jpg"
                  alt="Maison Vendôme Haute Joaillerie Archive"
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover opacity-75 transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Atmospheric gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/60" />

                {/* Content Overlay */}
                <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-7">
                  {/* Top Meta */}
                  <div className="flex items-start justify-between font-mono text-[9px] tracking-[0.2em] text-white/60 uppercase">
                    <div>
                      <p className="text-white/80 font-medium">MAISON VENDÔME</p>
                      <p className="text-white/40 text-[8px] mt-0.5">
                        HAUTE JOAILLERIE ARCHIVE
                      </p>
                    </div>
                    <span className="rounded border border-white/20 bg-black/60 px-2 py-0.5 text-white/80">
                      COLLECTION 2025
                    </span>
                  </div>

                  {/* Mid Title & Room */}
                  <div className="text-center my-auto py-6">
                    <p className="font-mono text-[9px] tracking-[0.25em] text-white/50 uppercase">
                      {"//"} ROOM 04 : THE OBSIDIAN RING
                    </p>
                    <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide text-white uppercase">
                      SACRED
                      <br />
                      <span className="italic">GEOMETRY.</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-xs text-[11px] leading-relaxed text-white/60">
                      Hand cut onyx and platinum settings engineered with
                      micrometric architectural tolerances.
                    </p>

                    {/* Interactive Prompt Chip */}
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span className="font-mono text-[9px] tracking-[0.2em] text-white uppercase">
                        DRAG TO ROTATE ARTIFACT
                      </span>
                    </div>
                  </div>

                  {/* Bottom Meta */}
                  <div className="flex items-center justify-between border-t border-white/[0.1] pt-3 font-mono text-[9px] text-white/50">
                    <span className="tracking-wider">
                      ASTRO + TAILWIND CSS
                    </span>
                    <span className="text-white/80 tracking-wider">
                      CUSTOM THREE.JS ENGINE
                    </span>
                  </div>
                </div>
              </div>

              {/* Artifact Footer */}
              <div className="flex items-center justify-between pt-1 font-mono text-[9px] text-white/40">
                <span className="tracking-wider">
                  DESIGN CONCEPT {"//"} LUXURY PORTAL
                </span>
                <span className="text-white/70">INTERACTIVE PREVIEW</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. IVORY ASYMMETRIC SELECTED COMMISSIONS & CONCEPTS
      ========================================================================= */}
      <section
        id="works"
        className="scroll-mt-28 bg-[#F7F6F2] text-[#121214] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-black/[0.08]"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Section Header */}
          <div className="mb-14">
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#71707d] uppercase">
              REGISTER {"//"} 02 / PORTFOLIO EXHIBITION
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121214]">
              SELECTED COMMISSIONS &amp; CONCEPTS
            </h2>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-[#5c5b66] leading-relaxed">
              Visual explorations conceived in-house to illustrate craft across
              celebrations, creators, and commercial platforms.
            </p>
          </div>

          {/* Asymmetric Showcase Container */}
          <div className="space-y-6">
            {/* Card 1: Featured Hero Project (L'Aura Éternelle) */}
            <article className="rounded-sm border border-black/[0.08] bg-white p-6 sm:p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-black/20">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr] lg:items-center">
                {/* Left: Project Details */}
                <div className="flex flex-col justify-between h-full">
                  <div>
                    {/* Meta & Price */}
                    <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 font-mono text-[10px]">
                      <span className="tracking-[0.2em] text-[#71707d] uppercase">
                        REF. 001 {"//"} CONCEPT PROJECT
                      </span>
                      <span className="font-mono text-[11px] font-semibold tracking-wider text-[#121214] bg-black/[0.04] px-2.5 py-1 rounded-xs">
                        STARTING ₹499
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#121214]">
                      L&apos;AURA ÉTERNELLE
                    </h3>
                    <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-[#71707d] uppercase">
                      WEDDING INVITATION &amp; EVENT PORTAL CONCEPT
                    </p>

                    {/* Description */}
                    <p className="mt-4 text-xs sm:text-sm text-[#5c5b66] leading-relaxed">
                      Luxury digital invitation and celebration platform.
                      Crafted with bespoke typography, guest RSVP management,
                      dynamic countdown timing, and ambient sound options.
                    </p>

                    {/* Feature Chips */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {[
                        "INTERACTIVE RSVP",
                        "EVENT STORYTELLING",
                        "GUEST ACCOMMODATIONS",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-xs border border-black/[0.08] bg-black/[0.02] px-3 py-1 font-mono text-[9px] tracking-wider text-[#404048]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Action */}
                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-black/[0.06] pt-5">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-[#71707d] uppercase">
                      PANORAMIC SHOWCASE {"//"} BESPOKE CELEBRATIONS
                    </span>

                    <a
                      href={getWhatsAppLink("L'Aura Éternelle Wedding Format")}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xs bg-black px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
                    >
                      <span>ORDER THIS FORMAT</span>
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Right: Rich Image Mockup */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs border border-black/[0.08] bg-[#0c0c0f]">
                  <Image
                    src="/images/laura.jpg"
                    alt="L'Aura Éternelle Wedding Invitation Interface"
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-xs bg-black/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white backdrop-blur-md">
                    LIVE MOCKUP
                  </div>
                </div>
              </div>
            </article>

            {/* Row 2: Dual Side-by-Side Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Card 2: Voss & Associates */}
              <article className="flex flex-col justify-between rounded-sm border border-black/[0.08] bg-white p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-black/20">
                <div>
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 font-mono text-[10px]">
                    <span className="tracking-[0.2em] text-[#71707d] uppercase">
                      REF. 002 {"//"} CONCEPT PROJECT
                    </span>
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#121214] bg-black/[0.04] px-2.5 py-1 rounded-xs">
                      STARTING ₹1,999
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#121214]">
                    VOSS &amp; ASSOCIATES
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-[#71707d] uppercase">
                    ARCHITECT PORTFOLIO CONCEPT
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#5c5b66]">
                    Stark brutalist typographic portfolio for an architectural
                    director. Engineered with fluid horizontal project index,
                    zero page refresh transitions, and high density technical
                    blueprint drawers.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {["ZERO BLOAT", "FLUID HORIZONTAL RAIL", "ASTRO 4.0"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="rounded-xs border border-black/[0.08] bg-black/[0.02] px-2.5 py-1 font-mono text-[9px] tracking-wider text-[#404048]"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>

                  {/* Visual Mockup */}
                  <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xs border border-black/[0.08] bg-[#0c0c0f]">
                    <Image
                      src="/images/voss.jpg"
                      alt="Voss & Associates Architectural Blueprint"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-4 font-mono text-[10px]">
                  <span className="text-[#71707d] tracking-wider">
                    FRAMEWORK: ASTRO + TAILWIND
                  </span>
                  <a
                    href={getWhatsAppLink("Voss & Associates Architect Portfolio")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xs bg-black px-4 py-2 text-[10px] uppercase tracking-wider text-white transition hover:bg-neutral-800"
                  >
                    <span>ORDER</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </article>

              {/* Card 3: Kinetix Systems */}
              <article className="flex flex-col justify-between rounded-sm border border-black/[0.08] bg-white p-6 sm:p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:border-black/20">
                <div>
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 font-mono text-[10px]">
                    <span className="tracking-[0.2em] text-[#71707d] uppercase">
                      REF. 003 {"//"} CONCEPT PROJECT
                    </span>
                    <span className="font-mono text-[11px] font-semibold tracking-wider text-[#121214] bg-black/[0.04] px-2.5 py-1 rounded-xs">
                      STARTING ₹7,999
                    </span>
                  </div>

                  <h3 className="mt-5 font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#121214]">
                    KINETIX SYSTEMS
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-[#71707d] uppercase">
                    BUSINESS WEB APP CONCEPT
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#5c5b66]">
                    Sleek monochrome software enterprise showcase with refined
                    metric telemetry, architectural grid framework, bespoke
                    onboarding paths, and friction-free lead capture workflows.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "MULTI PAGE ARCHITECTURE",
                      "SEO & PERFORMANCE 100",
                      "LEAD INGESTION API",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-xs border border-black/[0.08] bg-black/[0.02] px-2.5 py-1 font-mono text-[9px] tracking-wider text-[#404048]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Visual Mockup */}
                  <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-xs border border-black/[0.08] bg-[#0c0c0f]">
                    <Image
                      src="/images/kinetix.jpg"
                      alt="Kinetix Systems Telemetry Terminal"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-black/[0.06] pt-4 font-mono text-[10px]">
                  <span className="text-[#71707d] tracking-wider">
                    REACT 19 / TAILWIND / REST API
                  </span>
                  <a
                    href={getWhatsAppLink("Kinetix Systems Business Web App")}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xs bg-black px-4 py-2 text-[10px] uppercase tracking-wider text-white transition hover:bg-neutral-800"
                  >
                    <span>COMMISSION PLATFORM</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. IVORY EIGHT-ROW HORIZONTAL STUDIO DISCIPLINES SECTION
      ========================================================================= */}
      <section
        id="disciplines"
        className="scroll-mt-28 bg-[#F7F6F2] text-[#121214] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-black/[0.08]"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Header Split */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#71707d] uppercase">
                SERVICES {"//"} DISCIPLINES
              </p>
              <h2 className="mt-3 font-serif text-4xl sm:text-6xl font-medium tracking-tight text-[#121214]">
                STUDIO
                <br />
                DISCIPLINES
              </h2>
            </div>
            <p className="max-w-sm text-xs sm:text-sm text-[#5c5b66] leading-relaxed">
              An index of eight bespoke digital capabilities engineered for
              private individuals, visionary creators, and expanding modern
              businesses.
            </p>
          </div>

          {/* 8 Horizontal Service Rows */}
          <div className="border-t border-black/[0.1]">
            {studioDisciplines.map((item) => (
              <div
                key={item.number}
                className="group flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6 sm:py-7 border-b border-black/[0.08] transition-colors duration-200 hover:bg-black/[0.02]"
              >
                {/* Index & Title */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 min-w-[320px] lg:min-w-[380px]">
                  <span className="font-mono text-xs sm:text-sm text-[#8a8994] font-medium shrink-0">
                    {item.number} /
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-[#121214] transition-colors group-hover:text-black">
                    {item.title}
                  </h3>
                </div>

                {/* Scope Description */}
                <p className="text-xs text-[#5c5b66] leading-relaxed max-w-xl lg:px-4">
                  {item.description}
                </p>

                {/* Pricing & Inquire Button */}
                <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 lg:pt-0">
                  <div className="text-left sm:text-right">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#8a8994]">
                      BASE INVESTMENT
                    </p>
                    <p className="font-serif text-sm sm:text-base font-semibold text-[#121214]">
                      {item.price}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink(item.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xs bg-black px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
                  >
                    <span>INQUIRE</span>
                    <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. DARK FOUR-COLUMN FOUR-PHASE PROTOCOL
      ========================================================================= */}
      <section
        id="protocol"
        className="scroll-mt-28 bg-[#060608] text-[#f4f4f5] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/[0.08]"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="mb-16">
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
              HOW WE WORK
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
              THE FOUR-PHASE PROTOCOL
            </h2>
            <p className="mt-3 max-w-2xl text-xs sm:text-sm text-white/50 leading-relaxed">
              A rigorous architectural delivery model engineered to eliminate
              agency friction, guarantee velocity, and ensure uncompromised code
              quality.
            </p>
          </div>

          {/* 4 Sequential Columns */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {protocolSteps.map((step) => (
              <div
                key={step.sequence}
                className="flex flex-col justify-between rounded-sm border border-white/[0.1] bg-[#0c0c0f] p-6 sm:p-7 transition-all duration-300 hover:border-white/25 hover:bg-[#121216]"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 font-mono text-[9px] tracking-wider text-white/40 uppercase">
                    <span>{step.sequence}</span>
                    <span className="text-white/60">{step.tag}</span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/[0.08] pt-4 font-mono text-[9px] text-white/40">
                  <span>{step.step}</span>
                  {step.status && (
                    <span className="text-white/70 uppercase">
                      {step.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. IVORY TWO-COLUMN STUDIO ETHOS & OPERATING PHILOSOPHY
      ========================================================================= */}
      <section
        id="ethos"
        className="scroll-mt-28 bg-[#F7F6F2] text-[#121214] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-black/[0.08]"
      >
        <div className="mx-auto max-w-[1440px] grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Column: Metadata Specifications */}
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#71707d] uppercase">
              STUDIO ETHOS
            </p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121214] leading-tight">
              STUDIO ETHOS &amp;
              <br />
              OPERATING PHILOSOPHY
            </h2>

            {/* Structured Specifications Table */}
            <div className="mt-10 divide-y divide-black/[0.08] border-y border-black/[0.08] max-w-md">
              <div className="flex items-center justify-between py-4 font-mono text-xs">
                <span className="tracking-[0.18em] text-[#71707d] uppercase text-[10px]">
                  PRACTICE MODEL
                </span>
                <span className="font-semibold text-[#121214]">
                  Independent Practice
                </span>
              </div>

              <div className="flex items-center justify-between py-4 font-mono text-xs">
                <span className="tracking-[0.18em] text-[#71707d] uppercase text-[10px]">
                  COLLABORATION
                </span>
                <span className="font-semibold text-[#121214]">
                  Direct Founder Contact
                </span>
              </div>

              <div className="flex items-center justify-between py-4 font-mono text-xs">
                <span className="tracking-[0.18em] text-[#71707d] uppercase text-[10px]">
                  SOURCE INTEGRITY
                </span>
                <span className="font-semibold text-[#121214]">
                  Handcrafted Codebase
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Manifesto & Quote */}
          <div>
            {/* Pull Quote */}
            <blockquote className="border-l-2 border-black pl-6 sm:pl-8">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-[#121214] leading-snug">
                “AN INDEPENDENT ATELIER COMBINING THOUGHTFUL ART DIRECTION WITH
                LEAN, PURPOSEFUL CODE.”
              </p>
            </blockquote>

            {/* Narrative Paragraphs */}
            <div className="mt-8 space-y-4 text-xs sm:text-sm text-[#5c5b66] leading-relaxed">
              <p>
                WEBLY was founded on the belief that digital presence should never
                feel manufactured or generic. We partner directly with
                individuals, creators, and growing businesses to craft web
                experiences that honor your narrative.
              </p>
              <p>
                No agency account managers, no inflated retainers—just
                meticulous design, fast turnaround, and direct founder
                collaboration. We do not inflate portfolios with imaginary
                statistics or ghost commissions; every engagement is built with
                honesty, purpose, and surgical precision.
              </p>
            </div>

            {/* Connect CTA */}
            <div className="mt-8">
              <a
                href={getWhatsAppLink("Direct Founder Collaboration Inquiry")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xs bg-black px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition hover:bg-neutral-800"
              >
                <span>CONNECT WITH THE FOUNDER</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. DARK EIGHT-ROW TRANSPARENT INVESTMENT INDEX
      ========================================================================= */}
      <section
        id="pricing"
        className="scroll-mt-28 bg-[#060608] text-[#f4f4f5] px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/[0.08]"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="mb-14">
            <p className="font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
              CLEAR PRICING
            </p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white">
              TRANSPARENT INVESTMENT INDEX
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm text-white/50 leading-relaxed">
              Predictable, honest economics with zero agency markups or hidden
              deliverables.
            </p>
          </div>

          {/* Structured Architectural Index Table */}
          <div className="border border-white/[0.1] bg-[#0c0c0f]">
            {/* Table Header */}
            <div className="hidden sm:grid grid-cols-[1fr_160px_130px] border-b border-white/[0.1] px-6 py-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
              <div>DISCIPLINE / SCOPE</div>
              <div className="text-right">STARTING RATE</div>
              <div className="text-right">DIRECT ACTION</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/[0.08]">
              {studioDisciplines.map((row) => (
                <div
                  key={row.title}
                  className="group flex flex-col sm:grid sm:grid-cols-[1fr_160px_130px] sm:items-center px-6 py-4 transition-colors hover:bg-white/[0.02]"
                >
                  {/* Discipline / Scope */}
                  <div className="pr-4">
                    <p className="font-serif text-base sm:text-lg font-medium text-white group-hover:text-white">
                      {row.title.toLowerCase().replace(/\b\w/g, (c) =>
                        c.toUpperCase()
                      )}
                    </p>
                    <p className="font-mono text-[11px] text-white/45 mt-0.5">
                      {row.features}
                    </p>
                  </div>

                  {/* Starting Rate */}
                  <div className="mt-3 sm:mt-0 flex items-center justify-between sm:justify-end">
                    <span className="sm:hidden font-mono text-[10px] text-white/40">
                      STARTING RATE:
                    </span>
                    <span className="font-serif text-base sm:text-lg font-semibold text-white">
                      {row.rawPrice}
                    </span>
                  </div>

                  {/* Direct Action */}
                  <div className="mt-3 sm:mt-0 flex justify-end">
                    <a
                      href={getWhatsAppLink(row.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-white/70 hover:text-white transition group-hover:translate-x-0.5"
                    >
                      <span>{row.rawPrice === "Get a Quote" ? "INQUIRE" : "SELECT"}</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer Banner */}
            <div className="border-t border-white/[0.1] bg-[#09090c] p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-3 max-w-2xl text-xs text-white/50 leading-relaxed font-mono">
                <Info size={16} className="text-white/60 shrink-0 mt-0.5" />
                <p>
                  All starting fees reflect foundational builds. Final investment
                  is tailored precisely to your specific project requirements,
                  custom integrations, and asset scope. No hidden costs.
                </p>
              </div>

              <a
                href={getWhatsAppLink("Transparent Investment Index Consultation")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xs bg-white px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold text-black transition hover:bg-neutral-200 shrink-0"
              >
                <span>DISCUSS ON WHATSAPP ({WHATSAPP_DISPLAY})</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. DARK DUAL WHATSAPP/EMAIL INQUIRY CARDS (HAVE A VISION WORTH BUILDING?)
      ========================================================================= */}
      <section
        id="contact"
        className="scroll-mt-28 bg-[#000000] text-white px-5 sm:px-8 lg:px-12 py-24 sm:py-32 border-b border-white/[0.08]"
      >
        <div className="mx-auto max-w-[1440px]">
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-white/60 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>DIRECT COMMISSIONS OPEN</span>
            </div>

            <h2 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[0.95]">
              HAVE A VISION
              <br />
              <span className="italic font-normal">WORTH</span> BUILDING?
            </h2>

            <p className="mt-4 max-w-xl text-xs sm:text-sm text-white/55 leading-relaxed">
              Let us bring it into reality with deliberate craft. Send a brief
              message with your timeline, inspiration, or questions.
            </p>
          </div>

          {/* Dual Transmission Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Transmission 01: WhatsApp */}
            <div className="flex flex-col justify-between rounded-sm border border-white/[0.1] bg-[#0c0c0f] p-6 sm:p-8 transition hover:border-white/25">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                  PRIMARY TRANSMISSION
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
                  INITIATE ON WHATSAPP
                </h3>
                <p className="mt-1 font-mono text-sm text-white/70">
                  {WHATSAPP_DISPLAY}
                </p>
              </div>

              <div className="mt-10 border-t border-white/[0.08] pt-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white transition"
                >
                  <span>OPEN WHATSAPP CHAT</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>

            {/* Transmission 02: Direct Email */}
            <div className="flex flex-col justify-between rounded-sm border border-white/[0.1] bg-[#0c0c0f] p-6 sm:p-8 transition hover:border-white/25">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                  FORMAL TRANSMISSION
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-white">
                  SEND DIRECT EMAIL
                </h3>
                <p className="mt-1 font-mono text-sm text-white/70">
                  {STUDIO_EMAIL}
                </p>
              </div>

              <div className="mt-10 border-t border-white/[0.08] pt-4">
                <a
                  href={`mailto:${STUDIO_EMAIL}`}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-white/80 hover:text-white transition"
                >
                  <span>COMPOSE EMAIL</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Sub-note */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[10px] text-white/40 border-t border-white/[0.06] pt-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>DIRECT FOUNDER CONSULTATION VIA WHATSAPP OR EMAIL</span>
            </div>
            <span>DIRECT INQUIRY</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          9. THREE-COLUMN EDITORIAL FOOTER
      ========================================================================= */}
      <footer className="bg-[#000000] text-white px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-white/[0.08]">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 pb-14 border-b border-white/[0.08]">
            {/* Col 1: Identity */}
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/webly-logo.png"
                  alt="WEBLY"
                  width={130}
                  height={45}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <p className="text-xs text-white/50 leading-relaxed max-w-sm">
                Bespoke web design and development for individuals, creators,
                and businesses crafted with care and purposeful code.
              </p>
            </div>

            {/* Col 2: Direct Inquiries */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                DIRECT INQUIRIES
              </p>
              <div className="mt-4 space-y-2.5 font-mono text-xs text-white/70">
                <p>
                  WhatsApp Consultation:{" "}
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white hover:underline ml-1"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </p>
                <p>
                  Email Transmission:{" "}
                  <a
                    href={`mailto:${STUDIO_EMAIL}`}
                    className="text-white hover:underline ml-1"
                  >
                    {STUDIO_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            {/* Col 3: Navigation */}
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                NAVIGATION
              </p>
              <ul className="mt-4 space-y-2 font-mono text-xs text-white/60">
                <li>
                  <a href="#works" className="hover:text-white transition">
                    Selected Works
                  </a>
                </li>
                <li>
                  <a href="#disciplines" className="hover:text-white transition">
                    Disciplines
                  </a>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white transition">
                    Pricing Index
                  </Link>
                </li>
                <li>
                  <a href="#ethos" className="hover:text-white transition">
                    Studio Ethos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Legal Bar */}
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

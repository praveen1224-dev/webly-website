"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import MobileBottomNav from "../components/MobileBottomNav";
import BrandFooter from "../components/BrandFooter";
import {
  ChevronDown,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
} from "lucide-react";
import {
  StudioStarburst,
  StudioCrosshair,
  StudioDotGrid,
} from "../components/StudioDecorations";

const WHATSAPP_BASE = "https://wa.me/916379290968";

function getWhatsAppLink(serviceName: string, price?: string) {
  const isCustom = price === "CUSTOM QUOTE" || price === "Custom Quote" || !price;
  const msg = isCustom
    ? `Hello Webly Studio, I would like a Custom Quote for ${serviceName}.`
    : `Hello Webly Studio, I am interested in the ${serviceName} package (${price}).`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
}

type FilterCategory = "all" | "personal" | "commercial" | "bespoke";

export default function PricingPage() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pricingTiers = [
    {
      id: "online-invite",
      category: "personal",
      badge: "CEREMONY & RSVP",
      icon: "celebration",
      title: "Online Invitation",
      description:
        "Interactive RSVP, event chronology, and digital celebration showcase.",
      price: "₹499",
      priceLabel: "FLAT FEE",
      deliverables: [
        "1-Page responsive digital invite",
        "Interactive RSVP form & Google Map link",
        "Photo gallery & event schedule layout",
        "Direct WhatsApp sharing link",
      ],
      cardStyle: "bg-[#FDF4EF] border border-[#F2B9A0] hover:border-[#F08075]",
      badgeStyle: "bg-[#F2B9A0]/30 text-[#9E3E26]",
      priceColor: "text-[#9E3E26]",
      btnStyle: "bg-[#17243A] text-white hover:bg-[#315BFF]",
    },
    {
      id: "birthday-surprise",
      category: "personal",
      badge: "EXPERIENCE",
      icon: "cake",
      title: "Birthday Surprise",
      description:
        "Story-driven memory wall, dynamic countdown, and greeting experience.",
      price: "₹999",
      priceLabel: "FLAT FEE",
      deliverables: [
        "Curated memory timeline & captions",
        "Ambient background audio soundtrack",
        "Live countdown ticker & confetti fx",
        "Private link & password lock option",
      ],
      cardStyle: "bg-[#FDF1EF] border border-[#F08075]/40 hover:border-[#F08075]",
      badgeStyle: "bg-[#F08075]/20 text-[#C44D42]",
      priceColor: "text-[#D84335]",
      btnStyle: "bg-[#F08075] text-white hover:bg-[#17243A]",
    },
    {
      id: "student-portfolio",
      category: "personal",
      badge: "ACADEMIC / INTERNSHIP",
      icon: "school",
      title: "Student Portfolio",
      description:
        "Academic projects, dynamic resume, certifications, and personal brand.",
      price: "₹1,499",
      priceLabel: "FLAT FEE",
      deliverables: [
        "Project case studies layout (up to 4)",
        "1-Click downloadable PDF resume",
        "GitHub / LinkedIn / Behance integrations",
        "Clean responsive format for recruiters",
      ],
      cardStyle: "bg-[#EDF7F2] border border-[#BFE5D2] hover:border-[#2EA875]",
      badgeStyle: "bg-[#BFE5D2]/40 text-[#1B6D4B]",
      priceColor: "text-[#1B6D4B]",
      btnStyle: "bg-[#17243A] text-white hover:bg-[#315BFF]",
    },
    {
      id: "personal-portfolio",
      category: "personal",
      badge: "CREATIVE MONOGRAPH",
      icon: "palette",
      title: "Personal Portfolio",
      description:
        "For creative directors, photographers, artists, writers, and freelancers.",
      price: "₹1,999",
      priceLabel: "FLAT FEE",
      deliverables: [
        "Bespoke editorial typography & layout",
        "Filtered visual portfolio gallery",
        "Direct client inquiry & booking trigger",
        "SEO fundamentals & fast Web Vitals",
      ],
      cardStyle: "bg-[#F3EFFC] border border-[#DDD5F5] hover:border-[#7A6CD9]",
      badgeStyle: "bg-[#DCD9F5]/60 text-[#5B4DBF]",
      priceColor: "text-[#5B4DBF]",
      btnStyle: "bg-[#7A6CD9] text-white hover:bg-[#17243A]",
    },
    {
      id: "small-business",
      category: "commercial",
      badge: "COMMERCIAL FLAGSHIP",
      icon: "storefront",
      title: "Small Business Website",
      description:
        "Fast, conversion-focused multi-section site for local companies & consultancies.",
      price: "₹3,999",
      priceLabel: "FLAT FEE",
      deliverables: [
        "Up to 4 structured content sections",
        "Lead capture form + WhatsApp direct CTA",
        "Google Maps local business alignment",
        "Speed-optimized code & SSL setup assist",
      ],
      cardStyle: "bg-[#FEF9E7] border border-[#F6D77A] hover:border-[#E5B834]",
      badgeStyle: "bg-[#F6D77A]/40 text-[#8C6D0A]",
      priceColor: "text-[#8C6D0A]",
      btnStyle: "bg-[#17243A] text-white hover:bg-[#315BFF]",
    },
    {
      id: "pro-business",
      category: "commercial",
      badge: "ENTERPRISE IDENTITY",
      icon: "corporate_fare",
      title: "Professional Business Website",
      description:
        "Multi-page comprehensive digital flagship for established brands & firms.",
      price: "₹7,999",
      priceLabel: "FLAT FEE",
      deliverables: [
        "5–8 bespoke responsive pages",
        "CMS-ready team, blog & services sections",
        "Technical SEO audit & Schema markup",
        "Full analytics tracking & tag setup",
      ],
      cardStyle: "bg-white border-2 border-[#315BFF] shadow-xl hover:shadow-2xl",
      badgeStyle: "bg-[#315BFF]/15 text-[#315BFF]",
      priceColor: "text-[#315BFF]",
      btnStyle: "bg-[#315BFF] text-white hover:bg-[#17243A]",
    },
    {
      id: "ecommerce",
      category: "commercial",
      badge: "COMMERCE ARCHITECTURE",
      icon: "shopping_bag",
      title: "E-commerce Website",
      description:
        "Turnkey digital storefront, product catalogue, cart, and payment checkout flow.",
      price: "₹12,999",
      priceLabel: "FLAT FEE",
      deliverables: [
        "Product catalog & filtered categories",
        "Razorpay / Stripe / UPI payment integration",
        "Cart, order confirmation & customer emails",
        "Inventory management admin setup",
      ],
      cardStyle: "bg-[#EEF4FF] border border-[#C8DCFF] hover:border-[#315BFF]",
      badgeStyle: "bg-[#315BFF]/15 text-[#315BFF]",
      priceColor: "text-[#315BFF]",
      btnStyle: "bg-[#17243A] text-white hover:bg-[#315BFF]",
    },
    {
      id: "custom-apps",
      category: "bespoke",
      badge: "BESPOKE SOFTWARE",
      icon: "terminal",
      title: "Custom Web Applications",
      description:
        "Tailored bespoke architectures, authenticated portals, APIs, and client dashboards.",
      price: "CUSTOM QUOTE",
      priceLabel: "TAILORED SCOPE",
      deliverables: [
        "Bespoke frontend & custom database models",
        "Auth, user roles & protected dashboards",
        "Third-party API & webhook integrations",
        "Dedicated architecture sprint & QA",
      ],
      cardStyle: "bg-[#17243A] text-white border-2 border-[#315BFF] shadow-xl hover:shadow-2xl",
      badgeStyle: "bg-[#DCD9F5] text-[#17243A] font-bold",
      priceColor: "text-[#DCD9F5]",
      btnStyle: "bg-[#315BFF] text-white hover:bg-white hover:text-[#17243A] shadow-md",
      isDark: true,
    },
  ];

  const filteredTiers =
    filter === "all"
      ? pricingTiers
      : pricingTiers.filter((tier) => tier.category === filter);

  const pricingFaqData = [
    {
      q: "Are there any recurring or hidden studio fees?",
      a: "None. The price quoted on this page is the exact flat one-time design and development cost. You never receive unannounced maintenance invoices or surprise deployment surcharges.",
    },
    {
      q: "How do domain registration and web hosting work?",
      a: "For microsites (Invitations & Birthday pages), we provide zero-cost hosted links. For portfolios and business websites, we guide you directly to purchase your domain (.com, .in) under your own name and link it to high-speed cloud hosting (often free on Vercel/Netlify or minimal shared servers). You retain 100% legal ownership of your digital assets.",
    },
    {
      q: "How do we start a project?",
      a: "Tap 'Start a Project' or reach out via WhatsApp at +91 63792 90968. Share your requirements, content, and references. We confirm the scope and begin work immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans text-[#17243A] antialiased selection:bg-[#315BFF] selection:text-white">
      {/* 1. Header Navigation with Pricing Active */}
      <Navbar activePage="pricing" />

      {/* Main Pricing Content */}
      <main className="w-full pt-20 bg-[#FAF9F6] min-h-[calc(100vh-20rem)] pb-28 md:pb-0">
        
        {/* SECTION 1: PRICING HERO */}
        <section className="relative w-full px-margin-mobile lg:px-margin pt-10 sm:pt-16 pb-12 sm:pb-16 overflow-hidden bg-[#FAF9F6]">
          {/* Subtle multi-color glowing spheres & Architectural Grid */}
          <div className="absolute inset-0 pattern-fine-grid opacity-50 pointer-events-none -z-10" />
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-[#315BFF]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          <div className="absolute top-1/2 -left-28 w-[400px] h-[400px] bg-[#F08075]/12 rounded-full blur-2xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-10 w-[360px] h-[360px] bg-[#DCD9F5]/25 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-end">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-[#315BFF] font-black block">
                    TRANSPARENT INVESTMENT STRUCTURE
                  </span>
                  <StudioStarburst size={12} fill="#315BFF" />
                </div>
                <h1 className="font-syne text-[38px] xs:text-[46px] sm:text-6xl md:text-7xl font-black text-[#17243A] tracking-tight leading-[0.95]">
                  Simple pricing.
                  <br />
                  <span className="text-[#315BFF]">Clear choices.</span>
                </h1>
              </div>
              <div className="lg:col-span-4 pb-2">
                <p className="font-body-xl text-base sm:text-lg text-[#17243A]/80 leading-relaxed mb-6 font-medium">
                  Transparent, studio-crafted tier structure for creators, students, couples, and growing enterprises. High-precision engineering and bespoke art direction with absolute cost clarity.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[#17243A]">
                  <span className="flex items-center gap-1.5 font-bold text-[#17243A]">
                    <Check size={14} className="text-[#315BFF]" />
                    Zero Hidden Fees
                  </span>
                  <span className="flex items-center gap-1.5 font-bold text-[#17243A]">
                    <Zap size={14} className="text-[#F08075]" />
                    Mobile First Layout
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: INTERACTIVE FILTER TABS */}
        <section className="w-full px-margin-mobile lg:px-margin py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-[#F2EFFC] p-3 sm:p-4 rounded-2xl border border-[#17243A]/10">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap" id="tier-filter-buttons">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`shrink-0 px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap font-bold ${
                  filter === "all"
                    ? "bg-[#315BFF] text-white shadow-sm"
                    : "bg-white hover:bg-white/80 text-[#17243A]"
                }`}
              >
                All Packages (8)
              </button>
              <button
                type="button"
                onClick={() => setFilter("personal")}
                className={`shrink-0 px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap font-bold ${
                  filter === "personal"
                    ? "bg-[#F08075] text-white shadow-sm"
                    : "bg-white hover:bg-white/80 text-[#17243A]"
                }`}
              >
                Personal &amp; Micro (4)
              </button>
              <button
                type="button"
                onClick={() => setFilter("commercial")}
                className={`shrink-0 px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap font-bold ${
                  filter === "commercial"
                    ? "bg-[#2EA875] text-white shadow-sm"
                    : "bg-white hover:bg-white/80 text-[#17243A]"
                }`}
              >
                Business &amp; Commerce (3)
              </button>
              <button
                type="button"
                onClick={() => setFilter("bespoke")}
                className={`shrink-0 px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap font-bold ${
                  filter === "bespoke"
                    ? "bg-[#17243A] text-white shadow-sm"
                    : "bg-white hover:bg-white/80 text-[#17243A]"
                }`}
              >
                Bespoke (1)
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#17243A] font-label-sm text-xs uppercase font-bold shrink-0 shadow-2xs">
              <Sparkles size={14} className="text-[#315BFF]" />
              <span>Direct WhatsApp &amp; Email Booking</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: 8 PRICING CARDS */}
        <section className="w-full px-margin-mobile lg:px-margin py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredTiers.map((tier) => {
                const isDark = tier.isDark || tier.id === "custom-apps" || tier.cardStyle.includes("bg-[#17243A]");
                return (
                  <div
                    key={tier.id}
                    className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative ${tier.cardStyle} shadow-sm hover:shadow-xl hover:-translate-y-1`}
                  >
                    <div>
                      {/* Top Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`px-3 py-1 rounded-full font-label-sm text-[10px] uppercase font-bold tracking-wider ${tier.badgeStyle}`}
                        >
                          {tier.badge}
                        </span>
                        <span
                          className={`material-symbols-outlined text-[18px] ${isDark ? "text-[#DCD9F5]" : tier.priceColor}`}
                        >
                          {tier.icon}
                        </span>
                      </div>

                      <h2 className={`font-headline-sm text-lg uppercase mb-2 font-extrabold ${isDark ? "text-white" : "text-[#17243A]"}`}>
                        {tier.title}
                      </h2>
                      <p className={`font-body-md text-xs leading-relaxed mb-6 min-h-[36px] ${isDark ? "text-[#FFF9EE]/90" : "text-[#17243A]/75"}`}>
                        {tier.description}
                      </p>

                      {/* Pricing Tag */}
                      <div className={`mb-6 pb-6 border-b ${isDark ? "border-white/15" : "border-[#17243A]/10"}`}>
                        <span className={`font-label-sm text-[9px] uppercase tracking-wider block mb-1 font-bold ${isDark ? "text-[#DCD9F5]/80" : "text-[#17243A]/60"}`}>
                          ONE-TIME INVESTMENT
                        </span>
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className={`font-headline-lg ${isDark ? "text-2xl xs:text-3xl" : "text-3xl"} font-black tracking-tight ${tier.priceColor}`}
                          >
                            {tier.price}
                          </span>
                          <span className={`text-[10px] font-mono uppercase font-semibold ${isDark ? "text-[#DCD9F5]/90" : "text-[#17243A]/60"}`}>
                            {tier.priceLabel}
                          </span>
                        </div>
                      </div>

                      {/* Deliverables List */}
                      <ul className="space-y-3 text-xs mb-8">
                        {tier.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <Check
                              size={14}
                              className={`shrink-0 mt-0.5 ${isDark ? "text-[#DCD9F5]" : tier.priceColor}`}
                            />
                            <span className={`font-medium ${isDark ? "text-[#FFF9EE]" : "text-[#17243A]/85"}`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <a
                      className={`w-full py-3.5 rounded-full text-center font-label-md text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 font-bold shadow-xs cursor-pointer ${tier.btnStyle}`}
                      href={getWhatsAppLink(tier.title, tier.price)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{tier.price === "CUSTOM QUOTE" ? "Request Custom Quote" : "Start a Project"}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 4: DELIVERABLES AT A GLANCE (COMPARATIVE MATRIX TABLE) */}
        <section className="w-full px-margin-mobile lg:px-margin py-12 sm:py-20 bg-[#F2EFFC]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#17243A]/15">
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#315BFF] block mb-1 font-black">
                  Comparative Breakdown
                </span>
                <h2 className="font-headline-lg text-primary-container">
                  Deliverables At A Glance
                </h2>
              </div>
              <p className="font-body-md text-sm text-[#17243A]/80 max-w-md mt-3 md:mt-0 font-medium">
                Compare core parameters across packages to select the tier aligned with your digital launch requirements.
              </p>
            </div>

            {/* Mobile Responsive Breakdown Cards (Hidden on md and up) */}
            <div className="md:hidden flex flex-col gap-4">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.id}
                  className="rounded-2xl p-5 border border-[#17243A]/10 bg-white shadow-xs"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-[#17243A]/10 mb-3">
                    <div>
                      <h3 className="font-headline-sm text-base uppercase text-[#17243A] font-bold">
                        {tier.title}
                      </h3>
                      <span className="font-label-sm text-[10px] uppercase text-[#17243A]/60 font-bold tracking-wider">
                        {tier.badge}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-headline-sm text-base text-[#315BFF] font-black">
                        {tier.price}
                      </div>
                      <span className="text-[9px] font-mono uppercase text-[#17243A]/60 block font-semibold">
                        {tier.priceLabel}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs mb-4">
                    {tier.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-[#17243A]/80">
                        <Check size={13} className="text-[#315BFF] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    className="w-full py-3 rounded-full text-center font-label-md text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 font-bold bg-[#17243A] text-white hover:bg-[#315BFF] cursor-pointer"
                    href={getWhatsAppLink(tier.title, tier.price)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{tier.price === "CUSTOM QUOTE" ? "Request Custom Quote" : "Inquire via WhatsApp"}</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              ))}
            </div>

            {/* Desktop Comparison Table (Hidden on mobile) */}
            <div className="hidden md:block overflow-x-auto rounded-2xl bg-white shadow-sm border border-[#17243A]/10">
              <table className="w-full text-left border-collapse min-w-[720px]">
                <thead>
                  <tr className="bg-[#FAF7F2] text-[#17243A] border-b border-[#17243A]/10">
                    <th className="p-4 font-label-md text-xs uppercase tracking-wider font-bold">
                      Service Tier
                    </th>
                    <th className="p-4 font-label-md text-xs uppercase tracking-wider font-bold">
                      Investment
                    </th>
                    <th className="p-4 font-label-md text-xs uppercase tracking-wider font-bold">
                      Core Highlights
                    </th>
                    <th className="p-4 font-label-md text-xs uppercase tracking-wider text-center font-bold">
                      Mobile First
                    </th>
                    <th className="p-4 font-label-md text-xs uppercase tracking-wider text-right font-bold">
                      Transmission
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#17243A]/8 text-xs">
                  {pricingTiers.map((tier) => (
                    <tr
                      key={tier.id}
                      className="hover:bg-[#F2EFFC]/40 transition-colors"
                    >
                      <td className="p-4 font-label-lg text-sm text-[#17243A] font-bold">
                        <div>{tier.title}</div>
                        <span className="text-[10px] text-[#17243A]/60 font-semibold uppercase">{tier.badge}</span>
                      </td>
                      <td className="p-4 font-headline-sm text-sm text-[#315BFF] font-black">
                        {tier.price}
                      </td>
                      <td className="p-4 text-[#17243A]/80">
                        {tier.deliverables.slice(0, 2).join(" • ")}
                      </td>
                      <td className="p-4 text-[#2EA875] text-center">
                        <Check size={16} className="mx-auto" />
                      </td>
                      <td className="p-4 text-right">
                        <a
                          href={getWhatsAppLink(tier.title, tier.price)}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-full bg-[#17243A] text-white hover:bg-[#315BFF] transition-colors text-[11px] font-bold uppercase inline-flex items-center gap-1"
                        >
                          <span>{tier.price === "CUSTOM QUOTE" ? "Custom Quote" : "Inquire"}</span>
                          <ArrowRight size={12} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: CRAFTED FOR IMPACT */}
        <section className="w-full px-margin-mobile lg:px-margin py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 border-b border-[#17243A]/15">
              <div>
                <span className="font-label-sm text-xs uppercase tracking-widest text-[#F08075] block mb-1 font-black">
                  Production Quality
                </span>
                <h2 className="font-headline-lg text-primary-container">
                  Crafted For Impact
                </h2>
              </div>
              <p className="font-body-md text-sm text-[#17243A]/80 max-w-md font-medium">
                Regardless of the investment tier, every build receives dedicated typography curation, responsive fluid layout mechanics, and strict aesthetic rigor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Card 1 */}
              <div className="flex flex-col rounded-2xl overflow-hidden bg-[#F2EFFC] shadow-sm hover:shadow-lg transition-all border border-[#17243A]/10 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <Image
                    src="/stitch-images/stitch4_1.jpg"
                    alt="Editorial Fluidity design preview"
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#315BFF] block mb-1 font-black">
                    Architecture
                  </span>
                  <h3 className="font-headline-sm text-lg text-[#17243A] mb-1 font-bold">
                    Editorial Fluidity
                  </h3>
                  <p className="font-body-md text-xs text-[#17243A]/75">
                    Custom Syne and Plus Jakarta Sans type systems tuned for maximum readability.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col rounded-2xl overflow-hidden bg-[#EDF7F2] shadow-sm hover:shadow-lg transition-all border border-[#17243A]/10 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <Image
                    src="/stitch-images/stitch4_2.jpg"
                    alt="Mobile Responsiveness preview"
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#2EA875] block mb-1 font-black">
                    Engineering
                  </span>
                  <h3 className="font-headline-sm text-lg text-[#17243A] mb-1 font-bold">
                    Mobile Responsiveness
                  </h3>
                  <p className="font-body-md text-xs text-[#17243A]/75">
                    Zero lag, sub-second initial page loads, and seamless interaction across touchscreens.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col rounded-2xl overflow-hidden bg-[#FEF9E7] shadow-sm hover:shadow-lg transition-all border border-[#17243A]/10 hover:-translate-y-1">
                <div className="h-56 sm:h-64 overflow-hidden relative">
                  <Image
                    src="/stitch-images/stitch4_3.jpg"
                    alt="Commercial Conversion preview"
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#8C6D0A] block mb-1 font-black">
                    Integration
                  </span>
                  <h3 className="font-headline-sm text-lg text-[#17243A] mb-1 font-bold">
                    Commercial Conversion
                  </h3>
                  <p className="font-body-md text-xs text-[#17243A]/75">
                    Integrated instant UPI/Card gateways and automated direct messaging channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: EVERYTHING CLEARLY ANSWERED (FAQ) */}
        <section className="w-full px-margin-mobile lg:px-margin py-16 sm:py-24 bg-[#FAF9F6] border-t border-[#17243A]/10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#315BFF] block mb-1 font-black">
                Questions &amp; Answers
              </span>
              <h2 className="font-headline-lg text-primary-container mb-2">
                Everything clearly answered.
              </h2>
              <p className="font-body-md text-sm text-[#17243A]/80 font-medium">
                No vague policies. Here is exactly how we deliver each project.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              {pricingFaqData.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white p-5 sm:p-6 transition-all border border-[#17243A]/10 shadow-xs hover:shadow-md"
                  >
                    <button
                      className="w-full flex items-center justify-between text-left cursor-pointer focus:outline-none"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <h3 className="font-headline-sm text-sm sm:text-base uppercase text-[#17243A] pr-4 font-bold">
                        {faq.q}
                      </h3>
                      <ChevronDown
                        size={20}
                        className={`text-[#315BFF] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="mt-4 pt-4 border-t border-[#17243A]/10 text-xs sm:text-sm text-[#17243A]/80 leading-relaxed animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL CTA (DEEP NAVY) */}
        <section className="w-full px-margin-mobile lg:px-margin py-16 sm:py-24">
          <div className="max-w-7xl mx-auto rounded-3xl bg-[#17243A] text-white p-8 lg:p-16 relative overflow-hidden shadow-2xl border-2 border-[#315BFF]">
            <div className="relative z-10 max-w-3xl">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#F08075] block mb-3 font-black">
                COMMENCE YOUR PROJECT
              </span>
              <h2 className="text-[32px] xs:text-4xl sm:text-5xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-[1.05] mb-6 font-syne">
                LET&apos;S MAKE
                <br />
                <span className="text-[#315BFF]">SOMETHING</span>{" "}
                <span className="text-[#F08075]">GREAT.</span>
              </h2>
              <p className="font-body-xl text-sm sm:text-base text-[#DCD9F5] leading-relaxed mb-8 max-w-xl">
                Have questions or ready to launch? Speak directly with our creative team. No automated bots—just thoughtful creators ready to build.
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  className="px-8 py-4 min-h-[48px] rounded-full bg-[#315BFF] hover:bg-white hover:text-[#17243A] text-white font-label-md text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-lg inline-flex items-center justify-center gap-2 text-center cursor-pointer"
                  href="https://wa.me/916379290968?text=Hello%20Webly%20Studio,%20I%20am%20ready%20to%20start%20my%20project."
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={14} />
                </a>
                <a
                  className="px-8 py-4 min-h-[48px] rounded-full bg-white/10 hover:bg-white/20 text-white font-label-md text-xs sm:text-sm uppercase tracking-wider transition-all font-semibold inline-flex items-center justify-center text-center cursor-pointer border border-white/20"
                  href="mailto:webly.studioservice@gmail.com"
                >
                  Email Studio
                </a>
              </div>
            </div>

            {/* Subtle background glows */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#315BFF]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F08075]/20 rounded-full blur-3xl pointer-events-none" />
          </div>
        </section>
      </main>

      {/* Brand Footer */}
      <BrandFooter />

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
}

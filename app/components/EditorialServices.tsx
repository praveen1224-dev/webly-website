"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, MessageCircle } from "lucide-react";

const WHATSAPP_NUM = "916379290968";

function getWhatsAppLink(service: string) {
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
    `Hi WEBLY! I'm interested in discussing "${service}". Please share scope, turnaround, and quotation.`
  )}`;
}

const servicesData = [
  {
    number: "01",
    title: "Online Invitation Websites",
    price: "₹499",
    category: "Milestone Celebration",
    turnaround: "2–4 Days",
    summary: "Bespoke digital RSVP portals, venue directions, and interactive storytelling for weddings and private milestones.",
    features: ["Digital Guest RSVP Vault", "Google Maps Directions", "Live Event Countdown", "Mobile Touch Polish"],
  },
  {
    number: "02",
    title: "Birthday Surprise Websites",
    price: "₹999",
    category: "Celebration Portal",
    turnaround: "3–5 Days",
    summary: "Interactive memory vaults, hidden clue messages, timeline memories, and celebration portals for loved ones.",
    features: ["Interactive Vault", "Hidden Clue Locker", "Photo & Video Galleries", "Wishes Board"],
  },
  {
    number: "03",
    title: "Student Portfolio Websites",
    price: "₹1,499",
    category: "Career Launch",
    turnaround: "3–5 Days",
    summary: "High-impact project showcase platforms engineered to dominate competitive interviews, internships, and hackathons.",
    features: ["Interactive Project Cards", "Resume PDF Download", "GitHub Sync", "Recruiter-Ready Speed"],
  },
  {
    number: "04",
    title: "Personal Portfolio Websites",
    price: "₹1,999",
    category: "Executive & Creator Brand",
    turnaround: "4–7 Days",
    summary: "Tailored digital identity for creators, executives, architects, and independent consultants demanding authority.",
    features: ["Curated Narrative Bio", "Selected Case Studies Drawer", "Inquiry Routing", "Fluid Micro-Interactions"],
  },
  {
    number: "05",
    title: "Small Business Websites",
    price: "₹3,999",
    category: "Local Authority",
    turnaround: "5–8 Days",
    summary: "Conversion-focused local commerce, professional service pages, WhatsApp click-to-book integrations, and SEO.",
    features: ["Local SEO & Google Maps", "WhatsApp Direct Booking", "Service & Pricing Showcase", "Mobile Lead Flows"],
  },
  {
    number: "06",
    title: "Professional Business Websites",
    price: "₹7,999",
    category: "Corporate Presence",
    turnaround: "7–10 Days",
    summary: "Multi-page corporate presence, case studies, team directories, investor relations, and automated inquiry routing.",
    features: ["Multi-Page Architecture", "Corporate Trust Markers", "Dynamic Lead Intake Flow", "Performance Audit 95+"],
  },
  {
    number: "07",
    title: "E-commerce Websites",
    price: "₹12,999",
    category: "Digital Storefront",
    turnaround: "10–14 Days",
    summary: "Direct-to-consumer digital storefronts, payment gateways, product catalogs, and frictionless shopping carts.",
    features: ["Product Catalog & Collections", "Frictionless Cart & Bag", "Payment Gateway Setup", "Order Intake Workflows"],
  },
  {
    number: "08",
    title: "Custom Web Applications",
    price: "Custom Quote",
    category: "Bespoke Engineering",
    turnaround: "Scoped per project",
    summary: "Specialized workflows, proprietary client dashboards, dynamic calculators, internal tooling, and API services.",
    features: ["Custom Dashboard Workflows", "Proprietary Data Logic", "REST / GraphQL API Hooks", "Scalable Serverless Code"],
  },
];

export default function EditorialServices() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="services" className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#060608] border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>STUDIO DISCIPLINES · EIGHT OFFERINGS</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[0.96]">
              STUDIO SERVICES.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
            Every build is conceived from the ground up to honor your story and drive outcomes—without relying on cookie-cutter templates.
          </p>
        </div>

        {/* Large Typography Numbered Service Rows */}
        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {servicesData.map((service, idx) => {
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`group py-6 sm:py-8 transition-colors duration-300 ${
                  isHovered ? "bg-white/[0.02]" : ""
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Number + Title */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8 flex-1">
                    <span className="font-syne text-xl sm:text-2xl font-bold text-white/30 group-hover:text-white transition-colors shrink-0">
                      {service.number} /
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="font-syne text-xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <span className="rounded bg-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/70 hidden sm:inline">
                          {service.category}
                        </span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-white/55 leading-relaxed font-sans max-w-xl">
                        {service.summary}
                      </p>
                    </div>
                  </div>

                  {/* Right: Investment + Action */}
                  <div className="flex items-center justify-between lg:justify-end gap-6 shrink-0 pl-10 sm:pl-16 lg:pl-0">
                    <div className="text-left lg:text-right">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/40 block">
                        STARTING INVESTMENT
                      </span>
                      <span className="font-serif text-2xl font-semibold text-white">
                        {service.price}
                      </span>
                      <span className="font-mono text-[10px] text-[#d8c3a5] block mt-0.5">
                        {service.turnaround}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-white/10 group-hover:bg-white group-hover:text-black px-5 py-3 font-mono text-xs uppercase tracking-wider text-white transition-all font-semibold"
                    >
                      <span>Inquire</span>
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Expanded Capabilities on active */}
                {isHovered && (
                  <div className="mt-4 pt-4 border-t border-white/[0.04] pl-10 sm:pl-16 flex flex-wrap gap-2 animate-fadeIn font-mono text-[10px] text-white/60">
                    <span className="text-white/35 mr-1">INCLUDED:</span>
                    {service.features.map((feat) => (
                      <span key={feat} className="rounded-full bg-white/[0.04] border border-white/5 px-2.5 py-0.5 text-white/75">
                        ✓ {feat}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 rounded-xl border border-white/[0.1] bg-[#0c0c10] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-syne text-xl font-bold text-white">
              Need a bespoke technical build or multi-page corporate scope?
            </h4>
            <p className="mt-1 text-xs text-white/60 font-sans max-w-xl">
              We engineer custom software architectures, private API endpoints, and specialized database portals. Connect with the founder for an immediate scope blueprint.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Custom Web Applications / Proprietary Systems")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-3 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition shrink-0"
          >
            <MessageCircle size={15} />
            <span>Consult on Custom Scope</span>
          </a>
        </div>
      </div>
    </section>
  );
}

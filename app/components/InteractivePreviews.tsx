"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Check,
  ChevronRight,
  Clock,
  ExternalLink,
  Heart,
  Laptop,
  MapPin,
  MessageCircle,
  Plus,
  Send,
  ShoppingBag,
  Sparkles,
  User,
} from "lucide-react";

const WHATSAPP_NUM = "916379290968";

function getWhatsAppLink(service: string) {
  return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(
    `Hi WEBLY! I'm exploring the "${service}" concept preview. Can we discuss building a website like this?`
  )}`;
}

export default function InteractivePreviews() {
  const [activeTab, setActiveTab] = useState<"wedding" | "portfolio" | "business" | "ecommerce">("wedding");

  // State for Wedding RSVP
  const [rsvpName, setRsvpName] = useState("");
  const [rsvpAttending, setRsvpAttending] = useState<"yes" | "no">("yes");
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  // Live Countdown State for Wedding Preview
  const [timeLeft, setTimeLeft] = useState({ days: 124, hours: 14, mins: 32, secs: 45 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        if (prev.mins > 0) return { ...prev, mins: prev.mins - 1, secs: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, mins: 59, secs: 59 };
        return { ...prev, days: prev.days - 1, hours: 23, mins: 59, secs: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // State for Portfolio Filter
  const [portfolioTag, setPortfolioTag] = useState<"all" | "systems" | "fintech" | "editorial">("all");

  // State for E-commerce Cart
  const [cartCount, setCartCount] = useState(0);
  const [cartToast, setCartToast] = useState<string | null>(null);

  const handleAddToCart = (productName: string) => {
    setCartCount((c) => c + 1);
    setCartToast(`Added "${productName}" to shopping bag`);
    setTimeout(() => setCartToast(null), 2500);
  };

  // State for Business Demo
  const [businessEmail, setBusinessEmail] = useState("");
  const [demoRequested, setDemoRequested] = useState(false);

  return (
    <section id="previews" className="relative px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#000000] border-b border-white/[0.08]">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span>INTERACTIVE PROTOTYPES · LIVE CODE PREVIEWS</span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase">
              REAL WEBSITE PREVIEWS.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
            These are actual browser-rendered React components built in code—not mockups or generic AI pictures. Click and interact to test their responsiveness and flow.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto gap-2 border-b border-white/[0.08] pb-4 mb-8">
          {[
            { id: "wedding", label: "01 / Wedding Invitation", tag: "Celebration" },
            { id: "portfolio", label: "02 / Personal Portfolio", tag: "Creator Brand" },
            { id: "business", label: "03 / Business Platform", tag: "Enterprise" },
            { id: "ecommerce", label: "04 / E-Commerce Store", tag: "Digital Commerce" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? "bg-white text-black font-semibold shadow-md"
                  : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded ${activeTab === tab.id ? "bg-black/10 text-black/70" : "bg-white/10 text-white/40"}`}>
                {tab.tag}
              </span>
            </button>
          ))}
        </div>

        {/* The Interactive Browser Frame */}
        <div className="rounded-2xl border border-white/[0.12] bg-[#0c0c10] shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Simulated Browser Chrome Bar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#121217] px-5 py-3">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20 inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20 inline-block" />
              <div className="ml-3 flex items-center gap-2 rounded-md bg-black/40 border border-white/5 px-3 py-1 font-mono text-[11px] text-white/50">
                <span className="text-white/40">https://</span>
                <span>
                  {activeTab === "wedding" && "alexander-lauren.webly.preview"}
                  {activeTab === "portfolio" && "alexandrechen.studio.preview"}
                  {activeTab === "business" && "apexcloud.enterprise.preview"}
                  {activeTab === "ecommerce" && "auraobjects.storefront.preview"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-mono text-[10px]">
              <span className="rounded bg-white/10 px-2 py-0.5 text-white/70 uppercase">
                Concept Preview
              </span>
              <span className="text-[#d8c3a5] hidden sm:inline">● Live Interactive Sandbox</span>
            </div>
          </div>

          {/* =========================================================================
              VIEWPORT 1: WEDDING INVITATION PREVIEW
          ========================================================================= */}
          {activeTab === "wedding" && (
            <div className="p-6 sm:p-10 lg:p-12 bg-gradient-to-b from-[#141214] via-[#0d0c0e] to-[#0a0a0c] text-white">
              <div className="mx-auto max-w-3xl text-center">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#d4af37] uppercase">
                  SAVE THE DATE · SEPTEMBER 24, 2025
                </span>

                <h3 className="mt-4 font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#fdfbf7]">
                  Alexander <span className="italic">&amp;</span> Lauren
                </h3>

                <p className="mt-3 font-serif italic text-base sm:text-lg text-white/70">
                  Request the pleasure of your company at Villa Balbiano, Lake Como
                </p>

                {/* Real Live Countdown Clock */}
                <div className="mt-10 grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto">
                  {[
                    { label: "DAYS", val: timeLeft.days },
                    { label: "HOURS", val: String(timeLeft.hours).padStart(2, "0") },
                    { label: "MINS", val: String(timeLeft.mins).padStart(2, "0") },
                    { label: "SECS", val: String(timeLeft.secs).padStart(2, "0") },
                  ].map((unit) => (
                    <div key={unit.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 backdrop-blur-md">
                      <span className="font-serif text-2xl sm:text-4xl font-normal text-white block">
                        {unit.val}
                      </span>
                      <span className="font-mono text-[9px] tracking-widest text-white/40 block mt-1">
                        {unit.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Itinerary Timeline */}
                <div className="mt-12 rounded-xl border border-white/10 bg-black/40 p-5 sm:p-6 text-left max-w-xl mx-auto">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#d4af37] mb-4">
                    <Calendar size={14} />
                    <span>Celebration Schedule</span>
                  </div>
                  <div className="space-y-3 font-sans text-xs">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-white/80 font-medium">4:30 PM — Garden Ceremony</span>
                      <span className="font-mono text-white/40">Grand Terrace</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-white/80 font-medium">6:00 PM — Apertivo &amp; Live Jazz</span>
                      <span className="font-mono text-white/40">Olive Grove</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 font-medium">7:30 PM — Dinner &amp; Dancing</span>
                      <span className="font-mono text-white/40">Main Courtyard</span>
                    </div>
                  </div>
                </div>

                {/* Interactive RSVP Intake Form */}
                <div className="mt-10 rounded-xl border border-white/15 bg-white/[0.04] p-6 max-w-xl mx-auto backdrop-blur-md text-left">
                  <h4 className="font-serif text-xl font-medium text-white mb-1">
                    RSVP Confirmation
                  </h4>
                  <p className="text-xs text-white/60 mb-5 font-sans">
                    Test the guest RSVP capture feature below:
                  </p>

                  {rsvpSubmitted ? (
                    <div className="rounded-lg bg-white/5 border border-white/20 p-4 text-center">
                      <Check size={20} className="text-[#d8c3a5] mx-auto mb-1.5" />
                      <p className="font-syne text-sm font-semibold text-white">
                        RSVP Received for {rsvpName}!
                      </p>
                      <p className="text-[11px] text-white/60 mt-0.5 font-mono">
                        Instant notification routed to WhatsApp &amp; Guest Registry.
                      </p>
                      <button
                        onClick={() => setRsvpSubmitted(false)}
                        className="mt-3 font-mono text-[10px] text-white/60 underline hover:text-white"
                      >
                        Reset RSVP Form
                      </button>
                    </div>
                  ) : (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (rsvpName) setRsvpSubmitted(true);
                      }}
                      className="space-y-3 font-mono text-xs"
                    >
                      <div>
                        <input
                          type="text"
                          required
                          value={rsvpName}
                          onChange={(e) => setRsvpName(e.target.value)}
                          placeholder="Your Full Name (e.g. David Sterling)"
                          className="w-full rounded-sm border border-white/15 bg-black/60 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setRsvpAttending("yes")}
                          className={`py-2 rounded-sm border text-[11px] transition ${
                            rsvpAttending === "yes"
                              ? "bg-white text-black font-semibold border-white"
                              : "border-white/10 bg-black/40 text-white/70"
                          }`}
                        >
                          ✓ Joyfully Accept
                        </button>
                        <button
                          type="button"
                          onClick={() => setRsvpAttending("no")}
                          className={`py-2 rounded-sm border text-[11px] transition ${
                            rsvpAttending === "no"
                              ? "bg-white text-black font-semibold border-white"
                              : "border-white/10 bg-black/40 text-white/70"
                          }`}
                        >
                          ✗ Regretfully Decline
                        </button>
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-sm bg-[#d4af37] text-black font-semibold py-2.5 uppercase tracking-wider text-[11px] hover:bg-[#e4c257] transition"
                      >
                        Submit Guest RSVP
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              VIEWPORT 2: PERSONAL PORTFOLIO PREVIEW
          ========================================================================= */}
          {activeTab === "portfolio" && (
            <div className="p-6 sm:p-10 bg-[#09090b] text-white">
              <div className="mx-auto max-w-4xl">
                {/* Header in Portfolio */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
                  <div>
                    <h3 className="font-syne text-2xl font-bold tracking-tight text-white">
                      Alexandre Chen
                    </h3>
                    <p className="font-mono text-xs text-white/50 mt-0.5">
                      Principal Designer &amp; Creative Technologist · Zurich / Remote
                    </p>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="rounded-full bg-white/5 border border-white/20 text-[#d8c3a5] px-3 py-1 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      <span>Open for Advisory</span>
                    </span>
                  </div>
                </div>

                {/* Filterable Project Tags */}
                <div className="flex flex-wrap gap-2 mb-6 font-mono text-[10px]">
                  {[
                    { id: "all", label: "All Works (6)" },
                    { id: "systems", label: "Design Systems" },
                    { id: "fintech", label: "Fintech Platforms" },
                    { id: "editorial", label: "Editorial Web" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setPortfolioTag(t.id as typeof portfolioTag)}
                      className={`px-3 py-1 rounded-sm border transition ${
                        portfolioTag === t.id
                          ? "bg-white text-black font-semibold border-white"
                          : "border-white/10 bg-white/[0.02] text-white/60 hover:text-white"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Project Rows */}
                <div className="divide-y divide-white/10 border-y border-white/10 font-sans">
                  {[
                    { title: "Sovereign Protocol", cat: "fintech", tag: "FINTECH INFRASTRUCTURE", role: "Design Lead", yr: "2025" },
                    { title: "Atlas Design System", cat: "systems", tag: "MULTI-BRAND SYSTEM", role: "Architecture", yr: "2025" },
                    { title: "Kinetics Monograph", cat: "editorial", tag: "EDITORIAL PLATFORM", role: "Art Direction", yr: "2024" },
                    { title: "Veloce Telemetry", cat: "fintech", tag: "REAL-TIME DASHBOARDS", role: "Lead UX", yr: "2024" },
                  ]
                    .filter((p) => portfolioTag === "all" || p.cat === portfolioTag)
                    .map((proj) => (
                      <div
                        key={proj.title}
                        className="group flex flex-col sm:flex-row sm:items-center justify-between py-4 px-2 hover:bg-white/[0.03] transition-colors rounded-sm cursor-pointer"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-white/30">0{proj.title.length % 9 + 1}</span>
                          <span className="font-syne text-lg font-semibold text-white group-hover:text-white">
                            {proj.title}
                          </span>
                          <span className="font-mono text-[10px] text-white/40 hidden md:inline">
                            {proj.tag}
                          </span>
                        </div>
                        <div className="flex items-center gap-6 mt-2 sm:mt-0 font-mono text-xs text-white/50">
                          <span>{proj.role}</span>
                          <span>{proj.yr}</span>
                          <ChevronRight size={14} className="text-white/40 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-between items-center font-mono text-[11px] text-white/40">
                  <span>Interactive Case Study Drawer Preview</span>
                  <span className="text-white/70">Sub-0.5s First Paint</span>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              VIEWPORT 3: BUSINESS & ENTERPRISE PLATFORM PREVIEW
          ========================================================================= */}
          {activeTab === "business" && (
            <div className="p-6 sm:p-10 bg-[#0d0e12] text-white">
              <div className="mx-auto max-w-4xl">
                {/* Enterprise Kicker */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 font-mono text-[10px] text-[#d8c3a5]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                    <span>COMMERCIAL PLATFORM ARCHITECTURE</span>
                  </div>
                  <span className="font-mono text-[10px] text-white/40">ENTERPRISE READY</span>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
                  <div>
                    <h3 className="font-syne text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                      Next-Gen Inbound Payment Infrastructure.
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
                      Eliminate payment gateway latency and reconcile cross-border settlements with sub-second finality. Handcrafted Next.js frontend with zero bloated trackers.
                    </p>

                    {/* Interactive Demo Request */}
                    <div className="mt-6">
                      {demoRequested ? (
                        <div className="rounded-lg bg-white/5 border border-white/20 p-3.5 font-mono text-xs text-[#d8c3a5]">
                          ✓ Consultation request dispatched to studio founder ({businessEmail})
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            if (businessEmail) setDemoRequested(true);
                          }}
                          className="flex flex-col sm:flex-row gap-2 max-w-md font-mono text-xs"
                        >
                          <input
                            type="email"
                            required
                            value={businessEmail}
                            onChange={(e) => setBusinessEmail(e.target.value)}
                            placeholder="work.email@enterprise.com"
                            className="flex-1 rounded-sm border border-white/15 bg-black/60 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-white focus:outline-none"
                          />
                          <button
                            type="submit"
                            className="rounded-sm bg-white px-5 py-2.5 font-semibold text-black hover:bg-neutral-200 transition shrink-0"
                          >
                            Request Demo
                          </button>
                        </form>
                      )}
                    </div>
                  </div>

                  {/* Telemetry Visual Card */}
                  <div className="rounded-xl border border-white/10 bg-[#13151b] p-5 font-mono text-xs shadow-xl">
                    <div className="flex justify-between border-b border-white/10 pb-3 mb-4 text-[10px] text-white/40">
                      <span>PLATFORM BENCHMARKS</span>
                      <span className="text-[#d8c3a5]">VERIFIED</span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <span className="text-[10px] text-white/50 block">PROCESSED REVENUE:</span>
                        <span className="font-syne text-2xl font-bold text-white">₹4,28,90,000+</span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[10px]">
                        <div>
                          <span className="text-white/40 block">LIGHTHOUSE SCORE</span>
                          <span className="text-white font-semibold">99 / 100</span>
                        </div>
                        <div>
                          <span className="text-white/40 block">PRODUCTION RUNTIME</span>
                          <span className="text-white font-semibold">100% READY</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =========================================================================
              VIEWPORT 4: E-COMMERCE STOREFRONT PREVIEW
          ========================================================================= */}
          {activeTab === "ecommerce" && (
            <div className="p-6 sm:p-10 bg-[#09090b] text-white">
              <div className="mx-auto max-w-4xl">
                {/* Store Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
                  <div>
                    <h3 className="font-syne text-xl font-bold tracking-wider uppercase text-white">
                      AURA OBJECTS
                    </h3>
                    <p className="font-mono text-[10px] text-white/40">MINIMALIST CERAMIC &amp; TITANIUM ATELIER</p>
                  </div>

                  <div className="relative">
                    <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-xs">
                      <ShoppingBag size={14} />
                      <span>Shopping Bag</span>
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-bold text-black">
                        {cartCount}
                      </span>
                    </div>

                    {cartToast && (
                      <div className="absolute right-0 top-full mt-2 w-64 rounded-md bg-white text-black p-2 font-mono text-[10px] shadow-2xl z-30 animate-fadeIn">
                        {cartToast}
                      </div>
                    )}
                  </div>
                </div>

                {/* Product Showcase Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Product 01 */}
                  <div className="rounded-xl border border-white/10 bg-[#121217] p-5 flex flex-col justify-between">
                    <div>
                      <div className="h-44 rounded-lg bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-white/5 flex items-center justify-center relative overflow-hidden mb-4">
                        <div className="w-20 h-28 rounded-md bg-gradient-to-b from-zinc-400 to-zinc-700 shadow-2xl rotate-6" />
                        <span className="absolute bottom-2 right-2 font-mono text-[9px] text-white/40">EDITION 50</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-syne text-base font-semibold text-white">
                          Obsidian Geometric Carafe
                        </h4>
                        <span className="font-mono text-sm font-bold text-white">₹1,850</span>
                      </div>
                      <p className="mt-1 text-xs text-white/50 font-sans">
                        Matte hand-blown borosilicate glass with heat-resistant titanium sleeve.
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToCart("Obsidian Geometric Carafe")}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-white py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition"
                    >
                      <Plus size={14} />
                      <span>Add to Shopping Bag</span>
                    </button>
                  </div>

                  {/* Product 02 */}
                  <div className="rounded-xl border border-white/10 bg-[#121217] p-5 flex flex-col justify-between">
                    <div>
                      <div className="h-44 rounded-lg bg-gradient-to-tr from-zinc-900 to-zinc-800 border border-white/5 flex items-center justify-center relative overflow-hidden mb-4">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-b from-zinc-300 via-zinc-500 to-zinc-800 shadow-2xl" />
                        <span className="absolute bottom-2 right-2 font-mono text-[9px] text-white/40">LIMITED RUN</span>
                      </div>
                      <div className="flex justify-between items-baseline">
                        <h4 className="font-syne text-base font-semibold text-white">
                          Brushed Titanium Vessel
                        </h4>
                        <span className="font-mono text-sm font-bold text-white">₹2,400</span>
                      </div>
                      <p className="mt-1 text-xs text-white/50 font-sans">
                        Single-piece milled aerospace titanium with micro-groove texture.
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToCart("Brushed Titanium Vessel")}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-sm bg-white py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition"
                    >
                      <Plus size={14} />
                      <span>Add to Shopping Bag</span>
                    </button>
                  </div>
                </div>

                <div className="mt-8 flex justify-between items-center font-mono text-[10px] text-white/40">
                  <span>Direct WhatsApp Order Notification Supported</span>
                  <span className="text-white/70">Frictionless Checkout Flows</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Action Strip */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 bg-[#0a0a0d] border-t border-white/[0.08]">
            <div className="font-mono text-xs text-white/60">
              <span className="text-white/40">Active Concept: </span>
              <span className="text-white font-semibold">
                {activeTab === "wedding" && "Online Invitation Website (Starting ₹499)"}
                {activeTab === "portfolio" && "Personal Portfolio Website (Starting ₹1,999)"}
                {activeTab === "business" && "Professional Business Website (Starting ₹7,999)"}
                {activeTab === "ecommerce" && "E-commerce Website (Starting ₹12,999)"}
              </span>
            </div>

            <a
              href={getWhatsAppLink(activeTab.toUpperCase())}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-white px-6 py-2.5 font-mono text-xs uppercase tracking-wider font-semibold text-black hover:bg-neutral-200 transition shrink-0"
            >
              <MessageCircle size={14} />
              <span>Discuss Building This Direction</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

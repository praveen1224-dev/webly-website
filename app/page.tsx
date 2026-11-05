"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import MobileBottomNav from "./components/MobileBottomNav";
import BrandFooter from "./components/BrandFooter";
import LogoIntro from "./components/LogoIntro";
import {
  StudioStarburst,
  StudioCrosshair,
  StudioDotGrid,
  StudioCurvedLines,
  StudioOrbitalRings,
  StudioOrganicShape,
} from "./components/StudioDecorations";
import {
  ChevronDown,
  Check,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Palette,
  GraduationCap,
  ShoppingBag,
  Heart,
  Gift,
  Code2,
  Sparkles,
  ShieldCheck,
  Laptop,
  MessageCircle,
  ExternalLink,
  Zap,
} from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/916379290968";

function getWhatsAppLink(serviceName: string, price?: string) {
  const isCustom = price === "CUSTOM QUOTE" || price === "Custom Quote" || !price;
  const msg = isCustom
    ? `Hello Webly Studio, I would like to inquire about ${serviceName}.`
    : `Hello Webly Studio, I am interested in the ${serviceName} tier (${price}).`;
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"commercial" | "personal" | "bespoke" | "all">("commercial");

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // 4 Curated Studio Showcase Projects
  const portfolioProjects = [
    {
      id: "solaris-capital",
      title: "Solaris Capital Venture",
      subtitle: "High-trust corporate infrastructure designed for next-gen climate asset managers.",
      category: "Corporate Flagship",
      deviceType: "desktop" as const,
      url: "solaris-capital.com",
      image: "/stitch-images/stitch1_2.jpg",
      aspectRatio: "aspect-[16/10]",
      deviceTag: "Desktop • 1440×900",
      serviceEnquiry: "Solaris Capital Venture (Corporate Flagship)",
      categoryBadge: "bg-[#315BFF]/10 text-[#315BFF] border border-[#315BFF]/20",
      accentColor: "#315BFF",
    },
    {
      id: "elena-vance",
      title: "Elena Vance Archive",
      subtitle: "A kinetic typography-first archive for an internationally published industrial architect.",
      category: "Creative Archive",
      deviceType: "mobile" as const,
      url: "elena-vance.design",
      image: "/stitch-images/stitch1_3.jpg",
      aspectRatio: "aspect-[4/5]",
      deviceTag: "Mobile • 390×844",
      serviceEnquiry: "Elena Vance Archive (Creative Portfolio)",
      categoryBadge: "bg-[#7A6CD9]/15 text-[#5B4DBF] border border-[#7A6CD9]/25",
      accentColor: "#7A6CD9",
    },
    {
      id: "kera-stoneware",
      title: "Kera Stoneware Goods",
      subtitle: "Tactile digital storefront complete with seamless cart workflows and micro-interactions.",
      category: "E-Commerce Storefront",
      deviceType: "mobile" as const,
      url: "nordic-ceramics.shop",
      image: "/stitch-images/stitch1_4.jpg",
      aspectRatio: "aspect-[4/5]",
      deviceTag: "Mobile • 390×844",
      serviceEnquiry: "Kera Stoneware Goods (E-Commerce Storefront)",
      categoryBadge: "bg-[#F08075]/15 text-[#C44D42] border border-[#F08075]/25",
      accentColor: "#F08075",
    },
    {
      id: "royal-celebrations",
      title: "The Royal Celebrations",
      subtitle: "Interactive RSVP countdown, venue navigation, and custom digital celebration narrative.",
      category: "Celebration Experience",
      deviceType: "mobile" as const,
      url: "ananya-rohan.love",
      image: "/stitch-images/stitch1_5.jpg",
      aspectRatio: "aspect-[4/5]",
      deviceTag: "Mobile • 390×844",
      serviceEnquiry: "The Royal Celebrations (Wedding Invitation)",
      categoryBadge: "bg-[#2EA875]/15 text-[#1B6D4B] border border-[#2EA875]/25",
      accentColor: "#2EA875",
    },
  ];

  // Consolidated Offerings & Investment (8 Packages with Distinct Visual Personalities)
  const offerings = [
    // Commercial & Brands
    {
      id: "small-biz",
      category: "commercial",
      tierNumber: "01",
      badge: "COMMERCIAL FLAGSHIP",
      title: "Small Business Website",
      summary: "Authority-driven digital headquarters engineered to convert visitors, showcase service depth, and reflect corporate caliber.",
      price: "₹3,999",
      priceLabel: "complete",
      deliverables: [
        "Up to 4 Structured Content Sections",
        "Services & Credentials Display",
        "Google Maps & Direct WhatsApp Action",
      ],
      icon: Building2,
      cardTheme: "bg-white border border-[#315BFF]/25 hover:border-[#315BFF]",
      badgeTheme: "bg-[#315BFF]/10 text-[#315BFF]",
      priceColor: "text-[#315BFF]",
      btnTheme: "bg-[#17243A] text-white hover:bg-[#315BFF]",
      isDark: false,
    },
    {
      id: "pro-biz",
      category: "commercial",
      tierNumber: "02",
      badge: "ENTERPRISE IDENTITY",
      title: "Professional Business",
      summary: "Bespoke multi-page corporate infrastructure with advanced conversion funnels, high-resolution media, and speed optimization.",
      price: "₹7,999",
      priceLabel: "complete",
      deliverables: [
        "5–8 Bespoke Responsive Pages",
        "High-Tactility Visual Assets",
        "Speed & Performance Calibration",
      ],
      icon: Building2,
      cardTheme: "bg-white border-2 border-[#315BFF] shadow-lg hover:shadow-xl",
      badgeTheme: "bg-[#315BFF] text-white font-bold",
      priceColor: "text-[#315BFF]",
      btnTheme: "bg-[#315BFF] text-white hover:bg-[#17243A]",
      isDark: false,
    },
    {
      id: "ecommerce",
      category: "commercial",
      tierNumber: "03",
      badge: "COMMERCE ARCHITECTURE",
      title: "E-commerce Website",
      summary: "Curated storefronts emphasizing product tactility, fluid checkout journeys, inventory management, and payment integrations.",
      price: "₹12,999",
      priceLabel: "complete",
      deliverables: [
        "Full Product Catalog Layout",
        "Seamless Payment Gateway Integration",
        "Cart & Order Instant Notifications",
      ],
      icon: ShoppingBag,
      cardTheme: "bg-[#EEF4FF] border border-[#C8DCFF] hover:border-[#315BFF]",
      badgeTheme: "bg-[#315BFF]/15 text-[#315BFF]",
      priceColor: "text-[#315BFF]",
      btnTheme: "bg-[#17243A] text-white hover:bg-[#315BFF]",
      isDark: false,
    },
    {
      id: "custom-app",
      category: "commercial",
      tierNumber: "04",
      badge: "BESPOKE ARCHITECTURE",
      title: "Custom Web Applications",
      summary: "Tailor-built software interfaces, interactive client dashboards, bespoke booking engines, and dedicated architectural utilities.",
      price: "CUSTOM QUOTE",
      priceLabel: "custom scope",
      deliverables: [
        "Custom Backend Logic & Databases",
        "User Portals & Secure Dashboards",
        "API & Third-Party Service Linking",
      ],
      icon: Code2,
      cardTheme: "bg-[#17243A] text-white border-2 border-[#315BFF] shadow-2xl",
      badgeTheme: "bg-[#DCD9F5] text-[#17243A] font-bold",
      priceColor: "text-[#DCD9F5]",
      btnTheme: "bg-[#315BFF] text-white hover:bg-white hover:text-[#17243A] shadow-md",
      isDark: true,
    },

    // Personal & Portfolios
    {
      id: "student-portfolio",
      category: "personal",
      tierNumber: "01",
      badge: "ACADEMIC / INTERNSHIP",
      title: "Student Portfolio",
      summary: "Polished, high-impact career launchpads structured to highlight academic case studies, dynamic resume, and GitHub/LinkedIn.",
      price: "₹1,499",
      priceLabel: "complete",
      deliverables: [
        "Project Case Studies (Up to 4)",
        "1-Click Downloadable Resume",
        "Recruiter-Calibrated Responsive Flow",
      ],
      icon: GraduationCap,
      cardTheme: "bg-[#EDF7F2] border border-[#BFE5D2] hover:border-[#2EA875]",
      badgeTheme: "bg-[#2EA875]/15 text-[#1B6D4B]",
      priceColor: "text-[#1B6D4B]",
      btnTheme: "bg-[#17243A] text-white hover:bg-[#2EA875]",
      isDark: false,
    },
    {
      id: "personal-portfolio",
      category: "personal",
      tierNumber: "02",
      badge: "CREATIVE MONOGRAPH",
      title: "Personal Portfolio",
      summary: "Bespoke monographs for designers, architects, consultants, and leaders who demand distinctive narrative identity.",
      price: "₹1,999",
      priceLabel: "complete",
      deliverables: [
        "Bespoke Editorial Typography Layout",
        "Interactive Work Showcase Gallery",
        "Sub-second Page Loading Speed",
      ],
      icon: Palette,
      cardTheme: "bg-[#F3EFFC] border border-[#DDD5F5] hover:border-[#7A6CD9]",
      badgeTheme: "bg-[#7A6CD9]/15 text-[#5B4DBF]",
      priceColor: "text-[#5B4DBF]",
      btnTheme: "bg-[#7A6CD9] text-white hover:bg-[#17243A]",
      isDark: false,
    },

    // Events & Bespoke
    {
      id: "online-invite",
      category: "bespoke",
      tierNumber: "01",
      badge: "CEREMONY & RSVP",
      title: "Online Invitation",
      summary: "Elegant bespoke celebration websites featuring interactive RSVP forms, itinerary timelines, map navigation, and intimate photo stories.",
      price: "₹499",
      priceLabel: "complete",
      deliverables: [
        "One-Page Responsive Digital Invite",
        "Event Schedule & Google Map Link",
        "Direct WhatsApp RSVP Mechanism",
      ],
      icon: Heart,
      cardTheme: "bg-[#FDF3EE] border border-[#F2B9A0] hover:border-[#E28966]",
      badgeTheme: "bg-[#F08075]/15 text-[#C44D42]",
      priceColor: "text-[#C44D42]",
      btnTheme: "bg-[#17243A] text-white hover:bg-[#F08075]",
      isDark: false,
    },
    {
      id: "birthday-surprise",
      category: "bespoke",
      tierNumber: "02",
      badge: "EXPERIENCE KEEPSAKE",
      title: "Birthday Surprise Website",
      summary: "Story-driven memory wall, dynamic countdown ticker, ambient audio soundtrack, and private link sharing keepsakes.",
      price: "₹999",
      priceLabel: "complete",
      deliverables: [
        "Interactive Memory Timeline Wall",
        "Photo Gallery / Music Player Audio",
        "Custom Live Countdown Timer",
      ],
      icon: Gift,
      cardTheme: "bg-[#FDF1EF] border border-[#F08075]/35 hover:border-[#F08075]",
      badgeTheme: "bg-[#F08075]/20 text-[#D84335]",
      priceColor: "text-[#D84335]",
      btnTheme: "bg-[#F08075] text-white hover:bg-[#17243A]",
      isDark: false,
    },
  ];

  const filteredOfferings =
    activeTab === "all"
      ? offerings
      : offerings.filter((item) => item.category === activeTab);

  const faqData = [
    {
      q: "How long does a website take to build?",
      a: "Personal websites, student portfolios, and invitations are typically completed in 2 to 4 days. Standard and professional business websites average 5 to 10 days. Custom web applications vary based on specific feature requirements and architectural complexity.",
    },
    {
      q: "Will my website work properly on mobile phones?",
      a: "Yes. Every website we build is completely responsive. We adopt a strict mobile-first engineering approach, ensuring layouts adapt seamlessly from compact Android/iPhone screens to ultra-wide desktop displays.",
    },
    {
      q: "Do I have to provide the domain and hosting?",
      a: "We provide complete setup guidance. If you already own a domain and hosting, we deploy straight to your environment. If not, we assist you in securing your domain under your own ownership and connecting cost-effective cloud hosting.",
    },
    {
      q: "How do we start a project?",
      a: "Select your preferred package above, reach out directly through WhatsApp at +91 63792 90968 or send an email to webly.studioservice@gmail.com. We outline your exact scope, confirm milestone dates, and begin immediately.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9EE] font-sans text-[#17243A] antialiased selection:bg-[#315BFF] selection:text-white overflow-x-hidden">
      {/* 1. Compulsory WEBLY Logo Intro Animation */}
      <LogoIntro />

      {/* 2. Top Header Navigation */}
      <Navbar activePage="home" />

      {/* Main Page Container with bottom padding for mobile dock */}
      <main className="pt-16 sm:pt-20 bg-[#FFF9EE] pb-24 md:pb-0">
        
        {/* ====================================================================
            SECTION 1: HERO SECTION (SIGNATURE ABSTRACT COMPOSITION)
            ==================================================================== */}
        <section className="relative w-full px-margin-mobile lg:px-margin pt-6 sm:pt-10 pb-16 sm:pb-28 overflow-hidden bg-[#FFF9EE]">
          
          {/* Studio Signature Abstract Background Composition */}
          {/* 1. Architectural Grid Overlay */}
          <div className="absolute inset-0 pattern-fine-grid opacity-60 pointer-events-none -z-10" />

          {/* 2. Oversized Cobalt Organic Shape (Top Right) */}
          <div className="absolute -top-32 -right-20 w-[420px] sm:w-[580px] lg:w-[680px] h-[420px] sm:h-[580px] lg:h-[680px] pointer-events-none -z-10 animate-float-slow">
            <StudioOrganicShape variant={1} color="#315BFF" opacity={0.10} className="w-full h-full" />
          </div>

          {/* 3. Peach & Coral Overlapping Organic Shape (Mid Left) */}
          <div className="absolute top-1/4 -left-28 w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] pointer-events-none -z-10 animate-float-reverse">
            <StudioOrganicShape variant={2} color="#F2B9A0" opacity={0.22} className="w-full h-full" />
          </div>

          {/* 4. Lavender Atmospheric Sphere (Bottom Center) */}
          <div className="absolute bottom-10 right-1/3 w-[380px] h-[380px] bg-[#DCD9F5]/35 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* 5. Curved Decorative Wave Stroke */}
          <div className="absolute top-16 right-1/4 w-[360px] sm:w-[480px] pointer-events-none -z-10 hidden sm:block">
            <StudioCurvedLines stroke="#315BFF" opacity={0.35} />
          </div>

          {/* 6. Orbital Concentric Rings (Top Left) */}
          <div className="absolute top-24 left-10 pointer-events-none -z-10 opacity-60 hidden md:block">
            <StudioOrbitalRings size={110} stroke="#315BFF" opacity={0.3} />
          </div>

          {/* 7. Decorative Halftone Dot Grid */}
          <div className="absolute top-44 right-12 pointer-events-none -z-10 hidden lg:block">
            <StudioDotGrid cols={8} rows={4} fill="#315BFF" opacity={0.25} gap={14} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Top Micro Banner */}
            <div className="flex items-center justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-[#17243A]/10">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#315BFF] text-white font-label-sm text-xs font-bold shadow-xs">
                  W
                </span>
                <span className="font-label-md text-[11px] sm:text-xs tracking-wider uppercase text-[#17243A] font-bold">
                  WEBLY STUDIO / CREATIVE DIGITAL STUDIO
                </span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#17243A]/10 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#2EA875] animate-pulse" />
                <span className="font-label-md text-[10px] sm:text-xs uppercase tracking-wider text-[#17243A] font-bold">
                  AVAILABLE FOR PROJECTS
                </span>
              </div>
            </div>

            {/* Headline + Value Statement */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-gutter items-end mb-10 sm:mb-16">
              <div className="lg:col-span-9 relative">
                {/* Floating Architectural Crosshair Corner Accent */}
                <div className="absolute -top-5 left-0 text-[#315BFF]/60 hidden sm:block">
                  <StudioCrosshair size={16} stroke="#315BFF" />
                </div>

                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-[#315BFF] font-black block">
                    DIGITAL DESIGN &amp; DEVELOPMENT
                  </span>
                  <StudioStarburst size={14} fill="#F08075" className="animate-spin-slow" />
                </div>

                <h1 className="font-syne text-[36px] xs:text-[46px] sm:text-6xl md:text-7xl lg:text-[84px] font-black uppercase tracking-tight leading-[0.96] text-[#17243A] mb-4">
                  YOUR IDEAS.
                  <br />
                  <span className="text-[#315BFF]">OUR DIGITAL</span>
                  <br />
                  <span className="text-[#F08075] inline-flex items-baseline gap-2">
                    CANVAS.
                    <StudioStarburst size={28} fill="#315BFF" className="inline-block shrink-0 align-middle" />
                  </span>
                </h1>
              </div>

              <div className="lg:col-span-3 pb-2 flex flex-col justify-end">
                <p className="font-body-lg sm:font-body-xl text-slate-700 leading-relaxed mb-6 sm:mb-8 font-medium text-sm sm:text-base">
                  We design and build websites that make your brand stand out. From personal portfolios to ambitious online businesses.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3">
                  <a
                    className="min-h-[48px] px-6 py-3.5 rounded-full bg-[#17243A] text-white font-label-md text-xs xs:text-sm uppercase tracking-wider hover:bg-[#315BFF] transition-all shadow-md text-center font-bold flex items-center justify-center cursor-pointer"
                    href="#work"
                  >
                    Explore Work
                  </a>
                  <a
                    className="min-h-[48px] px-6 py-3.5 rounded-full bg-[#315BFF] text-white font-label-md text-xs xs:text-sm uppercase tracking-wider hover:bg-[#17243A] transition-all text-center font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    href="#offerings"
                  >
                    <span>View Offerings</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </div>

            {/* HERO VISUAL SHOWCASE */}
            {/* Mobile Showcase Card (< lg) */}
            <div className="lg:hidden w-full max-w-md mx-auto mt-4">
              <div className="rounded-2xl sm:rounded-3xl bg-white p-3 shadow-[0_8px_30px_rgba(23,36,58,0.08)] border border-[#17243A]/10 relative">
                {/* Floating Corner Starburst */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#315BFF] text-white flex items-center justify-center shadow-md">
                  <StudioStarburst size={16} fill="#FFFFFF" />
                </div>

                <div className="flex items-center justify-between px-3 py-2 border-b border-[#17243A]/10 mb-2.5">
                  <span className="text-[11px] font-mono text-[#17243A]/70 font-semibold">
                    webly.studio/showcase
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#315BFF]/10 text-[#315BFF] text-[10px] font-bold uppercase">
                    Concept Preview
                  </span>
                </div>

                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#F6F4EE]">
                  <Image
                    src="/stitch-images/stitch1_1.jpg"
                    alt="WEBLY Studio Editorial Flagship Showcase"
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>

                <div className="p-3 pt-3 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-syne text-sm uppercase text-[#17243A] font-bold block">
                      Atelier Monochrome
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Editorial Luxury Showcase
                    </span>
                  </div>
                  <a
                    href={getWhatsAppLink("Editorial Flagship")}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-full bg-[#17243A] text-white font-label-sm text-[11px] uppercase font-bold tracking-wider hover:bg-[#315BFF] transition-colors inline-flex items-center gap-1 shadow-xs"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>

            {/* Desktop Layered Composition (>= lg) */}
            <div className="hidden lg:block relative w-full max-w-7xl mx-auto mt-6">
              <div className="w-full rounded-2xl bg-white shadow-[0_12px_40px_rgba(23,36,58,0.06)] overflow-hidden border border-[#17243A]/10 relative">
                {/* Browser Header */}
                <div className="h-11 px-4 bg-[#FAF7F2] flex items-center justify-between border-b border-[#17243A]/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EC6A5E] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F4BF4F] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#61C554] inline-block" />
                  </div>
                  <div className="px-5 py-1 rounded-full bg-white text-[#17243A]/70 font-label-sm text-xs tracking-wide border border-[#17243A]/10 font-mono">
                    webly.studio/showcase/edition-25
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#315BFF]/10 text-[#315BFF] text-[10px] font-bold uppercase tracking-wider">
                      LIVE CONCEPT
                    </span>
                  </div>
                </div>

                {/* Mockup Canvas */}
                <div className="p-8 lg:p-12 bg-[#FAF7F2] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
                  {/* Subtle Background Pattern in Canvas */}
                  <div className="absolute inset-0 pattern-fine-grid-dense opacity-30 pointer-events-none" />

                  <div className="lg:col-span-7 space-y-5 relative z-10">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#17243A]/5 text-[#17243A] font-label-sm text-xs tracking-wider uppercase font-bold">
                        IDENTITY &amp; CODE
                      </span>
                      <span className="px-3 py-1 rounded-full bg-[#315BFF]/10 text-[#315BFF] font-label-sm text-xs tracking-wider uppercase font-bold">
                        FLAGSHIP MONOGRAPH
                      </span>
                    </div>
                    <h2 className="font-syne text-4xl lg:text-5xl uppercase text-[#17243A] tracking-tight leading-none font-extrabold">
                      MONOLITH &amp; FORM
                    </h2>
                    <p className="font-body-md text-base text-slate-600 max-w-lg leading-relaxed">
                      A spatial design monograph built with micro-interactions, responsive typography baselines, and uncompromising tactile contrast.
                    </p>
                    <div className="flex items-center gap-6 pt-2">
                      <a
                        href="#work"
                        className="font-label-md text-sm uppercase tracking-wider text-[#315BFF] font-bold underline underline-offset-4 hover:text-[#17243A] transition-colors"
                      >
                        Explore Curated Work
                      </a>
                      <span className="font-label-sm text-xs text-slate-500 tracking-wider uppercase font-bold">
                        CONCEPT PREVIEW
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 relative z-10">
                    <div className="rounded-xl overflow-hidden bg-[#17243A] p-6 text-white shadow-xl border border-white/10">
                      <div className="flex items-center justify-between pb-4 border-b border-white/10 text-white/70 font-label-sm text-xs tracking-widest uppercase">
                        <span>Viewport Manifest</span>
                        <span className="text-[#315BFF] font-bold">LIVE REPL</span>
                      </div>
                      <div className="pt-4 space-y-2 font-mono text-xs text-[#DCD9F5]">
                        <p>
                          <span className="text-[#F08075]">const</span> studio ={" "}
                          <span className="text-[#F6D77A]">&quot;WEBLY&quot;</span>;
                        </p>
                        <p>
                          <span className="text-[#F08075]">const</span> craft = &#123; precision:{" "}
                          <span className="text-[#BFE5D2]">1.0</span>, vibrant:{" "}
                          <span className="text-[#BFE5D2]">true</span> &#125;;
                        </p>
                        <p className="text-white/40">// Clean semantic architecture</p>
                        <p className="text-[#BFE5D2]">canvas.render(typography, spatialPhysics);</p>
                      </div>
                      <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                        <span className="text-[#F6D77A] font-bold">RESPONSIVE FLUID</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#315BFF] text-white font-label-sm text-[10px] font-bold">
                          SYNCHRONIZED
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 2: ABOUT / STUDIO PHILOSOPHY (LAVENDER WASH & COLOR BLOCKS)
            ==================================================================== */}
        <section className="relative w-full px-margin-mobile lg:px-margin py-16 sm:py-24 bg-[#F4F1FC] border-t border-[#17243A]/10 overflow-hidden" id="why-us">
          {/* Subtle Lavender Architectural Grid & Ambient Accents */}
          <div className="absolute inset-0 pattern-fine-grid opacity-40 pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#315BFF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#F2B9A0]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-[#315BFF] font-black block">
                    STUDIO PHILOSOPHY
                  </span>
                  <StudioCrosshair size={12} stroke="#315BFF" />
                </div>

                <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl uppercase font-extrabold text-[#17243A] leading-tight tracking-tight">
                  DESIGN THAT MAKES AN IMPRESSION.
                </h2>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[#17243A]/15 space-y-4">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-mono text-sm font-bold text-[#315BFF]">
                      01 /
                    </span>
                    <p className="font-body-md text-sm text-[#17243A] font-medium">
                      Precision-engineered layouts designed to command instant audience credibility.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-mono text-sm font-bold text-[#F08075]">
                      02 /
                    </span>
                    <p className="font-body-md text-sm text-[#17243A] font-medium">
                      Direct, senior-led execution without agency bureaucracy, slow handoffs, or bloated retainers.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span className="font-mono text-sm font-bold text-[#2EA875]">
                      03 /
                    </span>
                    <p className="font-body-md text-sm text-[#17243A] font-medium">
                      Uncompromising cross-device calibration ensuring flawless performance on mobile and desktop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 mt-8 lg:mt-0 space-y-6">
                <p className="font-body-lg sm:font-body-xl text-[#17243A]/85 leading-relaxed font-normal">
                  WEBLY was built to challenge generic templates and overpriced agency retainers. We craft digital flagships, monographs, portfolios, and celebration experiences with uncompromising dedication to typographic rhythm, tactile contrast, and responsive fluidity.
                </p>

                {/* 3 Coordinated Asymmetric Colour Block Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
                  {/* Card 1: Crisp White with Cobalt Border */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#17243A]/10 border-t-4 border-t-[#315BFF] shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#315BFF] font-bold block mb-1">
                      CRAFT STANDARD
                    </span>
                    <span className="font-syne text-lg sm:text-xl text-[#17243A] block font-extrabold">
                      100% BESPOKE
                    </span>
                    <span className="text-xs text-slate-500 mt-1 block">
                      Zero generic templates
                    </span>
                  </div>

                  {/* Card 2: Warm Peach Tint with Coral Top */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FDF2EC] border border-[#F2B9A0] border-t-4 border-t-[#F08075] shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#C44D42] font-bold block mb-1">
                      RESPONSIVENESS
                    </span>
                    <span className="font-syne text-lg sm:text-xl text-[#17243A] block font-extrabold">
                      MULTI-VIEW
                    </span>
                    <span className="text-xs text-slate-600 mt-1 block">
                      Calibrated for all devices
                    </span>
                  </div>

                  {/* Card 3: Fresh Mint Tint with Green Top */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#EDF7F2] border border-[#BFE5D2] border-t-4 border-t-[#2EA875] shadow-sm hover:shadow-md transition-shadow">
                    <span className="font-label-sm text-[10px] uppercase tracking-widest text-[#1B6D4B] font-bold block mb-1">
                      DELIVERY
                    </span>
                    <span className="font-syne text-lg sm:text-xl text-[#17243A] block font-extrabold">
                      DIRECT FLOW
                    </span>
                    <span className="text-xs text-slate-600 mt-1 block">
                      Clear timeline milestones
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 3: SELECTED WORK (CURATED ARCHIVE - WITH GRAPHIC ACCENTS)
            ==================================================================== */}
        <section className="relative w-full px-margin-mobile lg:px-margin py-16 sm:py-28 bg-[#FFF9EE] border-t border-[#17243A]/10 overflow-hidden" id="work">
          {/* Halftone Dot Pattern Overlay */}
          <div className="absolute inset-0 pattern-dots-navy opacity-30 pointer-events-none" />
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-[#315BFF]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-[#F2B9A0]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-[#17243A]/15">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-[#F08075] font-black block">
                    CURATED ARCHIVE
                  </span>
                  <StudioStarburst size={12} fill="#F08075" />
                </div>
                <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl uppercase font-black tracking-tight text-[#17243A]">
                  Selected Work.
                </h2>
              </div>
              <div className="flex items-center gap-2 mt-3 md:mt-0">
                <span className="px-3.5 py-1 rounded-full bg-white border border-[#17243A]/10 text-[#17243A] font-label-sm text-[11px] uppercase tracking-wider font-bold shadow-2xs">
                  4 STUDIO CONCEPT PREVIEWS
                </span>
              </div>
            </div>

            {/* 4 Clean Showcase Cards with Graphic Accents Around Them */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              
              {/* Project 1: Solaris Capital (Desktop Flagship - Spans 12 columns) */}
              <div className="lg:col-span-12 relative group">
                {/* Floating Architectural Crosshair Accents */}
                <div className="absolute -top-3 -left-3 text-[#315BFF] hidden sm:block">
                  <StudioCrosshair size={18} stroke="#315BFF" />
                </div>
                <div className="absolute -bottom-3 -right-3 text-[#315BFF] hidden sm:block">
                  <StudioCrosshair size={18} stroke="#315BFF" />
                </div>

                <div className="flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-[#17243A]/12 overflow-hidden shadow-[0_8px_30px_rgba(23,36,58,0.06)] hover:shadow-[0_16px_40px_rgba(49,91,255,0.12)] transition-all duration-300 hover:-translate-y-1">
                  {/* Status Chip */}
                  <div className="h-12 px-5 bg-white flex items-center justify-between border-b border-[#17243A]/8">
                    <a
                      href="https://solaris-capital.com"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[#17243A]/80 hover:text-[#315BFF] transition-colors font-semibold"
                    >
                      <span>solaris-capital.com</span>
                      <ExternalLink size={12} className="text-[#315BFF]" />
                    </a>
                    <span className="px-3 py-1 rounded-full bg-[#315BFF]/10 border border-[#315BFF]/20 font-label-sm text-[10px] uppercase font-bold tracking-wider text-[#315BFF]">
                      Corporate Flagship
                    </span>
                  </div>

                  {/* Artwork Viewport */}
                  <div className="relative w-full aspect-[16/10] sm:aspect-[2/1] lg:aspect-[2.3/1] bg-[#F6F4EE] overflow-hidden">
                    <Image
                      src="/stitch-images/stitch1_2.jpg"
                      alt="Solaris Capital Venture live desktop showcase"
                      fill
                      quality={90}
                      priority
                      sizes="(max-width: 1024px) 100vw, 1280px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 sm:p-6 bg-white flex flex-col justify-between gap-4 border-t border-[#17243A]/8">
                    <div>
                      <h3 className="font-syne text-lg sm:text-xl uppercase font-bold text-[#17243A] tracking-tight mb-1.5">
                        Solaris Capital Venture
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        High-trust corporate infrastructure designed for next-gen climate asset managers with structured data metrics.
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#17243A]/8 flex items-center justify-between gap-3">
                      <span className="font-mono text-xs text-[#17243A]/70 font-medium">
                        Desktop • 1440×900
                      </span>
                      <a
                        href={getWhatsAppLink("Solaris Capital Venture (Corporate Flagship)")}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full px-5 py-2.5 text-xs font-bold bg-[#17243A] text-white hover:bg-[#315BFF] transition-all inline-flex items-center gap-1.5 shadow-sm cursor-pointer shrink-0"
                      >
                        <span>Inquire Design</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects 2, 3, 4: Mobile Concepts (4 Columns each on Desktop) */}
              {portfolioProjects.slice(1).map((project, idx) => (
                <div
                  key={project.id}
                  className="lg:col-span-4 relative group"
                >
                  <div className="flex flex-col rounded-2xl sm:rounded-3xl bg-white border border-[#17243A]/12 overflow-hidden shadow-[0_8px_30px_rgba(23,36,58,0.06)] hover:shadow-[0_16px_40px_rgba(23,36,58,0.12)] transition-all duration-300 hover:-translate-y-1 h-full">
                    {/* Status Chip */}
                    <div className="h-12 px-4 bg-white flex items-center justify-between border-b border-[#17243A]/8">
                      <a
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs text-[#17243A]/80 hover:text-[#315BFF] transition-colors font-semibold truncate max-w-[170px]"
                      >
                        <span className="truncate">{project.url}</span>
                        <ExternalLink size={12} className="text-[#315BFF] shrink-0" />
                      </a>
                      <span className={`px-2.5 py-0.5 rounded-full font-label-sm text-[10px] uppercase font-bold tracking-wider ${project.categoryBadge} shrink-0`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Artwork Viewport */}
                    <div className="relative w-full aspect-[4/5] bg-[#F6F4EE] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.title} concept preview`}
                        fill
                        quality={90}
                        priority={idx < 1}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    {/* Card Footer */}
                    <div className="p-5 sm:p-6 bg-white flex flex-col justify-between gap-4 border-t border-[#17243A]/8 flex-1">
                      <div>
                        <h3 className="font-syne text-base sm:text-lg uppercase font-bold text-[#17243A] tracking-tight mb-1.5">
                          {project.title}
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#17243A]/8 flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] text-[#17243A]/70 font-medium">
                          {project.deviceTag}
                        </span>
                        <a
                          href={getWhatsAppLink(project.serviceEnquiry)}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-full px-4 py-2 text-xs font-bold bg-[#17243A] text-white hover:bg-[#315BFF] transition-all inline-flex items-center gap-1 shadow-sm cursor-pointer shrink-0"
                        >
                          <span>Inquire</span>
                          <ArrowUpRight size={13} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 4: OFFERINGS & INVESTMENT (BUTTER-CREAM TINT & DISTINCT CARDS)
            ==================================================================== */}
        <section className="relative w-full px-margin-mobile lg:px-margin py-16 sm:py-28 bg-[#FEFAED] border-t border-[#17243A]/10 overflow-hidden" id="offerings">
          {/* Backwards compatibility anchors */}
          <div id="services" className="relative -top-24 pointer-events-none" />
          <div id="pricing" className="relative -top-24 pointer-events-none" />

          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 pattern-fine-grid opacity-40 pointer-events-none" />
          <div className="absolute top-1/3 -right-20 w-80 h-80 bg-[#F6D77A]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -left-20 w-80 h-80 bg-[#315BFF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 pb-4 sm:pb-6 border-b border-[#17243A]/15">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-[#315BFF] font-black block">
                    OFFERINGS &amp; INVESTMENT
                  </span>
                  <StudioStarburst size={12} fill="#315BFF" />
                </div>
                <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl uppercase font-black tracking-tight text-[#17243A]">
                  Simple pricing. Clear choices.
                </h2>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5 mt-3 md:mt-0">
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm font-medium">
                  Transparent fixed rates without retainers. Bespoke engineering with zero hidden surcharges.
                </p>
                <Link
                  href="/pricing"
                  className="font-label-md text-xs sm:text-sm text-[#315BFF] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>View Full Deliverables Matrix</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Interactive Category Toggle Tabs */}
            <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
              <button
                type="button"
                onClick={() => setActiveTab("commercial")}
                className={`px-4 py-2.5 rounded-full font-label-md text-xs uppercase tracking-wider transition-all font-bold cursor-pointer whitespace-nowrap shadow-2xs ${
                  activeTab === "commercial"
                    ? "bg-[#315BFF] text-white shadow-sm"
                    : "bg-white text-[#17243A]/80 hover:bg-[#17243A]/5 border border-[#17243A]/10"
                }`}
              >
                Commercial &amp; Brands (4)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("personal")}
                className={`px-4 py-2.5 rounded-full font-label-md text-xs uppercase tracking-wider transition-all font-bold cursor-pointer whitespace-nowrap shadow-2xs ${
                  activeTab === "personal"
                    ? "bg-[#7A6CD9] text-white shadow-sm"
                    : "bg-white text-[#17243A]/80 hover:bg-[#17243A]/5 border border-[#17243A]/10"
                }`}
              >
                Personal &amp; Portfolios (2)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("bespoke")}
                className={`px-4 py-2.5 rounded-full font-label-md text-xs uppercase tracking-wider transition-all font-bold cursor-pointer whitespace-nowrap shadow-2xs ${
                  activeTab === "bespoke"
                    ? "bg-[#F08075] text-white shadow-sm"
                    : "bg-white text-[#17243A]/80 hover:bg-[#17243A]/5 border border-[#17243A]/10"
                }`}
              >
                Events &amp; Bespoke (2)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2.5 rounded-full font-label-md text-xs uppercase tracking-wider transition-all font-bold cursor-pointer whitespace-nowrap shadow-2xs ${
                  activeTab === "all"
                    ? "bg-[#17243A] text-white shadow-sm"
                    : "bg-white text-[#17243A]/80 hover:bg-[#17243A]/5 border border-[#17243A]/10"
                }`}
              >
                All Packages (8)
              </button>
            </div>

            {/* Distinctive Multi-Colored Offerings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {filteredOfferings.map((item) => {
                const IconComponent = item.icon;
                const isCustomQuote = item.price === "CUSTOM QUOTE";

                return (
                  <div
                    key={item.id}
                    className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl flex flex-col justify-between transition-all duration-300 relative shadow-sm hover:shadow-xl hover:-translate-y-1 ${item.cardTheme}`}
                  >
                    <div>
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`font-label-sm text-[10px] uppercase tracking-wider font-bold px-2.5 py-0.5 rounded-full ${item.badgeTheme}`}
                        >
                          {item.badge}
                        </span>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {item.tierNumber}
                        </span>
                      </div>

                      {/* Package Title */}
                      <h3
                        className={`font-syne text-lg uppercase mb-2 font-extrabold tracking-tight ${
                          item.isDark ? "text-white" : "text-[#17243A]"
                        }`}
                      >
                        {item.title}
                      </h3>

                      {/* 2-line Summary */}
                      <p
                        className={`text-xs sm:text-sm line-clamp-2 leading-relaxed mb-5 ${
                          item.isDark ? "text-[#DCD9F5]/90" : "text-slate-600"
                        }`}
                      >
                        {item.summary}
                      </p>

                      {/* Transparent Price Row */}
                      <div
                        className={`flex items-baseline gap-1.5 mb-5 pb-5 border-b ${
                          item.isDark ? "border-white/15" : "border-[#17243A]/10"
                        }`}
                      >
                        <span
                          className={`font-syne text-2xl xs:text-3xl font-black tracking-tight ${item.priceColor}`}
                        >
                          {item.price}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase font-semibold ${
                            item.isDark ? "text-[#DCD9F5]/80" : "text-slate-500"
                          }`}
                        >
                          / {item.priceLabel}
                        </span>
                      </div>

                      {/* 3 Deliverables */}
                      <ul className="space-y-2.5 text-xs mb-8">
                        {item.deliverables.map((deliverable, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <Check
                              size={14}
                              className={`shrink-0 mt-0.5 ${
                                item.isDark ? "text-[#DCD9F5]" : item.priceColor
                              }`}
                            />
                            <span
                              className={`font-medium ${
                                item.isDark ? "text-[#FFF9EE]" : "text-slate-700"
                              }`}
                            >
                              {deliverable}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <a
                      className={`w-full py-3.5 rounded-full text-center font-label-md text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 font-bold shadow-xs cursor-pointer ${item.btnTheme}`}
                      href={getWhatsAppLink(item.title, item.price)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        {isCustomQuote ? "Request Custom Scope" : "Start Project"}
                      </span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 5: FLAGSHIP MONOGRAPH / GOOD DESIGN BREAK (DEEP NAVY CONTRAST)
            ==================================================================== */}
        <section className="relative w-full px-margin-mobile lg:px-margin py-20 sm:py-28 bg-[#17243A] text-white overflow-hidden">
          {/* Architectural Grid & Colorful Glows on Navy */}
          <div className="absolute inset-0 pattern-fine-grid-navy opacity-30 pointer-events-none" />
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#315BFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#F08075]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16 pb-6 border-b border-white/15">
              <div className="lg:col-span-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-label-sm text-xs uppercase tracking-widest text-[#F08075] font-black block">
                    CRAFT PHILOSOPHY
                  </span>
                  <StudioCrosshair size={12} stroke="#F08075" />
                </div>
                <h2 className="font-syne text-3xl xs:text-4xl sm:text-5xl lg:text-6xl uppercase font-black tracking-tight leading-[0.98]">
                  GOOD DESIGN.
                  <br />
                  <span className="text-[#315BFF]">BETTER EXPERIENCES.</span>
                </h2>
              </div>
              <div className="lg:col-span-6 pt-2 sm:pt-4">
                <p className="font-body-lg sm:font-body-xl text-[#DCD9F5] leading-relaxed">
                  We operate at the nexus of intentional craft and modern web engineering. Every project is anchored by uncompromising attention to detail, transparent collaboration, and direct accessibility.
                </p>
              </div>
            </div>

            {/* Highlighting Pillars on Navy */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Pillar 1 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#315BFF]/60 transition-all flex flex-col justify-between shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#315BFF]/20 border border-[#315BFF]/40 flex items-center justify-center text-[#315BFF] mb-4 shadow-sm">
                  <Palette size={22} />
                </div>
                <div>
                  <h3 className="font-syne text-base sm:text-lg uppercase text-white mb-2 font-bold">
                    Custom Design
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-[#DCD9F5]/80 leading-relaxed">
                    Every typeface choice, grid partition, and motion curve is tailored exclusively to match your precise brand temperament.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F08075]/60 transition-all flex flex-col justify-between shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#F08075]/20 border border-[#F08075]/40 flex items-center justify-center text-[#F08075] mb-4 shadow-sm">
                  <Laptop size={22} />
                </div>
                <div>
                  <h3 className="font-syne text-base sm:text-lg uppercase text-white mb-2 font-bold">
                    Responsive Dev
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-[#DCD9F5]/80 leading-relaxed">
                    Pixel-level calibration across mobile phones, tablets, high-res laptops, and ultrawide desktop monitors.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#BFE5D2]/60 transition-all flex flex-col justify-between shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#BFE5D2]/20 border border-[#BFE5D2]/40 flex items-center justify-center text-[#BFE5D2] mb-4 shadow-sm">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="font-syne text-base sm:text-lg uppercase text-white mb-2 font-bold">
                    Clear Communication
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-[#DCD9F5]/80 leading-relaxed">
                    Direct access via WhatsApp and email. Transparent milestone checkpoints without agency layers or jargon.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F6D77A]/60 transition-all flex flex-col justify-between shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#F6D77A]/20 border border-[#F6D77A]/40 flex items-center justify-center text-[#F6D77A] mb-4 shadow-sm">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="font-syne text-base sm:text-lg uppercase text-white mb-2 font-bold">
                    Attention to Detail
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-[#DCD9F5]/80 leading-relaxed">
                    From micro-spacing to instant font loading, every technical facet is verified before handoff.
                  </p>
                </div>
              </div>

              {/* Pillar 5 */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#DCD9F5]/60 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2 shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#DCD9F5]/20 border border-[#DCD9F5]/40 flex items-center justify-center text-[#DCD9F5] mb-4 shadow-sm">
                  <Sparkles size={22} />
                </div>
                <div>
                  <h3 className="font-syne text-base sm:text-lg uppercase text-white mb-2 font-bold">
                    User-Friendly Experiences
                  </h3>
                  <p className="font-body-md text-xs sm:text-sm text-[#DCD9F5]/80 leading-relaxed max-w-2xl">
                    We design with your visitors in mind—intuitive navigation hierarchies, instant page loads, and effortless calls to action that make interacting with your business second nature.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 6: METHODOLOGY / PROCESS (FRESH MINT BACKGROUND)
            ==================================================================== */}
        <section className="w-full px-margin-mobile lg:px-margin py-16 sm:py-24 bg-[#EDF7F2] border-t border-[#17243A]/10 overflow-hidden" id="methodology">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-[#17243A]/15">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#2EA875] font-black mb-2 block">
                METHODOLOGY
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl lg:text-5xl uppercase font-black tracking-tight text-[#17243A]">
                Our Process.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Step 1 */}
              <div className="flex flex-col p-6 rounded-2xl bg-white border border-[#17243A]/10 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#17243A]/10">
                  <span className="font-syne text-2xl text-[#315BFF] font-black">
                    01
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#315BFF]/10 text-[11px] font-bold uppercase text-[#315BFF]">
                    PHASE ONE
                  </span>
                </div>
                <h3 className="font-syne text-base uppercase text-[#17243A] mb-2 font-bold">
                  Discover
                </h3>
                <p className="font-body-md text-xs text-slate-600 leading-relaxed mb-6">
                  Extracting your project goals, audience profiles, and content references through direct consultation.
                </p>
                <div className="mt-auto pt-3 border-t border-[#17243A]/5 text-[10px] font-mono text-slate-500 uppercase font-bold">
                  DELIVERABLE: CREATIVE BRIEF &amp; MAP
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col p-6 rounded-2xl bg-white border border-[#17243A]/10 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#17243A]/10">
                  <span className="font-syne text-2xl text-[#7A6CD9] font-black">
                    02
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#7A6CD9]/15 text-[11px] font-bold uppercase text-[#5B4DBF]">
                    PHASE TWO
                  </span>
                </div>
                <h3 className="font-syne text-base uppercase text-[#17243A] mb-2 font-bold">
                  Design
                </h3>
                <p className="font-body-md text-xs text-slate-600 leading-relaxed mb-6">
                  Desktop and mobile mockups showing typographical scales, micro-interactions, and spatial layouts.
                </p>
                <div className="mt-auto pt-3 border-t border-[#17243A]/5 text-[10px] font-mono text-slate-500 uppercase font-bold">
                  DELIVERABLE: DESIGN PROTOTYPE
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col p-6 rounded-2xl bg-white border border-[#17243A]/10 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#17243A]/10">
                  <span className="font-syne text-2xl text-[#2EA875] font-black">
                    03
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#2EA875]/15 text-[11px] font-bold uppercase text-[#1B6D4B]">
                    PHASE THREE
                  </span>
                </div>
                <h3 className="font-syne text-base uppercase text-[#17243A] mb-2 font-bold">
                  Develop
                </h3>
                <p className="font-body-md text-xs text-slate-600 leading-relaxed mb-6">
                  Converting approved designs into lightweight, secure, accessible, and fast web code with cross-device calibration.
                </p>
                <div className="mt-auto pt-3 border-t border-[#17243A]/5 text-[10px] font-mono text-slate-500 uppercase font-bold">
                  DELIVERABLE: STAGING SERVER DEPLOYMENT
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col p-6 rounded-2xl bg-white border border-[#17243A]/10 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#17243A]/10">
                  <span className="font-syne text-2xl text-[#E5B834] font-black">
                    04
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#F6D77A]/30 text-[11px] font-bold uppercase text-[#8C6D0A]">
                    PHASE FOUR
                  </span>
                </div>
                <h3 className="font-syne text-base uppercase text-[#17243A] mb-2 font-bold">
                  Launch
                </h3>
                <p className="font-body-md text-xs text-slate-600 leading-relaxed mb-6">
                  Domain linkage, SSL verification, SEO optimization, and client walkthrough to guarantee total operational autonomy.
                </p>
                <div className="mt-auto pt-3 border-t border-[#17243A]/5 text-[10px] font-mono text-slate-500 uppercase font-bold">
                  DELIVERABLE: LIVE WEB ADDRESS &amp; ASSETS
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 7: FREQUENTLY ASKED QUESTIONS (SOFT LAVENDER/CREAM)
            ==================================================================== */}
        <section className="w-full px-margin-mobile lg:px-margin py-16 sm:py-24 bg-[#F7F5FC] border-t border-[#17243A]/10" id="faq">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 sm:mb-14 pb-4 sm:pb-6 border-b border-[#17243A]/10 text-center">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#315BFF] font-black mb-2 block">
                INQUIRIES
              </span>
              <h2 className="font-syne text-3xl sm:text-4xl uppercase font-black tracking-tight text-[#17243A]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {faqData.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl bg-white border border-[#17243A]/10 p-5 sm:p-6 transition-all shadow-xs hover:shadow-md"
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between text-left font-syne text-sm sm:text-base uppercase text-[#17243A] focus:outline-none cursor-pointer font-bold group"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{item.q}</span>
                      <ChevronDown
                        size={20}
                        className={`text-[#315BFF] shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Smooth height transition container */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-4 mt-4 border-t border-[#17243A]/10 text-slate-600 font-body-md text-xs sm:text-sm leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECTION 8: FINAL CTA (DEEP NAVY FLAGSHIP FINALE)
            ==================================================================== */}
        <section className="w-full px-margin-mobile lg:px-margin py-20 sm:py-32 bg-[#17243A] text-white relative overflow-hidden" id="contact">
          {/* Ambient Lighting & Abstract Vector Shapes on Navy */}
          <div className="absolute inset-0 pattern-fine-grid-navy opacity-30 pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#315BFF]/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#F08075]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-[#DCD9F5]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Floating Crosshair Accents */}
          <div className="absolute top-12 left-12 text-[#315BFF]/50 hidden sm:block">
            <StudioCrosshair size={20} stroke="#315BFF" />
          </div>
          <div className="absolute bottom-12 right-12 text-[#F08075]/50 hidden sm:block">
            <StudioCrosshair size={20} stroke="#F08075" />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 px-2">
            <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
              <span className="font-label-sm text-xs uppercase tracking-widest text-[#F08075] font-black">
                READY TO COMMENCE?
              </span>
              <StudioStarburst size={14} fill="#F08075" />
            </div>

            <h2 className="text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase text-white tracking-tight leading-[1.08] mb-6 sm:mb-8 font-syne">
              LET&apos;S MAKE
              <br />
              <span className="text-[#315BFF]">SOMETHING</span>{" "}
              <span className="text-[#F08075]">GREAT.</span>
            </h2>

            <p className="font-body-lg sm:font-body-xl text-[#DCD9F5] max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Whether launching an enterprise business portal, crafting a distinctive portfolio, or celebrating a milestone, we are ready to build it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <a
                className="w-full sm:w-auto min-h-[48px] px-8 sm:px-10 py-4 rounded-full bg-[#315BFF] hover:bg-white hover:text-[#17243A] text-white font-label-md text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-xl inline-flex items-center justify-center gap-2 cursor-pointer"
                href="https://wa.me/916379290968?text=Hello%20Webly%20Studio,%20I%20am%20ready%20to%20start%20my%20project."
                target="_blank"
                rel="noreferrer"
              >
                <span>Start Your Project</span>
                <ArrowRight size={16} />
              </a>
              <a
                className="w-full sm:w-auto min-h-[48px] px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-md text-xs sm:text-sm uppercase tracking-wider transition-all inline-flex items-center justify-center font-semibold cursor-pointer border border-white/20"
                href="mailto:webly.studioservice@gmail.com"
              >
                Transmit Email Direct
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Global Brand Footer */}
      <BrandFooter />

      {/* 4. Sleek Floating Glass Pill Dock for Mobile Navigation */}
      <MobileBottomNav />
    </div>
  );
}

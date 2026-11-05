"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";

interface NavbarProps {
  activePage?: "home" | "pricing";
}

const WHATSAPP_URL = "https://wa.me/916379290968?text=Hello%20Webly%20Studio,%20I%20would%20like%20to%20start%20a%20project.";

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-primary-container/15">
        <div className="flex items-center justify-between px-3 xs:px-4 sm:px-margin-mobile lg:px-margin h-16 sm:h-20 max-w-7xl mx-auto">
          {/* Actual WEBLY Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/webly-logo-navy.png"
              alt="WEBLY"
              width={140}
              height={44}
              priority
              className="h-6 xs:h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-space-lg">
            <Link
              href="/"
              className={`font-label-md text-label-md uppercase tracking-wider transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container after:transition-transform ${
                activePage === "home"
                  ? "text-primary-container font-semibold after:scale-x-100"
                  : "text-on-surface-variant hover:text-primary-container after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              Home
            </Link>
            <a
              href="/#offerings"
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary-container transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Offerings
            </a>
            <a
              href="/#work"
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary-container transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Work
            </a>
            <Link
              href="/pricing"
              className={`font-label-md text-label-md uppercase tracking-wider transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container after:transition-transform ${
                activePage === "pricing"
                  ? "text-primary-container font-semibold after:scale-x-100"
                  : "text-on-surface-variant hover:text-primary-container after:scale-x-0 hover:after:scale-x-100"
              }`}
            >
              Pricing
            </Link>
            <a
              href="/#why-us"
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary-container transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              About
            </a>
            <a
              href="/#contact"
              className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary-container transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-secondary-container after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              Contact
            </a>
          </nav>

          {/* Action Group */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              className="px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full bg-[#315BFF] text-white font-label-md text-xs sm:text-label-md uppercase tracking-wider hover:bg-[#17243A] transition-all shadow-md font-semibold whitespace-nowrap inline-flex items-center gap-1.5 cursor-pointer"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={13} className="shrink-0 text-white sm:hidden" />
              <span className="hidden xs:inline">Start a Project</span>
              <span className="xs:hidden">Start</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-primary-container/15 bg-surface-container text-primary-container transition hover:bg-surface-container-high focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-40 bg-surface/98 backdrop-blur-2xl border-b border-primary-container/15 px-6 py-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2 font-headline-sm text-primary-container uppercase">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-primary-container/10 text-base font-bold"
            >
              <span>Home</span>
              <ArrowUpRight size={18} className="text-secondary-container" />
            </Link>
            <a
              href="/#offerings"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-primary-container/10 text-base font-bold"
            >
              <span>Offerings &amp; Pricing</span>
              <ArrowUpRight size={18} className="text-secondary-container" />
            </a>
            <a
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-primary-container/10 text-base font-bold"
            >
              <span>Selected Work</span>
              <ArrowUpRight size={18} className="text-secondary-container" />
            </a>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-primary-container/10 text-base font-bold"
            >
              <span>Pricing (Rate Card)</span>
              <ArrowUpRight size={18} className="text-secondary-container" />
            </Link>
            <a
              href="/#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-primary-container/10 text-base font-bold"
            >
              <span>Why WEBLY</span>
              <ArrowUpRight size={18} className="text-secondary-container" />
            </a>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-primary-container/10 text-base font-bold"
            >
              <span>Contact</span>
              <ArrowUpRight size={18} className="text-secondary-container" />
            </a>
          </nav>

          <div className="pt-6 pb-20 space-y-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 rounded-full bg-[#315BFF] text-white font-label-md text-label-md uppercase tracking-wider hover:bg-[#17243A] transition-all block font-bold shadow-md cursor-pointer"
            >
              Start a Project via WhatsApp
            </a>
            <p className="text-center font-body-md text-xs text-on-surface-variant">
              Direct response • No automated bots
            </p>
          </div>
        </div>
      )}
    </>
  );
}

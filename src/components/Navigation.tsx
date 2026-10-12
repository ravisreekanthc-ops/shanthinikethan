"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  ShieldCheck,
  UserCheck,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Sparkles,
  ExternalLink,
  BookOpen,
  Award,
  Compass,
  FileText,
} from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [academicsDropdown, setAcademicsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleAcademicClick = (stageId: string) => {
    setAcademicsDropdown(false);
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("select-academic-stage", { detail: stageId }));
      const elem = document.getElementById("academics");
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = `/#academics`;
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Top Regulatory & Utility Bar */}
      <div className="bg-navy-900 text-slate-200 text-xs py-1.5 px-3 sm:px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Regulatory Badges */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-navy-800/80 text-gold-400 font-semibold border border-gold-500/20 text-[11px] sm:text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>CBSE Affiliation: 130730</span>
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">Code: 57222</span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">Nandyal, AP</span>
          </div>

          {/* Quick Contact & Portals */}
          <div className="flex items-center gap-2 sm:gap-4 text-xs font-medium">
            <a
              href="tel:+919063966896"
              className="inline-flex items-center gap-1 text-slate-200 hover:text-gold-400 transition-colors text-[11px] sm:text-xs font-bold bg-navy-800/60 sm:bg-transparent px-2.5 py-1 sm:px-0 rounded-full min-h-[32px]"
              aria-label="Direct Admission Hotline: +91 90639 66896"
            >
              <Phone className="w-3 h-3 text-gold-400 shrink-0" />
              <span>+91 90639 66896</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="mailto:info@srishantiniketancbse.com"
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-gold-400" />
              <span>info@srishantiniketancbse.com</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="https://www.facebook.com/shantiniketancbsendl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white bg-blue-600/30 hover:bg-blue-600/50 px-2 sm:px-2.5 py-1 rounded-full border border-blue-500/30 transition-all text-[11px] sm:text-xs font-semibold"
              aria-label="Official Facebook Page: @shantiniketancbsendl"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a
              href="#parent-portal"
              className="hidden sm:inline-flex items-center gap-1 text-gold-300 hover:text-gold-200 bg-gold-600/20 px-2.5 py-0.5 rounded-full border border-gold-500/30 transition-all text-xs"
            >
              <UserCheck className="w-3 h-3" />
              <span>Portal</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Primary Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "glass-panel shadow-glass py-3 border-b border-slate-200/60"
            : "bg-white/95 backdrop-blur-md py-4 border-b border-slate-100"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity / Emblem */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white flex items-center justify-center p-0.5 shadow-md border border-slate-200/80 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/images/slogo2.png"
                alt="Sri Shantiniketan CBSE School Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-navy-900 group-hover:text-navy-800 transition-colors font-display">
                SRI SHANTINIKETAN
              </span>
              <span className="text-[11px] font-semibold text-gold-700 uppercase tracking-widest -mt-0.5">
                CBSE School • Nandyal
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <Link
              href="/#about"
              className="text-sm font-semibold text-slate-700 hover:text-navy-900 transition-colors"
            >
              About Us
            </Link>

            {/* Academics Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAcademicsDropdown(true)}
              onMouseLeave={() => setAcademicsDropdown(false)}
            >
              <button
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-navy-900 transition-colors py-2"
                aria-expanded={academicsDropdown}
                onClick={() => setAcademicsDropdown(!academicsDropdown)}
              >
                <span>Academics</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${academicsDropdown ? "rotate-180" : ""}`} />
              </button>

              {academicsDropdown && (
                <div className="absolute top-full left-0 w-80 glass-panel rounded-2xl shadow-xl border border-slate-200/80 p-3 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-2 duration-200">
                  <button
                    onClick={() => handleAcademicClick("early")}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100/90 text-left transition-colors w-full"
                  >
                    <BookOpen className="w-4 h-4 text-gold-600 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-navy-900">Pre-Primary & Foundation</div>
                      <div className="text-[11px] text-slate-500">Playway & Montessori (Pre-KG to UKG)</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleAcademicClick("primary")}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-100/90 text-left transition-colors w-full"
                  >
                    <Award className="w-4 h-4 text-navy-800 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-navy-900">Primary School</div>
                      <div className="text-[11px] text-slate-500">Grades 1 to 5 Foundational Literacy & Math</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleAcademicClick("middle")}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-indigo-50/70 border border-indigo-200/50 text-left transition-colors w-full"
                  >
                    <Compass className="w-4 h-4 text-indigo-700 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-indigo-950">Middle School</div>
                      <div className="text-[11px] text-indigo-700">Grades 6 to 8 Analytical Thinking & Coding</div>
                    </div>
                  </button>
                  <button
                    onClick={() => handleAcademicClick("secondary")}
                    className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-amber-50/80 border border-gold-500/30 text-left transition-colors w-full"
                  >
                    <Sparkles className="w-4 h-4 text-gold-600 mt-1 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-gold-900">Secondary & IIT-JEE Foundation</div>
                      <div className="text-[11px] text-amber-700">Class 9 & 10 Advanced STEM & Coaching</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/#events"
              className="text-sm font-semibold text-slate-700 hover:text-navy-900 transition-colors"
            >
              Events
            </Link>

            <Link
              href="/#gallery"
              className="text-sm font-semibold text-slate-700 hover:text-navy-900 transition-colors"
            >
              Gallery
            </Link>

            <Link
              href="/#videos"
              className="text-sm font-semibold text-slate-700 hover:text-navy-900 transition-colors"
            >
              Videos
            </Link>

            {/* CBSE Mandatory Disclosure Direct Link */}
            <Link
              href="/mandatory-disclosure"
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-100 text-navy-900 hover:bg-slate-200 border border-slate-300/80 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-navy-700" />
              <span>Mandatory Disclosure</span>
            </Link>

            <Link
              href="/#contact"
              className="text-sm font-semibold text-slate-700 hover:text-navy-900 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/#admissions"
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 shadow-md hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Admissions 2026-27 Open
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button with 44px touch target */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl text-navy-900 hover:bg-slate-100 active:scale-95 transition-all"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 3. Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full h-[calc(100vh-100%)] bg-navy-950/60 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="bg-white border-b border-slate-200 px-5 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-250 pb-20">
            <div className="flex flex-col space-y-2">
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 min-h-[44px] flex items-center px-2 rounded-xl active:bg-slate-50 transition-colors"
              >
                About Sri Shantiniketan
              </Link>

              {/* Mobile Academic Stage Links */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block px-1">
                  Academic Stages
                </span>
                <button
                  onClick={() => handleAcademicClick("early")}
                  className="w-full text-left text-xs font-bold text-navy-900 hover:text-gold-600 min-h-[44px] px-2.5 py-2 rounded-xl flex items-center justify-between active:bg-slate-200/60 transition-colors"
                >
                  <span>Pre-Primary & Foundation</span>
                  <span className="text-[10px] text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">Nursery-UKG</span>
                </button>
                <button
                  onClick={() => handleAcademicClick("primary")}
                  className="w-full text-left text-xs font-bold text-navy-900 hover:text-gold-600 min-h-[44px] px-2.5 py-2 rounded-xl flex items-center justify-between active:bg-slate-200/60 transition-colors"
                >
                  <span>Primary School</span>
                  <span className="text-[10px] text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">Grades 1-5</span>
                </button>
                <button
                  onClick={() => handleAcademicClick("middle")}
                  className="w-full text-left text-xs font-bold text-indigo-950 hover:text-indigo-700 min-h-[44px] flex items-center justify-between bg-indigo-50/70 px-2.5 py-2 rounded-xl border border-indigo-200/50 active:bg-indigo-100 transition-colors"
                >
                  <span>Middle School (Coding & STEM)</span>
                  <span className="text-[10px] font-semibold text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">Grades 6-8</span>
                </button>
                <button
                  onClick={() => handleAcademicClick("secondary")}
                  className="w-full text-left text-xs font-bold text-gold-950 bg-gold-50/90 px-2.5 py-2 rounded-xl border border-gold-300 min-h-[44px] flex items-center justify-between active:bg-gold-100 transition-colors"
                >
                  <span>Secondary & IIT-JEE Foundation</span>
                  <span className="text-[10px] font-semibold text-gold-800 bg-white px-2 py-0.5 rounded border border-gold-200">Class 9-10</span>
                </button>
              </div>

              <Link
                href="/#events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 min-h-[44px] flex items-center px-2 rounded-xl active:bg-slate-50 transition-colors"
              >
                School Events (ISRO, Science Congress)
              </Link>
              <Link
                href="/#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 min-h-[44px] flex items-center px-2 rounded-xl active:bg-slate-50 transition-colors"
              >
                Campus & Robotics Gallery
              </Link>
              <Link
                href="/#videos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 min-h-[44px] flex items-center px-2 rounded-xl active:bg-slate-50 transition-colors"
              >
                Official YouTube Videos
              </Link>
              <Link
                href="/mandatory-disclosure"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-gold-800 bg-gold-50/90 p-3 rounded-xl border border-gold-300 flex items-center justify-between active:bg-gold-100 transition-colors min-h-[44px]"
              >
                <span>CBSE Mandatory Disclosure (OASIS)</span>
                <ExternalLink className="w-4 h-4 text-gold-700" />
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 min-h-[44px] flex items-center px-2 rounded-xl active:bg-slate-50 transition-colors"
              >
                Contact & Campus Location
              </Link>
              <a
                href="https://www.facebook.com/shantiniketancbsendl/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold text-blue-700 bg-blue-50/90 p-3 rounded-xl border border-blue-200 flex items-center justify-between active:bg-blue-100 transition-colors min-h-[44px]"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Official Facebook Page (@shantiniketancbsendl)
                </span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </a>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link
                href="/#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center min-h-[48px] rounded-xl font-bold text-sm uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-amber-500 shadow-md active:scale-95 transition-transform"
              >
                Apply for Admission 2026-27
              </Link>
              <a
                href="tel:+919063966896"
                className="w-full flex items-center justify-center gap-2 min-h-[48px] rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 border border-slate-200 active:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-gold-600" />
                Call Admissions: +91 90639 66896
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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
      <div className="bg-navy-900 text-slate-200 text-xs py-2 px-4 border-b border-navy-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          {/* Regulatory Badges */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-navy-800/80 text-gold-400 font-semibold border border-gold-500/20">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              CBSE Affiliation No: 130730
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">School Code: 57222</span>
            <span className="hidden md:inline text-slate-400">|</span>
            <span className="hidden md:inline text-slate-300">Nandyal, Andhra Pradesh</span>
          </div>

          {/* Quick Contact & Portals */}
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="tel:+919063966896"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors"
              aria-label="Direct Admission Hotline: +91 90639 66896"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>+91 90639 66896</span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="mailto:info@srishantiniketancbse.com"
              className="hidden lg:inline-flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-gold-400" />
              <span>info@srishantiniketancbse.com</span>
            </a>
            <span className="hidden lg:inline text-slate-700">|</span>
            <a
              href="#parent-portal"
              className="inline-flex items-center gap-1 text-gold-300 hover:text-gold-200 bg-gold-600/20 px-2.5 py-0.5 rounded-full border border-gold-500/30 transition-all"
            >
              <UserCheck className="w-3 h-3" />
              <span>Parent / Student Portal</span>
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
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-navy-900 to-navy-800 text-gold-400 flex items-center justify-center font-bold text-lg shadow-md border border-gold-500/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-gold-400" />
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-navy-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* 3. Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-navy-950/40 backdrop-blur-md z-40">
          <div className="bg-white border-b border-slate-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-3">
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 py-1"
              >
                About Sri Shantiniketan
              </Link>

              {/* Mobile Academic Stage Links */}
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  Academic Stages
                </span>
                <button
                  onClick={() => handleAcademicClick("early")}
                  className="w-full text-left text-xs font-bold text-navy-900 hover:text-gold-600 py-1 flex items-center justify-between"
                >
                  <span>Pre-Primary & Foundation</span>
                  <span className="text-[10px] text-slate-400">Nursery-UKG</span>
                </button>
                <button
                  onClick={() => handleAcademicClick("primary")}
                  className="w-full text-left text-xs font-bold text-navy-900 hover:text-gold-600 py-1 flex items-center justify-between"
                >
                  <span>Primary School</span>
                  <span className="text-[10px] text-slate-400">Grades 1-5</span>
                </button>
                <button
                  onClick={() => handleAcademicClick("middle")}
                  className="w-full text-left text-xs font-bold text-indigo-950 hover:text-indigo-700 py-1 flex items-center justify-between bg-indigo-50/60 px-2 py-1.5 rounded-lg border border-indigo-200/50"
                >
                  <span>Middle School (Coding & STEM)</span>
                  <span className="text-[10px] font-semibold text-indigo-600">Grades 6-8</span>
                </button>
                <button
                  onClick={() => handleAcademicClick("secondary")}
                  className="w-full text-left text-xs font-bold text-gold-900 bg-gold-50/80 px-2 py-1.5 rounded-lg border border-gold-300 flex items-center justify-between"
                >
                  <span>Secondary & IIT-JEE Foundation</span>
                  <span className="text-[10px] font-semibold text-gold-700">Class 9-10</span>
                </button>
              </div>
              <Link
                href="/#events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 py-1"
              >
                School Events (ISRO, Science Congress)
              </Link>
              <Link
                href="/#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 py-1"
              >
                Campus & Robotics Gallery
              </Link>
              <Link
                href="/#videos"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 py-1"
              >
                Official YouTube Videos
              </Link>
              <Link
                href="/mandatory-disclosure"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-gold-700 bg-gold-50 p-2.5 rounded-xl border border-gold-200 flex items-center justify-between"
              >
                <span>CBSE Mandatory Disclosure (OASIS)</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-navy-900 hover:text-gold-600 py-1"
              >
                Contact & Campus Location
              </Link>
            </div>

            <div className="pt-4 border-t border-slate-200 space-y-3">
              <Link
                href="/#admissions"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 rounded-xl font-bold text-sm uppercase tracking-wider text-navy-950 bg-gold-400 shadow-md"
              >
                Apply for Admission 2026-27
              </Link>
              <a
                href="tel:+919063966896"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-navy-900 bg-slate-100 border border-slate-200"
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

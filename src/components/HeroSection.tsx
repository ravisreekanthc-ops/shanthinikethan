"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Users,
  Compass,
  Play,
  CheckCircle2,
  Calendar,
  Building,
  Star,
  Download,
  Flame,
  MessageCircle,
} from "lucide-react";

export default function HeroSection() {
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // WhatsApp auto-redirect with prefilled message
    const text = encodeURIComponent(
      `Hello Sri Shantiniketan Admissions, I am ${parentName}. I would like to request the 2026-27 Prospectus and Fee Structure for Grade ${grade}. My contact is ${phone}.`
    );
    window.open(`https://wa.me/919063966896?text=${text}`, "_blank");
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-20 lg:pt-12 lg:pb-32 gradient-mesh border-b border-slate-200/60">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-navy-800/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Social Proof Pill Banner */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-gold-500/40 shadow-sm backdrop-blur-md">
            <div className="flex -space-x-1.5 overflow-hidden">
              <span className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-gold-500 text-navy-950 text-[10px] font-black text-center leading-5">K</span>
              <span className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-navy-800 text-gold-400 text-[10px] font-black text-center leading-5">S</span>
              <span className="inline-block h-5 w-5 rounded-full ring-2 ring-white bg-amber-600 text-white text-[10px] font-black text-center leading-5">V</span>
            </div>
            <div className="flex items-center gap-1 text-gold-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-navy-950">
              Rated 4.9/5 by 1,200+ Nandyal Families
            </span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Admissions 2026-27 Active (Nursery – Grade X)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Impact Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.12] font-display">
              Nurturing <span className="text-gradient">Inquiring Minds</span>, Building <span className="text-gradient-gold">Resilient Leaders</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
              Sri Shantiniketan CBSE School, Nandyal blends CBSE academic rigor, 
              early-stage IIT-JEE / NEET foundation, hands-on Robotics & STEM innovation, and Indian moral 
              heritage on an expansive 5+ acre eco-campus.
            </p>

            {/* Credibility Highlights Pill Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700 pt-1 max-w-xl">
              <span className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% CBSE Class X Board First-Class Results</span>
              </span>
              <span className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Integrated IIT-JEE Foundation from Grade 6</span>
              </span>
              <span className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Robotics & Artificial Intelligence Lab</span>
              </span>
              <span className="flex items-center gap-2 p-2 rounded-xl bg-white/80 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>GPS School Bus Coverage Across All Mandals</span>
              </span>
            </div>

            {/* Dual High-Converting CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link
                href="#admissions"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 shadow-xl shadow-gold-500/25 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all text-center"
              >
                <Sparkles className="w-4 h-4" />
                <span>Apply for Admission 2026-27</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#why-shantiniketan"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-navy-900 bg-white/90 hover:bg-white border border-slate-300 shadow-sm hover:shadow transition-all text-center"
              >
                <Trophy className="w-4 h-4 text-gold-600" />
                <span>Why Choose Us vs Other Schools</span>
              </Link>
            </div>

            {/* Fast Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg">
              <div>
                <div className="text-2xl font-black text-navy-900 font-display">100%</div>
                <div className="text-xs text-slate-500 font-medium">CBSE Pass Record</div>
              </div>
              <div>
                <div className="text-2xl font-black text-navy-900 font-display">1:18</div>
                <div className="text-xs text-slate-500 font-medium">Teacher-Student Ratio</div>
              </div>
              <div>
                <div className="text-2xl font-black text-gold-600 font-display">5+ Acres</div>
                <div className="text-xs text-slate-500 font-medium">Campus & Sports Grounds</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Converting Instant Prospectus & Lead Magnet Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Backing decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-gold-500 to-navy-800 rounded-3xl blur-md opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              <div className="relative glass-panel rounded-3xl shadow-2xl overflow-hidden border border-white/80 p-6 space-y-4">
                {/* Visual Header Pill */}
                <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-gold-500 text-navy-950 font-bold shadow-sm">
                      <Sparkles className="w-4 h-4" />
                    </span>
                    <div>
                      <h3 className="text-sm font-extrabold text-navy-950 font-display">
                        Quick Prospectus & Fee Pack
                      </h3>
                      <p className="text-[11px] text-slate-500">
                        Instant WhatsApp delivery in 30 seconds
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-red-100 text-red-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Flame className="w-3 h-3 text-red-600 fill-current" />
                    Limited Seats
                  </span>
                </div>

                {/* Instant Form */}
                {submitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-950">
                      Prospectus Request Received!
                    </h4>
                    <p className="text-xs text-emerald-800">
                      Our admissions counselor has opened your WhatsApp chat with the full syllabus and fee details.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-emerald-700 underline"
                    >
                      Submit another query
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Parent / Guardian Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                        Target Grade for 2026-27 *
                      </label>
                      <select
                        required
                        aria-label="Target Grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white text-slate-700"
                      >
                        <option value="">Select Grade</option>
                        <option value="Pre-Primary">Pre-Primary (Nursery, LKG, UKG)</option>
                        <option value="Primary (1-5)">Primary School (Grades 1 to 5)</option>
                        <option value="Middle (6-8)">Middle School (Grades 6 to 8)</option>
                        <option value="Secondary (9-10)">Class IX & X (CBSE Board + IIT Foundation)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 hover:from-gold-300 hover:to-amber-400 transition-all shadow-md hover:shadow-glow active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Send 2026 Prospectus via WhatsApp</span>
                    </button>
                  </form>
                )}

                {/* Micro Trust Indicators */}
                <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Zero Spam Guarantee
                  </span>
                  <span>Direct Hotline: <strong className="text-slate-800">+91 90639 66896</strong></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import {
  Check,
  X,
  Sparkles,
  ShieldCheck,
  Zap,
  Users,
  Brain,
  Rocket,
  Compass,
  ArrowRight,
  Award,
} from "lucide-react";
import Link from "next/link";

interface ComparisonRow {
  parameter: string;
  conventional: string;
  shantiniketan: string;
  badge?: string;
}

export default function WhyChooseUsComparison() {
  const comparisonData: ComparisonRow[] = [
    {
      parameter: "Classroom Mentorship & Section Size",
      conventional: "40 to 50 students crammed per section; slow learners get left behind.",
      shantiniketan: "Strictly capped at 1:18 Teacher-Student ratio; personalized diagnostic tracking for every child.",
      badge: "Individual Focus",
    },
    {
      parameter: "IIT-JEE, NEET & Olympiad Foundation",
      conventional: "Standard state/board textbooks only; parents forced to pay lakhs for outside private evening tuitions.",
      shantiniketan: "In-house integrated IIT-JEE & NEET foundation modules from Grade 6 included in curriculum.",
      badge: "Save Lakhs in Tuitions",
    },
    {
      parameter: "STEM, Robotics & Artificial Intelligence",
      conventional: "Theoretical blackboard science without practical application; zero coding exposure.",
      shantiniketan: "Dedicated Robotics & AI lab with microcontrollers, Arduino circuits, and 3D STEM kits.",
      badge: "Hands-on Engineering",
    },
    {
      parameter: "National Exposure & Science Missions",
      conventional: "Confined strictly to campus with routine textbook memorization.",
      shantiniketan: "State & National Science Congress winners; student study tours to ISRO Space Centre (SDSC SHAR).",
      badge: "ISRO Study Tours",
    },
    {
      parameter: "Campus Infrastructure & Playfields",
      conventional: "Small rented or multi-story buildings with zero outdoor play area.",
      shantiniketan: "Sprawling 5+ Acre green eco-campus with synthetic athletic track, cricket nets, and volleyball courts.",
      badge: "5+ Acre Green Campus",
    },
    {
      parameter: "Student Safety & Transit Logistics",
      conventional: "Unmonitored shared auto-rickshaws without verified drivers or tracking.",
      shantiniketan: "Dedicated GPS-tracked school bus fleet with speed-governors and female attenders covering all Nandyal routes.",
      badge: "GPS Tracked Fleet",
    },
  ];

  return (
    <section id="why-shantiniketan" className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-900 border border-gold-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-gold-700" />
            The Shantiniketan Competitive Edge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
            Why Discerning Parents in Nandyal Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            See how Sri Shantiniketan CBSE School fundamentally re-engineers school education 
            compared to conventional rote-learning institutions.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 mb-12">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-navy-950 text-white p-5 sm:p-6 items-center">
            <div className="md:col-span-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300">
              Institutional Benchmark
            </div>
            <div className="md:col-span-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mt-2 md:mt-0 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              Conventional Schools in Town
            </div>
            <div className="md:col-span-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-gold-400 mt-2 md:mt-0 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Sri Shantiniketan CBSE (Our Standard)
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-200">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-slate-50/80 transition-colors"
              >
                {/* Column 1: Feature */}
                <div className="md:col-span-4 space-y-1">
                  <h3 className="text-sm font-bold text-navy-950 font-display flex items-center gap-2">
                    <Award className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{row.parameter}</span>
                  </h3>
                  {row.badge && (
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                      {row.badge}
                    </span>
                  )}
                </div>

                {/* Column 2: Conventional */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm text-slate-500 bg-rose-50/50 p-3 rounded-xl border border-rose-100">
                  <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{row.conventional}</span>
                </div>

                {/* Column 3: Sri Shantiniketan Advantage */}
                <div className="md:col-span-4 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-navy-950 bg-emerald-50/60 p-3 rounded-xl border border-emerald-200 shadow-sm">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{row.shantiniketan}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing CTA Callout Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left z-10">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Admissions Intake 2026-27
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Give Your Child the Shantiniketan Headstart Today
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Seats are strictly filled on a first-come, readiness-diagnostic basis to maintain our 1:18 mentorship mandate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 shrink-0 w-full md:w-auto">
            <Link
              href="#admissions"
              className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-md"
            >
              Apply for Admission
            </Link>
            <a
              href="https://wa.me/919063966896?text=Hi,%20I%20would%20like%20to%20schedule%20a%20campus%20tour%20at%20Sri%20Shantiniketan%20CBSE%20School."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-5 py-3.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-white font-bold text-xs border border-navy-700 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

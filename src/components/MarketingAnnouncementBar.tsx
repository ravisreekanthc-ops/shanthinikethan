"use client";

import React, { useState } from "react";
import { Sparkles, Phone, ArrowRight, X, MessageCircle, Flame } from "lucide-react";
import Link from "next/link";

export default function MarketingAnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside aria-label="Admissions Announcement" className="bg-gradient-to-r from-amber-600 via-gold-500 to-amber-600 text-navy-950 py-2 px-4 relative z-50 text-xs font-bold border-b border-amber-400 shadow-sm animate-in slide-in-from-top duration-300">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Urgent Announcement Message */}
        <div className="flex items-center gap-2 flex-1 min-w-[280px]">
          <span className="inline-flex items-center gap-1 bg-navy-950 text-gold-400 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-extrabold shadow-sm shrink-0">
            <Flame className="w-3 h-3 text-amber-400 fill-current animate-pulse" />
            Admissions 2026-27
          </span>
          <p className="text-slate-950 font-semibold truncate text-[11px] sm:text-xs">
            Nursery to Class X Intake Open • Limited 30 seats/section • Merit Scholarship Interviews scheduled this week!
          </p>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+919063966896"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-navy-950 hover:underline"
          >
            <Phone className="w-3 h-3" />
            <span>Admissions Desk: +91 90639 66896</span>
          </a>

          <Link
            href="/#admissions"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-950 hover:bg-navy-900 text-white text-[11px] font-bold transition-all hover:scale-105 shadow-sm"
          >
            <span>Book Seat</span>
            <ArrowRight className="w-3 h-3 text-gold-400" />
          </Link>

          <button
            onClick={() => setIsVisible(false)}
            className="p-1 rounded text-navy-900 hover:text-black hover:bg-gold-400/50 transition-colors ml-1"
            aria-label="Dismiss banner"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}

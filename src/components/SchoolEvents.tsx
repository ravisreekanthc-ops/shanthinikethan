"use client";

import React, { useState } from "react";
import { OFFICIAL_EVENTS, SchoolEvent } from "@/data/schoolMediaData";
import {
  Calendar,
  Sparkles,
  Trophy,
  Rocket,
  Compass,
  ArrowRight,
  Filter,
  CheckCircle2,
  X,
  ExternalLink,
} from "lucide-react";

export default function SchoolEvents() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalEvent, setActiveModalEvent] = useState<SchoolEvent | null>(null);

  const categories = [
    "All",
    "Academics & Science",
    "Cultural & National",
    "Health & Sports",
    "Pre-Primary",
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? OFFICIAL_EVENTS
      : OFFICIAL_EVENTS.filter((e) => e.category === selectedCategory);

  return (
    <section id="events" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-900 border border-gold-300 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5 text-gold-700" />
              Institutional Events & Milestones
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
              Life at Sri Shantiniketan: Key Events
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Authentic highlights from our academic calendar — from state-level science triumphs and ISRO study missions to cultural assemblies and health movements in Nandyal.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-navy-900 text-white shadow-md scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Event Image Container with Fallback Overlay */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback gradient if image fails
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-500 text-navy-950 shadow-md">
                      {evt.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md">
                      {evt.category}
                    </span>
                  </div>

                  {/* Highlight pill */}
                  {evt.highlight && (
                    <div className="absolute bottom-3 left-3 text-xs font-bold text-gold-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>{evt.highlight}</span>
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-gold-700 transition-colors leading-snug font-display">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModalEvent(evt)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-navy-900 bg-slate-100 hover:bg-gold-400 hover:text-navy-950 transition-colors"
                >
                  <span>Read Event Story & Insights</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Modal Dialog */}
      {activeModalEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden space-y-4 max-h-[90vh] overflow-y-auto">
            {/* Modal Image */}
            <div className="relative h-64 w-full bg-slate-900">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <button
                onClick={() => setActiveModalEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  {activeModalEvent.category} • {activeModalEvent.badge}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display">
                  {activeModalEvent.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 pt-2 space-y-4 text-slate-700">
              <div className="p-4 rounded-2xl bg-amber-50 border border-gold-200 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-gold-600 shrink-0" />
                <div className="text-xs text-amber-900">
                  <strong>Key Achievement:</strong> {activeModalEvent.highlight || activeModalEvent.badge}
                </div>
              </div>

              <div className="space-y-2 text-sm leading-relaxed">
                <h4 className="font-bold text-navy-950 text-base">Event Overview:</h4>
                <p>{activeModalEvent.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Sri Shantiniketan CBSE School, Nandyal
                </span>
                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="px-5 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-navy-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

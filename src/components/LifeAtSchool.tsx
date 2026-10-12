"use client";

import React, { useState } from "react";
import { Sparkles, Camera, Trophy, Rocket, Compass, Dumbbell, Award, ArrowUpRight } from "lucide-react";

interface EventItem {
  id: string;
  tag: string;
  title: string;
  category: "Science & Space" | "Sports" | "Academics" | "Culture";
  date: string;
  description: string;
  gradient: string;
  icon: React.ElementType;
}

export default function LifeAtSchool() {
  const [filter, setFilter] = useState<string>("All");

  const events: EventItem[] = [
    {
      id: "ev-1",
      tag: "National Milestone",
      title: "ISRO Space Center Educational Study Mission",
      category: "Science & Space",
      date: "September 2025",
      description:
        "Senior secondary STEM students visited Satish Dhawan Space Centre (SDSC SHAR), Sriharikota, interacting with rocket scientists and observing propulsion systems.",
      gradient: "from-navy-900 to-indigo-900",
      icon: Rocket,
    },
    {
      id: "ev-2",
      tag: "State Championship",
      title: "National Vedic Mathematics Olympiad Champions",
      category: "Academics",
      date: "November 2025",
      description:
        "Students secured top 3 state ranks in rapid mental math calculations, receiving honors at the Regional Mathematical Conclave.",
      gradient: "from-amber-700 to-navy-900",
      icon: Trophy,
    },
    {
      id: "ev-3",
      tag: "Athletic Excellence",
      title: "Fit India School Week & Inter-School Athletics Meet",
      category: "Sports",
      date: "December 2025",
      description:
        "Over 600 students competed in track & field events, yoga demonstrations, and martial arts on our synthetic athletic track and 5-acre sports arena.",
      gradient: "from-emerald-800 to-navy-950",
      icon: Dumbbell,
    },
    {
      id: "ev-4",
      tag: "Innovation Conclave",
      title: "Regional Children's Science Congress & AI Showcase",
      category: "Science & Space",
      date: "January 2026",
      description:
        "Exhibition of student-engineered working models: solar-powered irrigation monitors, robotics rovers, and automated waste sorters.",
      gradient: "from-blue-900 to-navy-950",
      icon: Sparkles,
    },
  ];

  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <section id="campus-life" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-gold-400" />
              Life at Sri Shantiniketan
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
              Beyond the Classroom: Experiential Growth
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Real world exposure, scientific expeditions, athletics, and cultural vitality that 
              shape well-rounded, confident leaders.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {["All", "Science & Space", "Academics", "Sports"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition-all ${
                  filter === cat
                    ? "bg-navy-900 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Visual Banner */}
                <div
                  className={`h-48 w-full bg-gradient-to-br ${item.gradient} p-5 flex flex-col justify-between text-white relative overflow-hidden`}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-gold-300 border border-white/20">
                      {item.tag}
                    </span>
                    <Icon className="w-5 h-5 text-gold-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="z-10">
                    <span className="text-[11px] font-semibold text-slate-300">{item.date}</span>
                    <div className="text-xs font-bold text-white/90">{item.category}</div>
                  </div>
                  {/* Subtle pattern background */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="text-base font-bold text-navy-950 group-hover:text-gold-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-gold-600">
                    <span>Read Report & Gallery</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

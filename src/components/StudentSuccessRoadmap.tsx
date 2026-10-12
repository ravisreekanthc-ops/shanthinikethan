"use client";

import React from "react";
import { Sparkles, Brain, Compass, Rocket, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Step {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
}

export default function StudentSuccessRoadmap() {
  const roadmapSteps: Step[] = [
    {
      step: "01",
      title: "Diagnostic Discovery",
      subtitle: "Foundational Aptitude Assessment",
      description:
        "Every child enters with a unique learning style. We conduct an informal baseline diagnostic in linguistic fluency, numerical reasoning, and motor skills without exam stress.",
      icon: Compass,
      deliverables: [
        "Individual Learner Profile",
        "Sensory & Cognitive Mapping",
        "Parent Consultation Session",
      ],
    },
    {
      step: "02",
      title: "Conceptual Mastery",
      subtitle: "Experiential CBSE Core Syllabus",
      description:
        "Moving beyond rote memorization. Students learn mathematics and sciences through concrete laboratory manipulatives, digital smart boards, and project-based inquiries.",
      icon: Brain,
      deliverables: [
        "Interactive STEM Experiments",
        "Bilingual Language Fluency",
        "Weekly Formative Progress Tracking",
      ],
    },
    {
      step: "03",
      title: "Competitive Elevation",
      subtitle: "Integrated IIT-JEE & Olympiad Foundation",
      description:
        "From Grade 6 onwards, students receive structured coaching for IIT-JEE, NEET, NTSE, and Vedic Math Olympiads embedded into their daily timetable by seasoned faculty.",
      icon: Rocket,
      deliverables: [
        "Daily Practice Problems (DPP)",
        "Speed Math & Algorithmic Logic",
        "Robotics & AI Prototype Building",
      ],
    },
    {
      step: "04",
      title: "Holistic Leadership",
      subtitle: "Character, Ethics & Athletic Prowess",
      description:
        "Cultivating self-discipline, public elocution, sportsmanship, and civic responsibility on our 5-acre sports arenas and national study missions (like ISRO).",
      icon: ShieldCheck,
      deliverables: [
        "Synthetic Track Athletics & Yoga",
        "Public Speaking & Model UN",
        "100% Board First-Class Distinction",
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden border-b border-navy-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-gold-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Our Proven 4-Stage Pedagogical Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            How We Transform Potential into Distinction
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Inspired by outcome-driven methodologies: A systematic roadmap that nurtures your child 
            from foundational curiosity into competitive state & national leadership.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapSteps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-navy-900/90 rounded-3xl p-6 border border-navy-800 hover:border-gold-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Step Number Watermark */}
                <span className="absolute -top-3 -right-2 text-6xl font-black text-navy-800/40 select-none font-display group-hover:text-gold-500/10 transition-colors">
                  {s.step}
                </span>

                <div className="space-y-4 relative z-10">
                  <div className="p-3.5 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/20 w-fit group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-400">
                      Phase {s.step}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors font-display">
                      {s.title}
                    </h3>
                    <div className="text-xs text-slate-400 font-semibold mt-0.5">
                      {s.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-navy-800/80 space-y-2">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Key Outcomes:
                    </div>
                    {s.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Prompt */}
        <div className="mt-12 text-center">
          <Link
            href="#admissions"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-amber-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 shadow-xl shadow-gold-500/20"
          >
            <span>Experience the Framework — Schedule a Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

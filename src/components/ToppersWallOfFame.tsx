"use client";

import React from "react";
import { Trophy, Star, Award, Rocket, Sparkles, CheckCircle2 } from "lucide-react";

interface TopperItem {
  name: string;
  grade: string;
  title: string;
  honor: string;
  badge: string;
  description: string;
  highlightTag: string;
}

export default function ToppersWallOfFame() {
  const toppers: TopperItem[] = [
    {
      name: "Dhanusree & Nargis",
      grade: "Class IX",
      title: "National Science Congress 1st Place District Toppers",
      honor: "Selected for State Level & Official ISRO Space Center Study Tour",
      badge: "ISRO Mission Winners",
      description:
        "Engineered innovative environmental science models bagging the #1 rank in the District Science Fair, earning a fully sponsored study tour to Satish Dhawan Space Centre (SDSC SHAR), Sriharikota.",
      highlightTag: "ISRO Space Flight Mission",
    },
    {
      name: "Bhavagna",
      grade: "Grade III",
      title: "District Abacus Rapid Math Champion",
      honor: "1st Place District Trophy in Mental Arithmetic",
      badge: "1st Rank District",
      description:
        "Solved complex multi-digit calculations with rapid lightning mental agility, outperforming hundreds of participants across Nandyal district.",
      highlightTag: "Abacus Speed Genius",
    },
    {
      name: "Yaswanth",
      grade: "Grade VII",
      title: "District Vedic Mathematics Olympiad Laureate",
      honor: "2nd Place State Level Selection in Vedic Math",
      badge: "State Level Selection",
      description:
        "Mastered ancient Vedic mathematical sutras for rapid square roots, algebraic logic, and speed multiplication.",
      highlightTag: "Vedic Math State Finalist",
    },
    {
      name: "Class X CBSE Batch",
      grade: "Board Cohort",
      title: "100% Board Pass Rate & First-Class Honors",
      honor: "3 Consecutive Years of Unbroken Board Distinction",
      badge: "100% Board Pass",
      description:
        "Every single student who sat for the CBSE Class X Board Examination cleared with first-class honors, with top percentiles above 95% and seamless transition into IIT-JEE/NEET streams.",
      highlightTag: "100% CBSE First Class",
    },
  ];

  return (
    <section id="achievements" className="py-20 sm:py-28 bg-navy-950 text-white relative overflow-hidden border-b border-navy-900">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gold-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-400/30 text-xs font-bold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-gold-400" />
            Institutional Wall of Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            Our Students Set the Benchmark for Excellence
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            From representing the district at ISRO to winning state championships in mental arithmetic, 
            our students consistently demonstrate the power of foundational mentorship.
          </p>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((t, idx) => (
            <div
              key={idx}
              className="bg-navy-900/80 rounded-3xl p-6 border border-navy-800 hover:border-gold-500/50 shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-500 to-amber-500 opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-400/20 text-gold-300 border border-gold-400/30">
                    {t.badge}
                  </span>
                  <Award className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-400 block">{t.grade}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors font-display">
                    {t.name}
                  </h3>
                </div>

                <div className="p-3 rounded-xl bg-navy-950/70 border border-navy-800 space-y-1">
                  <div className="text-xs font-bold text-gold-400 leading-snug">
                    {t.honor}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-navy-800 flex items-center justify-between text-[11px] font-bold text-gold-400">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.highlightTag}
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

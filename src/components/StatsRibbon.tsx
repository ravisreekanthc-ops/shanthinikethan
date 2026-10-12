import React from "react";
import { Award, Users, BookOpen, MapPin, Sparkles } from "lucide-react";

export default function StatsRibbon() {
  const stats = [
    {
      label: "CBSE Pass Percentage",
      value: "100%",
      subtext: "Consistent 100% first-class pass in Class X Board Exams",
      icon: Award,
    },
    {
      label: "Teacher-Student Ratio",
      value: "1:18",
      subtext: "Personalized mentorship and adaptive pedagogical tracking",
      icon: Users,
    },
    {
      label: "Expansive Eco-Campus",
      value: "5+ Acres",
      subtext: "Lush green grounds, athletic tracks & separate playfields",
      icon: MapPin,
    },
    {
      label: "STEM & Foundation Labs",
      value: "12+ Labs",
      subtext: "Integrated IIT-JEE, NEET, Robotics & AI learning labs",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-12 bg-navy-950 text-white relative overflow-hidden border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start p-5 rounded-2xl bg-navy-900/60 border border-navy-800/80 hover:border-gold-500/40 transition-all hover:-translate-y-1 group"
              >
                <div className="p-3 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 mb-4 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight mb-1 group-hover:text-gold-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

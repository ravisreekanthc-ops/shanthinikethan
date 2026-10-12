"use client";

import React, { useState, useEffect } from "react";
import { BookOpen, Sparkles, Brain, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Stage {
  id: string;
  name: string;
  grades: string;
  badge: string;
  headline: string;
  description: string;
  pillars: string[];
  pedagogy: string;
  keyFeature: string;
}

export default function AcademicStages() {
  const [activeTab, setActiveTab] = useState<string>("secondary");

  const stages: Stage[] = [
    {
      id: "early",
      name: "Early Childhood",
      grades: "Pre-KG, LKG & UKG",
      badge: "Foundational Stage",
      headline: "Joyful Discovery & Experiential Playway",
      description:
        "Blending Maria Montessori principles with Reggio Emilia inspired sensorial exploration. Children develop phonemic awareness, fine motor coordination, social empathy, and natural curiosity in child-safe environments.",
      pillars: [
        "Phonics & Language Enrichment",
        "Sensory Motor Skill Development",
        "Numeracy through Concrete Manipulatives",
        "Creative Arts, Music & Rhythmic Movement",
      ],
      pedagogy: "Activity-Based & Child-Centric (NEP 2020 Aligned)",
      keyFeature: "Safe Ergonomic Playfields & Activity Zones",
    },
    {
      id: "primary",
      name: "Primary School",
      grades: "Grades 1 to 5",
      badge: "Preparatory Stage",
      headline: "Building Foundational Fluency & Scientific Curiosity",
      description:
        "Transitioning from concrete learning to abstract conceptual understanding. Emphasis on bilingual mastery, foundational mathematics, environmental sciences, and values-driven life skills.",
      pillars: [
        "Inquiry-Driven Science Experiments",
        "Mental Math & Vedic Math Drills",
        "Reading Fluency & Digital Storytelling",
        "Physical Fitness & Yoga Integration",
      ],
      pedagogy: "Experiential Learning & Project-Based Inquiries",
      keyFeature: "Dedicated Junior Science & Language Labs",
    },
    {
      id: "middle",
      name: "Middle School",
      grades: "Grades 6 to 8",
      badge: "Middle Stage",
      headline: "Analytical Thinking, Coding & Global Perspectives",
      description:
        "Cultivating rigorous critical thinking, experimental scientific method, and cross-disciplinary projects. Students receive formal exposure to computer programming, algorithmic logic, and public speaking.",
      pillars: [
        "Computational Thinking & Scratch/Python Coding",
        "Composite Physics, Chemistry & Biology Labs",
        "Model United Nations (MUN) & Debate Forums",
        "State & National Olympiad Training",
      ],
      pedagogy: "Socratic Method & Problem-Solving Workshops",
      keyFeature: "Makerspace Robotics & Electronics Corner",
    },
    {
      id: "secondary",
      name: "Secondary & IIT Foundation",
      grades: "Grades 9 & 10",
      badge: "Secondary Stage (CBSE)",
      headline: "Rigorous CBSE Board Mastery + Integrated IIT-JEE / NEET Foundation",
      description:
        "Our signature academic curriculum. Students master the NCERT/CBSE syllabus while undergoing structured coaching for IIT-JEE, NEET, NTSE, and KVPY by seasoned national-level faculty.",
      pillars: [
        "Integrated IIT-JEE & NEET Concept Modules",
        "Daily Practice Problems (DPP) & Doubt Sessions",
        "Regular CBSE Board Simulation Mock Tests",
        "Career Counseling & Psychometric Mentorship",
      ],
      pedagogy: "Mastery-Based Learning with Continuous Diagnostic Testing",
      keyFeature: "Advanced Science Labs & High-Speed Digital Library",
    },
  ];

  useEffect(() => {
    const handleStageSelect = (e: CustomEvent<string>) => {
      if (e.detail && ["early", "primary", "middle", "secondary"].includes(e.detail)) {
        setActiveTab(e.detail);
      }
    };

    const handleHashOrSearch = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.toLowerCase();
        if (hash.includes("middle")) {
          setActiveTab("middle");
        } else if (hash.includes("secondary") || hash.includes("iit")) {
          setActiveTab("secondary");
        } else if (hash.includes("primary")) {
          setActiveTab("primary");
        } else if (hash.includes("early") || hash.includes("pre-primary")) {
          setActiveTab("early");
        }

        const url = new URL(window.location.href);
        const stageParam = url.searchParams.get("stage");
        if (stageParam && ["early", "primary", "middle", "secondary"].includes(stageParam)) {
          setActiveTab(stageParam);
        }
      }
    };

    window.addEventListener("select-academic-stage", handleStageSelect as EventListener);
    window.addEventListener("hashchange", handleHashOrSearch);
    handleHashOrSearch();

    return () => {
      window.removeEventListener("select-academic-stage", handleStageSelect as EventListener);
      window.removeEventListener("hashchange", handleHashOrSearch);
    };
  }, []);

  const currentStage = stages.find((s) => s.id === activeTab) || stages[3];

  return (
    <section id="academics" className="py-20 sm:py-28 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-gold-700 border border-gold-300 text-xs font-bold uppercase tracking-wider">
            <Brain className="w-4 h-4 text-gold-600" />
            Holistic Academic Framework
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
            Academic Pathways Engineered for Distinction
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From playful foundational exploration to competitive IIT-JEE / NEET foundation, 
            Sri Shantiniketan provides a seamless continuum of educational excellence.
          </p>
        </div>

        {/* Tab Navigation with mobile swipe ergonomics */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 overflow-x-auto pb-4 mb-8 sm:mb-10 px-2 sm:px-0 no-scrollbar touch-pan-x">
          {stages.map((stage) => (
            <button
              key={stage.id}
              id={`stage-tab-${stage.id}`}
              onClick={() => setActiveTab(stage.id)}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex flex-col items-center shrink-0 min-h-[48px] active:scale-95 ${
                activeTab === stage.id
                  ? "bg-navy-900 text-white shadow-lg shadow-navy-900/20 scale-100 sm:scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span>{stage.name}</span>
              <span className={`text-[10px] ${activeTab === stage.id ? "text-gold-400" : "text-slate-400"}`}>
                {stage.grades}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detail Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-100 text-gold-800 border border-gold-300">
                {currentStage.badge}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {currentStage.grades}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
              {currentStage.headline}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {currentStage.description}
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-bold text-navy-900 uppercase tracking-wider">
                Key Curricular Pillars:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentStage.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="#admissions"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-800 transition-colors shadow-sm"
              >
                <span>Enroll in {currentStage.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <div className="text-xs text-slate-500 font-medium">
                Pedagogy: <strong className="text-navy-900">{currentStage.pedagogy}</strong>
              </div>
            </div>
          </div>

          {/* Right Highlight Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-lg">
            <div className="flex items-center justify-between border-b border-navy-700/80 pb-4">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                Facility & Infrastructure
              </span>
              <Cpu className="w-5 h-5 text-gold-400" />
            </div>

            <div className="space-y-2">
              <div className="text-xs text-slate-300">Signature Facility Feature:</div>
              <div className="text-lg font-bold text-white font-display">
                {currentStage.keyFeature}
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>Smart Interactive Panels with 3D Visual Learning simulations.</span>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>Continuous formative evaluation and weekly parent diagnostic reports.</span>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                <span>Remedial coaching clinics for students requiring extra concept reinforcement.</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/10 text-center text-xs font-semibold text-gold-300 border border-white/10">
              Curriculum Aligned with CBSE & National Education Policy (NEP 2020)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

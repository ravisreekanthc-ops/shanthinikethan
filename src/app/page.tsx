import React from "react";
import HeroSection from "@/components/HeroSection";
import StatsRibbon from "@/components/StatsRibbon";
import AcademicStages from "@/components/AcademicStages";
import StudentSuccessRoadmap from "@/components/StudentSuccessRoadmap";
import WhyChooseUsComparison from "@/components/WhyChooseUsComparison";
import ToppersWallOfFame from "@/components/ToppersWallOfFame";
import SchoolEvents from "@/components/SchoolEvents";
import SchoolGallery from "@/components/SchoolGallery";
import VideoGallery from "@/components/VideoGallery";
import MandatoryDisclosure from "@/components/MandatoryDisclosure";
import ParentFAQ from "@/components/ParentFAQ";
import TestimonialsMap from "@/components/TestimonialsMap";
import { Sparkles, CheckCircle2, ShieldCheck, Phone, Clock, FileCheck } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* 1. High-Converting Hero Section with Social Proof & Lead Magnet */}
      <HeroSection />

      {/* 2. Fast Stats & Credibility Ribbon */}
      <StatsRibbon />

      {/* 3. Academic Pathways & IIT-JEE Foundation */}
      <AcademicStages />

      {/* 4. 4-Stage Pedagogical Success Framework (Inspired by Leading Digital Agency Process UX) */}
      <StudentSuccessRoadmap />

      {/* 5. The Shantiniketan Advantage: Head-to-Head Comparison vs Conventional Schools */}
      <WhyChooseUsComparison />

      {/* 6. Wall of Fame: Student Champions, ISRO Mission & Board Toppers */}
      <ToppersWallOfFame />

      {/* 7. Authentic School Events (ISRO, Science Congress, Maths Day, Fit India, Mango Day, etc.) */}
      <SchoolEvents />

      {/* 8. Photo & Campus Infrastructure Gallery (Robotics Lab, Science Labs, Library, Smart Classrooms) */}
      <SchoolGallery />

      {/* 9. Official YouTube Broadcast Reel & Interactive Playlist */}
      <VideoGallery />

      {/* 10. CBSE Mandatory Public Disclosure Repository */}
      <MandatoryDisclosure />

      {/* 11. Parent FAQ & Objection-Crusher Accordion */}
      <ParentFAQ />

      {/* 12. Parent Testimonials & Interactive Campus Map */}
      <TestimonialsMap />

      {/* 13. Dedicated Admissions 2026-27 Enrollment Section */}
      <section id="admissions" className="py-20 bg-gradient-to-br from-navy-900 via-navy-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-400/30 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Admissions Open for Academic Year 2026-27
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Begin Your Child&apos;s Journey to Lifelong Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Admission process at Sri Shantiniketan is transparent, merit-oriented, and simple. 
              Limited seats are available in each section to maintain our optimal 1:18 teacher-student mentorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-navy-800/80 border border-navy-700/80 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-2xl font-black text-gold-400 font-display">01</span>
                <h3 className="text-base font-bold text-white">Online Inquiry & Callback</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Submit the quick inquiry form or message us directly on WhatsApp (+91 90639 66896) to receive the prospectus.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-700 text-[11px] text-gold-300 flex items-center gap-1.5 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                Response within 2 Hours
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-navy-800/80 border border-navy-700/80 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-2xl font-black text-gold-400 font-display">02</span>
                <h3 className="text-base font-bold text-white">Campus Walkthrough & Diagnostic</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Visit the 5-acre campus, explore science & robotics laboratories, and undergo an informal learner readiness diagnostic.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-700 text-[11px] text-gold-300 flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Principal & Faculty Interaction
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-navy-800/80 border border-navy-700/80 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-2xl font-black text-gold-400 font-display">03</span>
                <h3 className="text-base font-bold text-white">Document Verification & Enrollment</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Submit birth certificate, previous school transfer certificate (TC), and Aadhaar copy to confirm seat allotment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-navy-700 text-[11px] text-gold-300 flex items-center gap-1.5 font-semibold">
                <FileCheck className="w-3.5 h-3.5" />
                Official CBSE Registration
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

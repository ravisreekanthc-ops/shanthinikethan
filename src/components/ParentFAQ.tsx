"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function ParentFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      category: "Academics",
      question: "How does the integrated IIT-JEE & NEET foundation work alongside the CBSE syllabus?",
      answer:
        "Our foundation program is woven directly into the school timetable from Grade 6 upwards without adding evening stress. We cover CBSE core concepts first, then delve into higher-order thinking, advanced numerical solving, and Speed Math. This saves parents lakhs of rupees in private evening tuition fees and eliminates exhausting daily commutes.",
    },
    {
      category: "Admissions",
      question: "What is the teacher-to-student ratio, and how are slow learners supported?",
      answer:
        "We maintain a strict maximum ratio of 1:18 in each section. This ensures our teachers observe every student's daily cognitive and motor progress. For students requiring extra concept reinforcement, our faculty conducts zero-cost remedial clinics during study hours before evening dispersal.",
    },
    {
      category: "Safety & Transport",
      question: "Is school bus transport available across all localities of Nandyal?",
      answer:
        "Yes. We operate a dedicated fleet of GPS-tracked school buses with speed-governors and female attenders on board. Routes cover Nandyal town, Kanthi Nagar, Santhiram road, Allagadda highway, Mahanandi route, and surrounding mandals with real-time route updates for parents.",
    },
    {
      category: "Regulatory",
      question: "Is Sri Shantiniketan officially affiliated with CBSE New Delhi?",
      answer:
        "Yes, absolutely. Sri Shantiniketan CBSE School is fully affiliated with the Central Board of Secondary Education (CBSE Affiliation No: 130730, School Code: 57222). All statutory NOCs, building safety, fire clearance, and OASIS submissions are publicly verifiable on our Mandatory Disclosure hub.",
    },
    {
      category: "Infrastructure",
      question: "What sports and laboratory facilities exist on the 5-acre campus?",
      answer:
        "Our campus includes a synthetic athletic track, cricket nets, volleyball courts, a dedicated indoor yoga hall, composite physics/chemistry/biology laboratories, a specialized Robotics & AI makerspace, and an automated central digital library.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-100 text-gold-900 border border-gold-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-gold-700" />
            Parent Queries Answered
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Clear, transparent answers to help you make the best decision for your child’s educational future.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-navy-100 text-navy-800 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-navy-950 font-display leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-gold-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 p-6 rounded-2xl bg-amber-50 border border-gold-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-navy-950 font-display">
              Have specific questions regarding fee concessions or syllabus?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Speak directly with our Academic Counselor or Correspondent in Nandyal.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919063966896"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy-900 text-white text-xs font-bold hover:bg-navy-800 transition-colors shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call +91 90639 66896</span>
            </a>
            <a
              href="https://wa.me/919063966896?text=Hello%20Sri%20Shantiniketan,%20I%20have%20a%20question%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

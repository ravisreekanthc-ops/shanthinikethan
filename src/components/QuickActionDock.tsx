"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Calendar,
  Sparkles,
  Phone,
  X,
  Send,
  MapPin,
  Clock,
} from "lucide-react";

export default function QuickActionDock() {
  const [modalType, setModalType] = useState<"enquiry" | "tour" | null>(null);

  return (
    <>
      {/* Floating Bottom Dock (Mobile & Desktop) */}
      <aside aria-label="Quick Actions" className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-xl">
        <div className="glass-panel-dark rounded-2xl p-2 px-3 shadow-2xl border border-white/20 flex items-center justify-between gap-2 text-white">
          {/* Action 1: Enquire Now */}
          <button
            onClick={() => setModalType("enquiry")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Enquire Now</span>
          </button>

          {/* Action 2: Book Campus Tour */}
          <button
            onClick={() => setModalType("tour")}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-100 font-bold text-xs uppercase tracking-wider transition-all border border-navy-700 active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span className="truncate">Campus Tour</span>
          </button>

          {/* Action 3: Direct WhatsApp Support */}
          <a
            href="https://wa.me/919063966896?text=Hello%20Sri%20Shantiniketan%20CBSE%20School,%20I%20would%20like%20to%20inquire%20about%20admissions%20for%20academic%20year%202026-27."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md active:scale-95 shrink-0"
            aria-label="WhatsApp Admission Chat"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </aside>

      {/* Interactive Bottom Sheet / Modal for Inquiries or Tour Booking */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-navy-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200 p-6 space-y-4 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-gold-100 text-gold-700">
                  {modalType === "enquiry" ? (
                    <Sparkles className="w-5 h-5" />
                  ) : (
                    <Calendar className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-navy-950 font-display">
                    {modalType === "enquiry"
                      ? "Admission Enquiry 2026-27"
                      : "Schedule an In-Person Campus Tour"}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sri Shantiniketan CBSE School, Nandyal
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalType(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Context Message */}
            <p className="text-xs text-slate-600">
              {modalType === "enquiry"
                ? "Please leave your contact details below. Our academic admissions counselor will call you and send the school syllabus & fee structure via WhatsApp."
                : "Experience our 5-acre campus, STEM labs, robotics workshop, and interact directly with the Principal. Select your preferred visiting date below."}
            </p>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  modalType === "enquiry"
                    ? "Enquiry received! Our counselor will contact you shortly on WhatsApp/Phone."
                    : "Campus Tour Confirmed! Our team will send confirmation details shortly."
                );
                setModalType(null);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Seeking Grade *
                  </label>
                  <select
                    required
                    aria-label="Seeking Grade"
                    className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white text-slate-700"
                  >
                    <option value="">Select Grade</option>
                    <option value="Pre-KG">Pre-KG / Nursery</option>
                    <option value="LKG-UKG">LKG / UKG</option>
                    <option value="Grade 1-5">Primary (Grades 1-5)</option>
                    <option value="Grade 6-8">Middle (Grades 6-8)</option>
                    <option value="Grade 9-10">Secondary & IIT Foundation (9-10)</option>
                  </select>
                </div>
              </div>

              {modalType === "tour" && (
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full text-base sm:text-xs px-3.5 py-2.5 min-h-[44px] rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white text-slate-700"
                  />
                </div>
              )}

              {/* Honeypot anti-spam field */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 min-h-[48px] py-3 rounded-xl text-xs sm:text-xs font-bold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-gold-400 to-amber-500 shadow-md hover:shadow-glow active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {modalType === "enquiry"
                      ? "Submit Admission Enquiry"
                      : "Confirm Tour Schedule"}
                  </span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-400 pt-1">
                Direct Admissions Desk: <strong className="text-slate-600">+91 90639 66896</strong>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React from "react";
import { Star, Quote, MapPin, Navigation, Bus, Clock, Phone } from "lucide-react";

export default function TestimonialsMap() {
  const testimonials = [
    {
      name: "Dr. K. Srinivasulu, M.D.",
      role: "Parent of K. Ananya (Grade IX)",
      comment:
        "The balanced emphasis on both CBSE board academics and integrated IIT-JEE foundation without overwhelming the child is remarkable. The faculty's individual attention in Nandyal is unmatched.",
      rating: 5,
    },
    {
      name: "V. Padmavathi, M.Tech",
      role: "Parent of V. Rohith (Grade VI)",
      comment:
        "My son transformed from being hesitant in science to building robotics kits and competing in district science congress. Shantiniketan provides true experiential learning.",
      rating: 5,
    },
    {
      name: "R. Venkata Reddy, Advocate",
      role: "Parent of R. Tejaswi (Grade X - 98.4%)",
      comment:
        "Disciplined atmosphere, moral grounding, and dedicated mock tests helped my daughter secure the district top percentile in her CBSE Class X board exam.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Parent Testimonials Section */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-3 py-1 rounded-full border border-gold-200">
              Parent Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
              Trusted by 1,200+ Families Across Nandyal
            </h2>
            <p className="text-sm text-slate-600">
              Hear directly from parents who have seen their children flourish academically and ethically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-gold-400/40" />
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="text-sm font-bold text-navy-900">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Campus Map & Location Showcase */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-navy-800 bg-navy-100 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5 text-navy-800" />
              Strategic Campus Connectivity
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
              Visit Our 5-Acre Serene Green Campus in Nandyal
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              Located in a pollution-free academic enclave of Nandyal, Sri Shantiniketan offers a 
              peaceful haven for focused study, athletic pursuits, and comprehensive student safety.
            </p>

            <div className="space-y-3 text-xs text-slate-700">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Bus className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-navy-900">Dedicated GPS School Bus Fleet:</strong> Coverage spanning all key localities in Nandyal town, Allagadda road, Mahanandi route, and surrounding mandals.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-navy-700 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-navy-900">Campus Visiting & Counseling Hours:</strong> Monday – Saturday: 8:30 AM to 5:00 PM. Prior appointment recommended for principal interaction.
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://maps.google.com/?q=Sri+Shantiniketan+CBSE+School+Nandyal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-800 transition-colors shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
              </a>
              <a
                href="tel:+919063966896"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-navy-900 text-xs font-bold hover:bg-slate-200 transition-colors border border-slate-300"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call Campus Reception</span>
              </a>
            </div>
          </div>

          {/* Map Preview Frame */}
          <div className="lg:col-span-6 bg-slate-100 rounded-2xl overflow-hidden border border-slate-300 shadow-inner h-80 relative flex flex-col items-center justify-center p-6 text-center">
            <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mb-3 shadow-md">
              <MapPin className="w-7 h-7" />
            </div>
            <div className="font-bold text-navy-950 text-base font-display">Sri Shantiniketan CBSE School</div>
            <div className="text-xs text-slate-600 mt-1 max-w-sm">
              Santhiram College Road / Main Enclave, Nandyal, Andhra Pradesh - 518501
            </div>
            <div className="text-[11px] font-semibold text-gold-700 bg-gold-100 px-3 py-1 rounded-full mt-3 border border-gold-300">
              Latitude: 15.4875° N | Longitude: 78.4842° E
            </div>
            <a
              href="https://maps.google.com/?q=Sri+Shantiniketan+CBSE+School+Nandyal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-xs font-bold text-navy-900 hover:text-gold-600 underline"
            >
              Open Full Interactive Satellite Map →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

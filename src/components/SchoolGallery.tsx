"use client";

import React, { useState } from "react";
import { OFFICIAL_GALLERY, GalleryPhoto } from "@/data/schoolMediaData";
import {
  Camera,
  Filter,
  Maximize2,
  X,
  Sparkles,
  Cpu,
  FlaskConical,
  BookOpen,
  Palette,
} from "lucide-react";

export default function SchoolGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    "All",
    "Robotics & STEM",
    "Laboratories",
    "Campus & Classrooms",
    "Cultural & Events",
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? OFFICIAL_GALLERY
      : OFFICIAL_GALLERY.filter((p) => p.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-gold-400" />
              Campus Infrastructure & Activity Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
              Visual Journey Through Our 5-Acre Campus
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Glimpse into our dedicated Robotics & AI makerspace, composite science laboratories, high-speed digital library, and vibrant cultural assemblies in Nandyal.
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
                    : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setLightboxPhoto(photo)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback visual
                    (e.target as HTMLElement).style.opacity = "0.7";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                {/* Top Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {photo.category}
                  </span>
                </div>

                {/* Hover Maximize Icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-gold-500 text-navy-950 shadow-md">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <h3 className="text-sm font-bold leading-tight group-hover:text-gold-300 transition-colors font-display">
                    {photo.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-slate-200">
            <button
              onClick={() => setLightboxPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] bg-black flex items-center justify-center">
              <img
                src={lightboxPhoto.image}
                alt={lightboxPhoto.title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="p-6 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-100 text-gold-900 border border-gold-300">
                  {lightboxPhoto.category}
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Sri Shantiniketan Official Gallery
                </span>
              </div>
              <h3 className="text-xl font-bold text-navy-950 font-display">
                {lightboxPhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {lightboxPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

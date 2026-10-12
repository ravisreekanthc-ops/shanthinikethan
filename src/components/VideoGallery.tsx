"use client";

import React, { useState } from "react";
import { OFFICIAL_VIDEOS, SchoolVideo } from "@/data/schoolMediaData";
import {
  Play,
  ExternalLink,
  Sparkles,
  Film,
  Video,
  CheckCircle2,
} from "lucide-react";

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<SchoolVideo>(OFFICIAL_VIDEOS[0]);

  return (
    <section id="videos" className="py-20 sm:py-28 bg-navy-950 text-white border-b border-navy-900 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold-400/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
              <YoutubeIcon className="w-4 h-4 text-red-500" />
              Official YouTube Broadcast Reel
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Watch Sri Shantiniketan in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              Curated videographic walkthroughs, student STEM project presentations, sports drills, and annual day spectacles direct from our official media channel.
            </p>
          </div>

          <a
            href="https://youtube.com/@srishantiniketancbseschool2151"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shadow-lg shadow-red-600/30"
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>Visit YouTube Channel</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Player & Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Active Video Player (7 Columns) */}
          <div className="lg:col-span-7 bg-navy-900 rounded-3xl overflow-hidden border border-navy-800 shadow-2xl space-y-4 p-4 sm:p-5">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-inner">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
                title={activeVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-2 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-400/30">
                  {activeVideo.tag}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {activeVideo.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                {activeVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          </div>

          {/* Video Playlist Selector (5 Columns) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 flex items-center justify-between">
              <span>School Video Playlist ({OFFICIAL_VIDEOS.length} Features)</span>
              <Film className="w-4 h-4 text-gold-400" />
            </div>

            <div className="space-y-3 max-h-[580px] overflow-y-auto pr-1">
              {OFFICIAL_VIDEOS.map((vid) => {
                const isSelected = activeVideo.youtubeId === vid.youtubeId;
                return (
                  <div
                    key={vid.id}
                    onClick={() => setActiveVideo(vid)}
                    className={`p-3.5 rounded-2xl cursor-pointer transition-all flex items-center gap-4 border ${
                      isSelected
                        ? "bg-navy-800/90 border-gold-500/60 shadow-lg scale-[1.02]"
                        : "bg-navy-900/50 hover:bg-navy-900 border-navy-800 hover:border-navy-700"
                    }`}
                  >
                    {/* YouTube Thumbnail Preview */}
                    <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-black shrink-0 border border-navy-700">
                      <img
                        src={`https://img.youtube.com/vi/${vid.youtubeId}/hqdefault.jpg`}
                        alt={vid.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className={`p-1.5 rounded-full ${isSelected ? "bg-red-600 text-white" : "bg-white/80 text-navy-950"}`}>
                          <Play className="w-3.5 h-3.5 fill-current" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gold-400 uppercase">
                          {vid.tag}
                        </span>
                        {isSelected && (
                          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded-full">
                            Playing
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs font-bold text-white truncate leading-snug">
                        {vid.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 line-clamp-1">
                        {vid.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct Channel Subscribe Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-navy-900 to-navy-800 border border-navy-700 text-xs text-slate-300 flex items-center justify-between gap-3">
              <div>
                <strong className="text-white block font-display">Sri Shantiniketan YouTube</strong>
                <span>Subscribe for weekly science & cultural updates</span>
              </div>
              <a
                href="https://youtube.com/@srishantiniketancbseschool2151"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white shadow-md transition-colors shrink-0"
                aria-label="Subscribe on YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

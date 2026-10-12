"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  ThumbsUp,
  MessageCircle,
  Share2,
  Calendar,
  Sparkles,
  CheckCircle,
  Clock,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface FacebookPost {
  id: string;
  title: string;
  date: string;
  timeAgo: string;
  category: "Admissions" | "Academic Triumph" | "Science & ISRO" | "Campus Life";
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  link: string;
}

const FEATURED_FB_POSTS: FacebookPost[] = [
  {
    id: "fb-1",
    title: "Admissions Open for Academic Year 2026-27",
    date: "Current Session",
    timeAgo: "Latest Update",
    category: "Admissions",
    content:
      "🎓 Admissions are open for Nursery to Grade X! Give your child the Shantiniketan advantage with our 5-acre smart campus, hands-on Robotics & STEM Innovation labs, integrated IIT-JEE foundation, and personalized 1:18 mentorship. Visit our campus in Nandyal or reach out for counseling.",
    image: "/images/gallery/front_view.jpg",
    likes: 184,
    comments: 32,
    shares: 24,
    link: "https://www.facebook.com/shantiniketancbsendl/",
  },
  {
    id: "fb-2",
    title: "National Science Congress 1st Rank & ISRO Educational Tour",
    date: "State Achievement",
    timeAgo: "Featured Post",
    category: "Science & ISRO",
    content:
      "🚀 Proud milestone! Our Grade 9 innovators Dhanusree & Nargis bagged 1st place in the District Science Congress and qualified for the prestigious ISRO Satellite Launching Centre (SDSC SHAR) study tour. Nurturing true scientific temperament at Sri Shantiniketan!",
    image: "/images/gallery/n_science_lab.jpg",
    likes: 246,
    comments: 48,
    shares: 39,
    link: "https://www.facebook.com/shantiniketancbsendl/",
  },
  {
    id: "fb-3",
    title: "Vedic Maths & Abacus District Championship Winners",
    date: "District Level",
    timeAgo: "Recent Highlight",
    category: "Academic Triumph",
    content:
      "🏆 Stellar performance by our young math prodigies! Grade 3 student Bhavagna secured 1st place in Abacus, and Grade 7 student Yaswanth achieved 2nd place in Vedic Mathematics at the District-level championship.",
    image: "/images/gallery/potos_lab_m_lab_5.jpg",
    likes: 198,
    comments: 29,
    shares: 18,
    link: "https://www.facebook.com/shantiniketancbsendl/",
  },
  {
    id: "fb-4",
    title: "Fit India Movement & Annual Sports Showcase",
    date: "Campus Athletics",
    timeAgo: "Campus Life",
    category: "Campus Life",
    content:
      "⚡ A healthy mind in a strong body! Relive moments from our Fit India sports meet on our 5-acre sports arena. From high-energy volleyball matches to synchronized yoga drills, our students demonstrated exceptional spirit.",
    image: "/images/gallery/n_img_8361.jpg",
    likes: 165,
    comments: 21,
    shares: 15,
    link: "https://www.facebook.com/shantiniketancbsendl/",
  },
];

export default function FacebookFeedSection() {
  const [activeTab, setActiveTab] = useState<"stream" | "widget">("stream");

  return (
    <section id="facebook-feed" className="py-20 sm:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider border border-blue-200">
              <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Official Facebook Feed &amp; Updates
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
              Live From Our Facebook Community
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl">
              Stay connected with daily campus activities, student triumphs, festival celebrations, and important school circulars directly from our official Facebook page.
            </p>
          </div>

          {/* Action Button & Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
              <button
                onClick={() => setActiveTab("stream")}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-all ${
                  activeTab === "stream"
                    ? "bg-white text-navy-900 shadow-sm"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                Curated Posts
              </button>
              <button
                onClick={() => setActiveTab("widget")}
                className={`text-xs font-bold px-4 py-2 rounded-lg transition-all ${
                  activeTab === "widget"
                    ? "bg-white text-navy-900 shadow-sm"
                    : "text-slate-600 hover:text-navy-900"
                }`}
              >
                Live Page Plugin
              </button>
            </div>

            <a
              href="https://www.facebook.com/shantiniketancbsendl/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Follow @shantiniketancbsendl</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Tab 1: Curated Post Grid */}
        {activeTab === "stream" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_FB_POSTS.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Post Author Bar */}
                  <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
                    <div className="flex items-center gap-2.5">
                      <img
                        src="/images/slogo2.png"
                        alt="Sri Shantiniketan Logo"
                        className="w-9 h-9 rounded-full object-contain bg-white border border-slate-200 p-0.5"
                      />
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs font-bold text-navy-950 leading-tight">
                            Sri Shantiniketan
                          </span>
                          <CheckCircle className="w-3 h-3 text-blue-600 fill-blue-600 text-white shrink-0" />
                        </div>
                        <span className="text-[10px] text-slate-500">{post.timeAgo}</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      {post.category}
                    </span>
                  </div>

                  {/* Post Image */}
                  {post.image && (
                    <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Post Text */}
                  <div className="p-4 space-y-2">
                    <h3 className="text-sm font-bold text-navy-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                      {post.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                      {post.content}
                    </p>
                  </div>
                </div>

                {/* Engagement Stats & CTA */}
                <div className="p-4 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1 text-blue-600 font-semibold">
                      <ThumbsUp className="w-3 h-3" />
                      {post.likes} Likes
                    </span>
                    <span className="flex items-center gap-3">
                      <span>{post.comments} comments</span>
                      <span>{post.shares} shares</span>
                    </span>
                  </div>

                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-navy-900 hover:text-blue-700 text-xs font-bold transition-all"
                  >
                    <span>View Post on Facebook</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Live Facebook Page Plugin Frame */}
        {activeTab === "widget" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/slogo2.png"
                  alt="Sri Shantiniketan Logo"
                  className="w-12 h-12 rounded-full object-contain bg-white border border-slate-200 p-1 shadow-sm"
                />
                <div>
                  <h3 className="text-lg font-bold text-navy-950 flex items-center gap-1.5">
                    Sri Shantiniketan CBSE School, Nandyal
                    <CheckCircle className="w-4 h-4 text-blue-600 fill-blue-600 text-white shrink-0" />
                  </h3>
                  <p className="text-xs text-slate-600">
                    Official Page • @shantiniketancbsendl • CBSE Affiliation No: 130730
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed">
                Connect with our dynamic educational ecosystem on Facebook. Parents and prospective guardians can interact with live session announcements, science exhibition videos, campus celebrations, and principal messages.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                  <span className="text-lg font-black text-blue-600 block">Active</span>
                  <span className="text-[11px] font-semibold text-slate-500">Parent Community</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center">
                  <span className="text-lg font-black text-navy-900 block">Daily</span>
                  <span className="text-[11px] font-semibold text-slate-500">Campus Stories</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                  <span className="text-lg font-black text-gold-600 block">100%</span>
                  <span className="text-[11px] font-semibold text-slate-500">Verified Updates</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.facebook.com/shantiniketancbsendl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Open Official Facebook Page Directly</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Embedded Facebook Page Iframe Container */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[500px] bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden p-2">
                <iframe
                  title="Sri Shantiniketan CBSE School Facebook Feed"
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshantiniketancbsendl%2F&tabs=timeline&width=500&height=550&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="550"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="rounded-xl"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-2 text-center">
                Interactive Facebook Page Plugin connected to{" "}
                <a
                  href="https://www.facebook.com/shantiniketancbsendl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold"
                >
                  facebook.com/shantiniketancbsendl
                </a>
              </p>
            </div>
          </div>
        )}

        {/* Community Bar Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-navy-900 to-indigo-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-blue-800/40">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
              <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display">
                Follow Us on Facebook For Campus Announcements
              </h3>
              <p className="text-xs sm:text-sm text-blue-200 mt-0.5">
                Don&apos;t miss school holidays, exam schedules, and event photo albums.
              </p>
            </div>
          </div>

          <a
            href="https://www.facebook.com/shantiniketancbsendl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold-400 hover:bg-gold-300 text-navy-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform hover:scale-105 active:scale-95 shrink-0"
          >
            <span>Visit @shantiniketancbsendl</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

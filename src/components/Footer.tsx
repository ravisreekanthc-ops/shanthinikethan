import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ShieldCheck,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Heart,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-28 sm:pb-20 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-navy-800">
          {/* Institutional Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 to-amber-600 text-navy-950 flex items-center justify-center font-bold text-lg shadow-md">
                <GraduationCap className="w-5 h-5 text-navy-950" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white font-display">
                  SRI SHANTINIKETAN
                </span>
                <span className="text-[10px] font-semibold text-gold-400 uppercase tracking-widest -mt-0.5">
                  CBSE School • Nandyal
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Sri Shantiniketan CBSE School is an elite co-educational institution 
              committed to academic brilliance, IIT-JEE/NEET foundation, moral character, and 
              experiential STEM innovation in Nandyal, Andhra Pradesh.
            </p>

            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-navy-900 border border-navy-800 text-xs text-gold-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>CBSE Affiliation: 130730 | School Code: 57222</span>
            </div>
          </div>

          {/* Academic Pathways */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><Link href="/#academics" className="hover:text-gold-400 transition-colors">Early Childhood / Montessori</Link></li>
              <li><Link href="/#academics" className="hover:text-gold-400 transition-colors">Primary School (Grades 1-5)</Link></li>
              <li><Link href="/#academics" className="hover:text-gold-400 transition-colors">Middle School (Grades 6-8)</Link></li>
              <li><Link href="/#academics" className="hover:text-gold-400 transition-colors">Secondary CBSE (Class 9 & 10)</Link></li>
              <li><Link href="/#academics" className="hover:text-gold-400 transition-colors">Integrated IIT-JEE Foundation</Link></li>
              <li><Link href="/#academics" className="hover:text-gold-400 transition-colors">Robotics & Makerspace Lab</Link></li>
            </ul>
          </div>

          {/* Regulatory & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Mandatory Compliance
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/mandatory-disclosure" className="text-gold-400 hover:underline flex items-center gap-1 font-semibold">
                  <span>CBSE Appendix IX Disclosure</span>
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </li>
              <li><Link href="/mandatory-disclosure" className="hover:text-gold-400 transition-colors">OASIS / SARAS Submission</Link></li>
              <li><Link href="/mandatory-disclosure" className="hover:text-gold-400 transition-colors">Building & Fire Safety NOC</Link></li>
              <li><Link href="/mandatory-disclosure" className="hover:text-gold-400 transition-colors">Drinking Water Certificate</Link></li>
              <li><Link href="/mandatory-disclosure" className="hover:text-gold-400 transition-colors">School Management Committee</Link></li>
              <li><Link href="/mandatory-disclosure" className="hover:text-gold-400 transition-colors">3-Year Class X Board Results</Link></li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Campus Desk
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold-400 mt-0.5 shrink-0" />
                <span>Near Santhiram College Road, Nandyal, Andhra Pradesh - 518501</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href="tel:+919063966896" className="hover:text-gold-400 text-slate-200 font-semibold">
                  +91 90639 66896
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <span>+91 8514 246896</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                <a href="mailto:info@srishantiniketancbse.com" className="hover:text-gold-400 truncate">
                  info@srishantiniketancbse.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Technology Partner Credit */}
        <div className="pt-8 border-t border-navy-900/80 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © 2026 Sri Shantiniketan Educational Society, Nandyal. All rights reserved.
          </div>

          {/* Technology Partner Attribution */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-slate-400 text-center">
            <span>Technology Partner • Designed &amp; Developed by</span>
            <a
              href="https://mokshadigital.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-gold-400 hover:text-gold-300 underline underline-offset-2 transition-colors inline-flex items-center gap-1 ml-1"
            >
              <span>MOKSHA DIGITAL TECHNOLOGIES PRIVATE LIMITED</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/mandatory-disclosure" className="hover:text-slate-400">Public Disclosures</Link>
            <span>•</span>
            <Link href="/#privacy" className="hover:text-slate-400">Privacy Policy</Link>
            <span>•</span>
            <Link href="/#terms" className="hover:text-slate-400">Terms of Admission</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import MandatoryDisclosure from "@/components/MandatoryDisclosure";
import { ShieldCheck, CheckCircle2, Award, Printer, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBSE Mandatory Public Disclosure (Appendix IX) | Sri Shantiniketan Nandyal",
  description:
    "Official Mandatory Public Disclosure of Sri Shantiniketan CBSE School, Nandyal (Affiliation No: 130730). Formatted in compliance with CBSE Circular No. 03/2021 Appendix IX.",
};

export default function MandatoryDisclosurePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to School Portal Homepage</span>
          </Link>

          <span className="text-xs text-slate-500 font-semibold">
            CBSE Affiliation: 130730 | School Code: 57222
          </span>
        </div>

        {/* Official Statutory Banner */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-900 text-xs font-bold uppercase tracking-wider border border-gold-300">
                <ShieldCheck className="w-4 h-4 text-gold-700" />
                Appendix IX Statutory Compliance Portal
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-950 font-display">
                Sri Shantiniketan CBSE School, Nandyal
              </h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Public Disclosure Documents mandated by Central Board of Secondary Education under Affiliation Bye-Laws 2018.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://saras.cbse.gov.in/oasis/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-navy-900 text-white hover:bg-navy-800 transition-colors shadow-sm"
              >
                Official OASIS Link
              </a>
            </div>
          </div>

          {/* Quick Summary Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Affiliation Status:</span>
              <strong className="text-navy-950">Provisional up to Secondary</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Affiliation Period:</span>
              <strong className="text-navy-950">Valid through 2029</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Campus Land Area:</span>
              <strong className="text-navy-950">5+ Acres (Registered)</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 block text-[11px]">Society / Trust:</span>
              <strong className="text-navy-950">Sri Shantiniketan Society</strong>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Component */}
        <MandatoryDisclosure />
      </div>
    </div>
  );
}

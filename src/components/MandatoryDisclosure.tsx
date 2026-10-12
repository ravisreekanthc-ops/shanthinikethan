"use client";

import React, { useState, useMemo } from "react";
import {
  DISCLOSURE_DATA,
  DisclosureItem,
} from "@/data/disclosureData";
import {
  Search,
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Filter,
  CheckCircle,
  Eye,
  AlertCircle,
  X,
  FileCheck2,
} from "lucide-react";

type CategoryFilter =
  | "All"
  | "General"
  | "Statutory Certificates"
  | "Academics & Fee"
  | "Staff & Faculty"
  | "Infrastructure";

export default function MandatoryDisclosure() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [previewDoc, setPreviewDoc] = useState<DisclosureItem | null>(null);

  const categories: CategoryFilter[] = [
    "All",
    "Statutory Certificates",
    "Academics & Fee",
    "General",
    "Staff & Faculty",
    "Infrastructure",
  ];

  const filteredItems = useMemo(() => {
    return DISCLOSURE_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="mandatory-disclosure" className="py-16 sm:py-24 bg-slate-50/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with CBSE Regulatory Context */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            CBSE Appendix IX Regulatory Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 font-display tracking-tight">
            Mandatory Public Disclosure Repository
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In compliance with Central Board of Secondary Education (CBSE) Circular No. 03/2021, 
            Sri Shantiniketan CBSE School, Nandyal (Affiliation No: 130730) provides complete, 
            publicly auditable access to all institutional approvals, safety certificates, and academic metrics.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="glass-panel rounded-2xl p-5 mb-8 shadow-sm border border-slate-200 space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Live Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by certificate name, code (e.g. STAT-01, Fire Safety, Fee, Land)..."
                className="w-full pl-10 pr-4 py-2.5 min-h-[44px] rounded-xl border border-slate-300 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-navy-900 bg-white shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 min-w-[32px] min-h-[32px] flex items-center justify-center"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Result Counter */}
            <div className="text-xs font-bold text-slate-600 whitespace-nowrap bg-white px-3.5 py-2.5 rounded-xl border border-slate-200">
              Showing <span className="text-navy-900 font-extrabold">{filteredItems.length}</span> of{" "}
              {DISCLOSURE_DATA.length} Verified Documents
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar touch-pan-x">
            <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap min-h-[36px] transition-all active:scale-95 ${
                  selectedCategory === cat
                    ? "bg-navy-900 text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid / Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Card Header: Category & Code */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-navy-50 text-navy-800 border border-navy-100 shrink-0">
                    {item.code}
                  </span>
                  <div className="flex items-center gap-1.5 overflow-hidden">
                    {item.officialName && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200 truncate hidden sm:inline-block max-w-[130px]">
                        {item.officialName}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      {item.verifiedStatus}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-navy-950 group-hover:text-navy-800 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer: Metadata & Actions */}
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Type: <strong className="text-slate-700">{item.documentType}</strong></span>
                  {item.fileSize && <span>Size: {item.fileSize}</span>}
                  <span>Updated: {item.lastUpdated}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPreviewDoc(item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-navy-700" />
                    <span>View Audit Copy</span>
                  </button>

                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={item.documentType !== "OASIS Report"}
                    className="inline-flex items-center justify-center p-2 rounded-lg text-xs font-bold text-navy-900 bg-gold-400 hover:bg-gold-500 transition-colors shadow-sm"
                    title={`Download ${item.title}`}
                  >
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl max-w-lg mx-auto">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-navy-900">No matching disclosure documents</h4>
            <p className="text-xs text-slate-600 mt-1">
              Try adjusting your search query or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-4 px-4 py-2 bg-navy-900 text-white rounded-lg text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CBSE External OASIS Direct Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gold-400 font-bold text-sm">
              <FileCheck2 className="w-4 h-4" />
              <span>Official CBSE OASIS Portal Verification</span>
            </div>
            <p className="text-xs text-slate-300 max-w-xl">
              Cross-verify Sri Shantiniketan CBSE School on the national SARAS / OASIS database using School Code 57222 and Affiliation No 130730.
            </p>
          </div>
          <a
            href="https://saras.cbse.gov.in/oasis/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gold-400 hover:bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105 shrink-0"
          >
            <span>Visit SARAS OASIS</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Modal Document Viewer Dialog */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white w-full max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 p-4 sm:p-6 space-y-4 my-auto max-h-[92vh] flex flex-col justify-between overflow-y-auto">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-navy-100 text-navy-800">
                  {previewDoc.code} • {previewDoc.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-navy-950 mt-1 font-display">
                  {previewDoc.title}
                </h3>
              </div>
              <button
                onClick={() => setPreviewDoc(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors shrink-0"
                aria-label="Close document modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
              <p>{previewDoc.description}</p>
              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200 text-[11px] text-slate-600">
                <div><strong>CBSE Regulatory Status:</strong> {previewDoc.verifiedStatus}</div>
                <div><strong>Last Audit Date:</strong> {previewDoc.lastUpdated}</div>
                <div><strong>File Format:</strong> {previewDoc.documentType}</div>
                <div><strong>Digital Signature:</strong> Verified by Principal / Correspondent</div>
              </div>
            </div>

            {/* Embedded Document Viewer */}
            <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[380px] max-h-[60vh] flex flex-col items-center justify-center">
              {previewDoc.documentType === "PDF" ? (
                <iframe
                  src={previewDoc.fileUrl}
                  title={previewDoc.title}
                  className="w-full h-[450px] border-0"
                />
              ) : previewDoc.documentType === "Excel" ? (
                <div className="p-8 text-center space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl shadow-inner">
                    XLS
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy-950">{previewDoc.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">Official Excel Spreadsheet • {previewDoc.fileSize}</p>
                  </div>
                  <a
                    href={previewDoc.fileUrl}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Excel Sheet ({previewDoc.fileSize})</span>
                  </a>
                </div>
              ) : (
                <div className="p-8 text-center space-y-3">
                  <ExternalLink className="w-12 h-12 text-navy-600 mx-auto" />
                  <div>
                    <h4 className="text-sm font-bold text-navy-950">{previewDoc.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">External CBSE National Database Record</p>
                  </div>
                  <a
                    href={previewDoc.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs shadow-md transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open External Portal</span>
                  </a>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between gap-3 pt-2">
              <span className="text-[11px] text-slate-500 font-mono truncate">
                File: {previewDoc.officialName || previewDoc.fileUrl.split("/").pop()}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setPreviewDoc(null)}
                  className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <a
                  href={previewDoc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={previewDoc.documentType !== "OASIS Report"}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-navy-950 bg-gold-400 hover:bg-gold-500 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

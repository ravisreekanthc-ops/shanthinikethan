import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import QuickActionDock from "@/components/QuickActionDock";
import MarketingAnnouncementBar from "@/components/MarketingAnnouncementBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://srishantiniketancbse.com"),
  title: "Sri Shantiniketan CBSE School, Nandyal | Affiliation No: 130730",
  description:
    "Official portal of Sri Shantiniketan CBSE School, Nandyal (Affiliation No: 130730). Offering holistic CBSE education from Nursery to Grade X with integrated IIT-JEE/NEET foundation, 5-acre eco-campus, and 100% board pass results.",
  keywords: [
    "Sri Shantiniketan CBSE School Nandyal",
    "CBSE School in Nandyal",
    "Best school in Nandyal",
    "CBSE Affiliation 130730",
    "IIT JEE Foundation School Nandyal",
    "Mandatory CBSE Disclosure Nandyal",
    "School admissions Nandyal 2026",
  ],
  authors: [{ name: "Sri Shantiniketan Educational Society" }],
  openGraph: {
    title: "Sri Shantiniketan CBSE School, Nandyal | Admissions 2026-27",
    description:
      "Nurturing Inquiring Minds, Building Resilient Characters. Explore our 5-acre campus, IIT-JEE foundation labs, and 100% CBSE pass track record in Nandyal.",
    url: "https://srishantiniketancbse.com",
    siteName: "Sri Shantiniketan CBSE School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/slogo2.png",
        width: 800,
        height: 800,
        alt: "Sri Shantiniketan CBSE School Crest Logo",
      },
    ],
  },
  icons: {
    icon: "/images/slogo2.png",
    apple: "/images/slogo2.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaJsonLd = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Sri Shantiniketan CBSE School",
    alternateName: "Sri Shantiniketan School Nandyal",
    url: "https://srishantiniketancbse.com",
    logo: "https://www.srishantiniketancbse.com/images/slogo2.png",
    description:
      "Premier CBSE-affiliated co-educational school in Nandyal, Andhra Pradesh, offering education from Pre-Primary through Class X with integrated IIT-JEE foundation.",
    identifier: "CBSE Affiliation No: 130730",
    schoolCode: "57222",
    telephone: "+91-90639-66896",
    email: "info@srishantiniketancbse.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Santhiram College Road, Main Enclave",
      addressLocality: "Nandyal",
      addressRegion: "Andhra Pradesh",
      postalCode: "518501",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "15.4875",
      longitude: "78.4842",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "CBSE Affiliated",
      recognizedBy: {
        "@type": "Organization",
        name: "Central Board of Secondary Education (CBSE)",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:30",
        closes: "17:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/shantiniketancbsendl/",
      "https://youtube.com/@srishantiniketancbse",
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <MarketingAnnouncementBar />
        <Navigation />
        <main className="flex-1">{children}</main>
        <QuickActionDock />
        <Footer />
      </body>
    </html>
  );
}

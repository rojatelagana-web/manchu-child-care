import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manchuchildcare.com"),
  title: "Manchu Child Care | 24-Hour Pediatric Hospital in Sompeta, Andhra Pradesh",
  description:
    "Expert pediatric care for children in Sompeta. Open 24 hours. Experienced doctor, friendly staff, and affordable treatment. Call 090524 51020.",
  keywords: [
    "child care hospital sompeta",
    "pediatric doctor sompeta",
    "children hospital andhra pradesh",
    "24 hour child hospital sompeta",
    "manchu child care",
  ],
  authors: [{ name: "Manchu Child Care" }],
  openGraph: {
    title: "Manchu Child Care — Sompeta's Trusted Pediatric Hospital",
    description:
      "24-hour expert child care in Sompeta, Andhra Pradesh. Experienced pediatrician, warm staff, affordable costs.",
    locale: "en_IN",
    type: "website",
    siteName: "Manchu Child Care",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manchu Child Care — Sompeta's Trusted Pediatric Hospital",
    description:
      "24-hour expert child care in Sompeta, Andhra Pradesh. Call 090524 51020.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Pediatrician",
  name: "Manchu Child Care",
  image: "/images/hero-child.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opp. Jayaramayya Hospital, Indiramma Peta",
    addressLocality: "Sompeta",
    addressRegion: "Andhra Pradesh",
    postalCode: "532284",
    addressCountry: "IN",
  },
  telephone: "+91-90524-51020",
  openingHours: "Mo-Su 00:00-24:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    reviewCount: "30",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        {children}
        <Script
          id="ld-json-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

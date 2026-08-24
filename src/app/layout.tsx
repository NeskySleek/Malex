import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const display = Lora({ variable: "--font-display", subsets: ["latin"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://www.malexinternationalschool.com"),
  title: { default: "Malex International School", template: "%s · Malex International School" },
  description: "A nurturing international school for Crèche, Kindergarten (KG), Basic, and Secondary learners in Enugu, Nigeria.",
  applicationName: "Malex International School",
  keywords: ["Malex International School", "international school in Enugu", "private school in Enugu", "crèche Enugu", "kindergarten KG Enugu", "basic school Enugu", "secondary school Enugu", "school in Uwani Enugu"],
  authors: [{ name: "Malex International School" }],
  creator: "Malex International School",
  publisher: "Malex International School",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    siteName: "Malex International School",
    title: "Malex International School",
    description: "A school built around possibility.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Malex International School",
    description: "A school built around possibility.",
  },
};
const schoolSchema = {
  "@context": "https://schema.org",
  "@type": ["School", "EducationalOrganization"],
  name: "Malex International School",
  url: "https://www.malexinternationalschool.com",
  logo: "https://www.malexinternationalschool.com/icon.png",
  image: "https://www.malexinternationalschool.com/opengraph-image.png",
  description: "A nurturing international school for Crèche, Kindergarten (KG), Basic, and Secondary learners in Enugu, Nigeria.",
  email: "contact@malexinternationalschool.com",
  telephone: ["+2348037506913", "+2348038947795", "+234816759432"],
  address: { "@type": "PostalAddress", streetAddress: "2A Niger Close, Uwani", addressLocality: "Enugu", addressRegion: "Enugu State", addressCountry: "NG" },
  areaServed: { "@type": "City", name: "Enugu" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${body.variable} ${display.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolSchema).replace(/</g, "\\u003c") }}/><SmoothScroll />{children}</body></html>; }

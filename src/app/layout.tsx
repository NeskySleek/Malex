import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"] });
const display = Lora({ variable: "--font-display", subsets: ["latin"] });
export const metadata: Metadata = { title: { default: "Malex International School", template: "%s · Malex International School" }, description: "A nurturing international school for crèche, nursery, primary, and secondary learners in Enugu, Nigeria." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${body.variable} ${display.variable}`}><SmoothScroll />{children}</body></html>; }

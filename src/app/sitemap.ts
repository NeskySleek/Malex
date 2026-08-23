import type { MetadataRoute } from "next";

const siteUrl = "https://www.malexinternationalschool.com";
const lastModified = new Date("2026-08-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified, changeFrequency: "weekly", priority: 1, images: [`${siteUrl}/images/home/hero.jpg`] },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8, images: [`${siteUrl}/images/about/campus.jpg`] },
    { url: `${siteUrl}/admissions`, lastModified, changeFrequency: "monthly", priority: 0.9, images: [`${siteUrl}/images/admissions/campus-stage.jpg`] },
    { url: `${siteUrl}/school-life`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/news`, lastModified, changeFrequency: "weekly", priority: 0.8, images: [`${siteUrl}/images/news/summer-lessons-2025.png`] },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/enroll`, lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}

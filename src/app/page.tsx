import { HomeExperience } from "@/components/home-experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Malex International School | Crèche, KG, Basic & Secondary School in Enugu",
  description: "Discover Malex International School in Uwani, Enugu—nurturing learners from Crèche and Kindergarten (KG) through Basic and Secondary education.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeExperience />;
}

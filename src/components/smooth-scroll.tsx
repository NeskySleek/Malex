"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: { offset: -112 },
      smoothWheel: true,
      lerp: 0.085,
      wheelMultiplier: 0.9,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}

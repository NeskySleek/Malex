"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type MotionValue, useReducedMotion } from "motion/react";

export function FloatingNav({ backgroundColor }: { backgroundColor: string | MotionValue<string> }) {
  const reduceMotion = useReducedMotion();
  return <motion.header className="figma-nav" style={{ backgroundColor }} initial={reduceMotion ? false : { opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }}>
    <nav aria-label="Main navigation"><Link href="/about">About</Link><Link href="/admissions">Admissions</Link><Link href="/school-life">School Life</Link></nav>
    <details className="mobile-figma-menu"><summary aria-label="Open navigation menu"><span/><span/><b className="visually-hidden">Menu</b></summary><div><p className="mobile-menu-eyebrow">Explore Malex</p><Link href="/about">About</Link><Link href="/admissions">Admissions</Link><Link href="/school-life">School Life</Link><Link href="/news">News & Updates</Link><Link href="/contact">Contact Us</Link><Link href="/enroll">Enroll Now</Link><p className="mobile-menu-note">A place to learn, belong,<br/>and become.</p></div></details>
    <Link className="figma-wordmark" href="/" aria-label="Malex International School home"><Image src="/images/brand/malex-logo-rounded.png" alt="" width={46} height={46} priority/></Link>
    <div className="figma-nav-end"><Link href="/news">News</Link><Link href="/contact">Contact Us</Link><Link className="nav-portal" href="/enroll">Enroll Now</Link></div>
  </motion.header>;
}

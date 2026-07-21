"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FloatingNav } from "./floating-nav";

const values = [
  { number: "01", title: "Our purpose", body: "To build capable, compassionate, and curious young people who can contribute meaningfully wherever life takes them." },
  { number: "02", title: "Our approach", body: "We pair academic rigour with attentive teaching, creativity, collaboration, and the values that make achievement matter." },
  { number: "03", title: "Our community", body: "Families, teachers, and learners share responsibility for a culture of respect, belonging, and high expectations." },
];

const team = ["Proprietress", "Principal", "Headmistress", "Admin"];
const reveal = { hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } };

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="home-pill home-pill-filled"><span>{children}</span><span aria-hidden="true">→</span></Link>;
}

function AboutFooter() {
  return <motion.footer className="figma-footer" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .15 }} transition={{ staggerChildren: .16 }}>
    <motion.div className="figma-footer-top" variants={reveal}><p>A trusted place to learn,<br/><em>belong, and become.</em></p><ArrowLink href="/admissions">Begin your journey</ArrowLink></motion.div>
    <motion.div className="figma-footer-grid" variants={reveal}><div><strong>Malex International School</strong><p>Enugu, Nigeria<br/>+234 800 MALEX SCHOOL<br/>hello@malexschool.edu.ng</p></div><div><Link href="/about">About</Link><Link href="/admissions">Admissions</Link></div><div><Link href="/school-life">School Life</Link><Link href="/contact">Contact</Link></div><div><Link href="/login">Log In</Link><Link href="/enroll">Enroll Now</Link><Link href="/contact">Book a school visit</Link></div></motion.div>
    <motion.div className="figma-footer-base" variants={reveal}><span>© {new Date().getFullYear()} Malex International School</span><span>Privacy · Safeguarding · Accessibility</span></motion.div>
  </motion.footer>;
}

export function AboutExperience() {
  const reduceMotion = useReducedMotion();
  const campusRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({ target: campusRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? "0%" : "-8%", reduceMotion ? "0%" : "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, .5, 1], [1.08, 1.02, 1.08]);
  const navBackground = useTransform(scrollY, [0, 520, 760, 1260], ["rgba(255,255,255,.05)", "rgba(87,25,25,.48)", "rgba(0,52,49,.68)", "rgba(0,25,20,.9)"]);

  return <main className="figma-home about-page">
    <FloatingNav backgroundColor={navBackground}/>
    <section className="about-hero">
      <div className="about-hero-wash"/>
      <motion.div className="about-hero-grid" initial="hidden" animate="visible" transition={{ staggerChildren: .13, delayChildren: .18 }}>
        <motion.p className="figma-kicker" variants={reveal}>About Malex</motion.p>
        <motion.h1 variants={reveal} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}>A school built around <em>possibility.</em></motion.h1>
        <motion.p className="about-hero-intro" variants={reveal}>We know children do their best learning when they feel safe, known, and inspired to stretch beyond what they thought possible.</motion.p>
      </motion.div>
    </section>

    <div ref={campusRef} className="about-campus"><motion.div style={{ y: imageY, scale: imageScale }}><Image src="/images/about/campus.jpg" alt="Malex learners walking together through the school campus" fill priority sizes="100vw"/></motion.div><span className="about-campus-caption">A community in motion</span></div>

    <motion.section className="about-belief" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .32 }} transition={{ staggerChildren: .16 }}>
      <motion.p className="figma-kicker" variants={reveal}>What we believe</motion.p>
      <motion.h2 variants={reveal} transition={{ duration: .9, ease: [0.16, 1, 0.3, 1] }}>Education should steady the heart, open the mind, and give every child the courage to begin.</motion.h2>
    </motion.section>

    <section className="about-values">
      {values.map((value, index) => <motion.article key={value.number} initial={reduceMotion ? false : { opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .45 }} transition={{ duration: .65, delay: index * .1, ease: [0.16, 1, 0.3, 1] }} whileHover={reduceMotion ? {} : { y: -9 }}>
        <span>{value.number}</span><h3>{value.title}</h3><p>{value.body}</p><i aria-hidden="true"/>
      </motion.article>)}
    </section>

    <section className="about-team">
      <motion.div className="about-team-heading" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .45 }} transition={{ staggerChildren: .12 }}><motion.p className="figma-kicker" variants={reveal}>Our team</motion.p><motion.h2 variants={reveal}>Meet the<br/>Management Team</motion.h2></motion.div>
      <div className="about-team-grid">{team.map((role, index) => <motion.article key={role} initial={reduceMotion ? false : { opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .22 }} transition={{ duration: .65, delay: index * .08, ease: [0.16, 1, 0.3, 1] }} whileHover={reduceMotion ? {} : { y: -12 }}>
        <div className="about-team-photo"><Image src="/images/about/management.jpg" alt={`${role} at Malex International School`} fill sizes="(max-width: 700px) 100vw, 25vw"/></div><p>{role}</p><h3>Mrs Nkechi</h3>
      </motion.article>)}</div>
    </section>
    <AboutFooter />
  </main>;
}

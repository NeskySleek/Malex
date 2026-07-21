"use client";

import Image from "next/image";
import Link from "next/link";
import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FloatingNav } from "./floating-nav";

const programmes = [
  { number: "01", stage: "Crèche & Nursery", title: "Where wonder begins", image: "/images/home/early-years.jpg", href: "/admissions#learning-stages" },
  { number: "02", stage: "Primary School", title: "Building strong foundations", image: "/images/home/primary.jpg", href: "/admissions#learning-stages" },
  { number: "03", stage: "Secondary School", title: "Finding purpose and voice", image: "/images/home/secondary.jpg", href: "/admissions#learning-stages" },
];

const metrics = [
  [4, "learning stages", (value: number) => `${value}`],
  [1, "teacher–learner focus", (value: number) => `${value}:12`],
  [20, "clubs & activities", (value: number) => `${value}+`],
  [1, "connected community", (value: number) => `${value}`],
];

const collage = [
  ["/images/home/collage-1.jpg", "collage-a"], ["/images/home/primary.jpg", "collage-b"],
  ["/images/home/collage-2.jpg", "collage-c"], ["/images/home/collage-3.jpg", "collage-d"],
  ["/images/home/collage-4.jpg", "collage-e"], ["/images/home/collage-5.jpg", "collage-f"],
];

const reveal = { hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } };

function ArrowLink({ href, children, filled = false }: { href: string; children: React.ReactNode; filled?: boolean }) {
  return <Link href={href} className={filled ? "home-pill home-pill-filled" : "home-pill"}><span>{children}</span><span aria-hidden="true">→</span></Link>;
}

function AnimatedMetric({ target, label, format }: { target: number; label: string; format: (value: number) => string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) return;
    const controls = animate(0, target, {
      duration: 1.35,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target]);

  return <motion.article ref={ref} variants={reveal}><strong>{format(reduceMotion ? target : value)}</strong><span>{label}</span></motion.article>;
}

export function HomeExperience() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(heroProgress, [0, 1], ["0%", reduceMotion ? "0%" : "16%"]);
  const heroTextY = useTransform(heroProgress, [0, 1], ["0%", reduceMotion ? "0%" : "-15%"]);
  const heroOpacity = useTransform(heroProgress, [0, 0.78], [1, reduceMotion ? 1 : 0]);
  const navBackground = useTransform(heroProgress, [0, .72, 1], ["rgba(255,255,255,.045)", "rgba(0,52,49,.56)", "rgba(0,25,20,.88)"]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, { stiffness: 420, damping: 34, mass: .45 });
  const smoothCursorY = useSpring(cursorY, { stiffness: 420, damping: 34, mass: .45 });
  const [showHeroCursor, setShowHeroCursor] = useState(false);

  const moveHeroCursor = (event: React.PointerEvent<HTMLElement>) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a")) {
      setShowHeroCursor(false);
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    cursorX.set(event.clientX - bounds.left - 43);
    cursorY.set(event.clientY - bounds.top - 43);
    setShowHeroCursor(true);
  };

  return <main className="figma-home">
    <section ref={heroRef} className="figma-hero" onPointerMove={moveHeroCursor} onPointerLeave={() => setShowHeroCursor(false)}>
      <motion.div className="figma-hero-media" style={{ y: heroImageY }}><Image src="/images/home/hero.jpg" alt="Malex learners and teachers standing together on campus" fill priority sizes="100vw" /></motion.div>
      <div className="figma-hero-overlay" />
      <FloatingNav backgroundColor={navBackground}/>
      <motion.div className="figma-hero-content" style={{ y: heroTextY, opacity: heroOpacity }} initial="hidden" animate="visible" transition={{ staggerChildren: .12, delayChildren: .18 }}>
        <motion.h1 variants={reveal} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}><span>We believe</span><span>every child</span><em>can flourish.</em></motion.h1>
        <motion.div variants={reveal} transition={{ duration: .7 }}><ArrowLink href="/about">Discover Malex</ArrowLink></motion.div>
      </motion.div>
      <motion.p className="hero-scroll-cue" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>Scroll to explore <span>↓</span></motion.p>
      <motion.div className="hero-cursor" aria-hidden="true" style={{ x: smoothCursorX, y: smoothCursorY }} animate={{ opacity: showHeroCursor ? 1 : 0, scale: showHeroCursor ? 1 : .72 }} transition={{ opacity: { duration: .16 }, scale: { duration: .22, ease: [0.16, 1, 0.3, 1] } }}><span>Explore</span><b>↗</b></motion.div>
    </section>

    <motion.section className="figma-intro" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .3 }} transition={{ staggerChildren: .14 }}>
      <motion.p className="figma-kicker" variants={reveal}>A school for every stage</motion.p>
      <motion.h2 variants={reveal}>Curious minds are<br/>our best hope for<br/><em>the future.</em></motion.h2>
      <motion.div variants={reveal} className="figma-intro-copy"><p>Malex is a joyful, ambitious learning community for children from crèche through secondary school. We combine strong academic foundations with creativity, character, and care.</p><ArrowLink href="/enroll" filled>Enroll Now</ArrowLink></motion.div>
    </motion.section>

    <section className="figma-programmes">
      {programmes.map((item, index) => <motion.article key={item.stage} className="figma-programme" initial={reduceMotion ? false : { y: 34, scale: 1.025 }} whileInView={{ y: 0, scale: 1 }} viewport={{ once: false, amount: .08 }} transition={{ duration: .75, delay: index * .1, ease: [0.16, 1, 0.3, 1] }}>
        <Link href={item.href}><Image src={item.image} alt={`${item.stage} learners at Malex`} fill sizes="(max-width: 800px) 100vw, 33vw"/><div className="programme-shade"/><motion.span className="programme-number" whileHover={reduceMotion ? {} : { x: 8 }}>{item.number}</motion.span><div className="programme-copy"><p>{item.stage}</p><h3>{item.title}</h3><span className="programme-explore">Explore <b>→</b></span></div></Link>
      </motion.article>)}
    </section>

    <motion.section className="figma-learning" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .2 }} transition={{ staggerChildren: .18 }}>
      <motion.div className="learning-frame" variants={{ hidden: { opacity: 0, x: -56, rotate: -1.5 }, visible: { opacity: 1, x: 0, rotate: 0 } }} transition={{ duration: .85, ease: [0.16, 1, 0.3, 1] }}><Image src="/images/home/classroom.jpg" alt="Malex pupils enjoying a classroom lesson" fill sizes="(max-width: 800px) 100vw, 55vw"/><span className="frame-corner frame-corner-one"/><span className="frame-corner frame-corner-two"/></motion.div>
      <motion.div className="learning-copy" variants={{ hidden: { opacity: 0, x: 48 }, visible: { opacity: 1, x: 0 } }} transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}><p className="figma-kicker">An education for life</p><h2>Learning that lives<br/>beyond the page.</h2><p>From questions asked in class to ideas tested in the world, Malex learners grow into thoughtful, capable young people.</p><ArrowLink href="/school-life" filled>Explore</ArrowLink></motion.div>
    </motion.section>

    <section className="figma-metrics"><motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: .35 }} transition={{ staggerChildren: .12 }}><motion.p className="figma-kicker" variants={reveal}>Malex at a glance</motion.p><motion.h2 variants={reveal}>Proven Excellence<br/>in Education</motion.h2><motion.p className="metric-intro" variants={reveal}>A quick snapshot of who we are and what we have built together.</motion.p><div className="metric-grid">{metrics.map(([target,label,format])=><AnimatedMetric target={target as number} label={label as string} format={format as (value: number) => string} key={label as string}/>)}</div></motion.div></section>

    <section className="figma-admissions"><motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: .35 }} transition={{ staggerChildren: .12 }}><motion.p className="figma-kicker" variants={reveal}>Admissions</motion.p><motion.h2 variants={reveal}>There is a place for<br/>your story at Malex.</motion.h2><motion.div variants={reveal}><ArrowLink href="/admissions" filled>Begin your journey</ArrowLink></motion.div></motion.div><div className="photo-collage" aria-label="A collage of Malex school life">{collage.map(([src,className],index)=><motion.div className={className} key={src+index} initial={reduceMotion ? false : { opacity: 0, y: 120, rotate: index%2 ? 18 : -12 }} whileInView={{ opacity: 1, y: 0, rotate: index%2 ? 10 : -6 }} viewport={{ once: false, amount: .05 }} transition={{ type: "spring", stiffness: 90, damping: 17, delay: index*.08 }} whileHover={reduceMotion ? {} : { y: -36, rotate: 0, scale: 1.055, zIndex: 20 }} whileTap={reduceMotion ? {} : { scale: .98 }}><Image src={src} alt={`Malex school life ${index + 1}`} fill sizes="260px"/></motion.div>)}</div></section>

    <motion.footer className="figma-footer" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .15 }} transition={{ staggerChildren: .16 }}><motion.div className="figma-footer-top" variants={reveal}><p>A trusted place to learn,<br/><em>belong, and become.</em></p><ArrowLink href="/enroll" filled>Begin your journey</ArrowLink></motion.div><motion.div className="figma-footer-grid" variants={reveal}><div><strong>Malex International School</strong><p>Enugu, Nigeria<br/>+234 800 MALEX SCHOOL<br/>hello@malexschool.edu.ng</p></div><div><Link href="/about">About</Link><Link href="/admissions">Admissions</Link></div><div><Link href="/school-life">School Life</Link><Link href="/contact">Contact</Link></div><div><Link href="/login">Log In</Link><Link href="/enroll">Enroll Now</Link><Link href="/contact">Book a school visit</Link></div></motion.div><motion.div className="figma-footer-base" variants={reveal}><span>© {new Date().getFullYear()} Malex International School</span><span>Privacy · Safeguarding · Accessibility</span></motion.div></motion.footer>
  </main>;
}

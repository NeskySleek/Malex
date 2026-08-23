"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FloatingNav } from "./floating-nav";
import { SystemFooter } from "./institutional-pages";
import { schoolNews } from "@/data/school-news";

const reveal = { hidden: { opacity: 0, y: 42 }, visible: { opacity: 1, y: 0 } };

export function NewsExperience() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const navBackground = useTransform(scrollY, [0, 420], ["rgba(255,255,255,.06)", "rgba(0,25,20,.94)"]);
  const [featured, ...updates] = schoolNews;

  return <main className="figma-home news-page">
    <section className="news-hero">
      <FloatingNav backgroundColor={navBackground}/>
      <motion.div className="news-hero-copy" initial="hidden" animate="visible" transition={{staggerChildren:.12,delayChildren:.12}}><motion.p variants={reveal} className="figma-kicker">News & school updates</motion.p><motion.h1 variants={reveal}>What is<br/><em>happening at Malex.</em></motion.h1><motion.p variants={reveal}>Stories, milestones, announcements, and moments from across our learning community.</motion.p></motion.div>
    </section>
    <section className="news-featured"><motion.div className="news-featured-image news-poster" initial={reduceMotion?false:{clipPath:"inset(8% 8% 8% 8%)"}} whileInView={{clipPath:"inset(0% 0% 0% 0%)"}} viewport={{once:false,amount:.2}} transition={{duration:.9,ease:[.16,1,.3,1]}}><Image src={featured.image} alt={featured.title} fill priority sizes="(max-width: 800px) 100vw, 58vw"/></motion.div><motion.article id={featured.slug} initial="hidden" whileInView="visible" viewport={{once:false,amount:.35}} transition={{staggerChildren:.1}}><motion.p variants={reveal} className="news-meta">{featured.category} · {featured.published}</motion.p><motion.h2 variants={reveal}>{featured.title}</motion.h2><motion.p variants={reveal}>{featured.excerpt}</motion.p><motion.div variants={reveal}><Link href="/enroll">Enroll now <span>↗</span></Link></motion.div></motion.article></section>
    <section className="news-archive"><div className="news-archive-heading"><p className="figma-kicker">From around the school</p><h2>More stories.<br/><em>More moments.</em></h2></div><div className="news-archive-grid">{updates.map((item,index)=><motion.article id={item.slug} key={item.slug} initial={reduceMotion?false:{opacity:0,y:48}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.65,delay:(index%3)*.08}}><Link href={`#${item.slug}`}><div><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, 33vw"/><span>Read update ↗</span></div><p className="news-meta">{item.category} · {item.published}</p><h3>{item.title}</h3><p>{item.excerpt}</p></Link></motion.article>)}</div></section>
    <SystemFooter/>
  </main>;
}

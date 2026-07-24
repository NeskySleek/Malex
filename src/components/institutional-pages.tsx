"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FloatingNav } from "./floating-nav";

const reveal = { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } };
const stages = [
  ["01", "Crèche", "Warm, responsive care and purposeful play for our youngest learners."],
  ["02", "Nursery", "Language, confidence, friendship, and discovery through play-led learning."],
  ["03", "Primary", "Strong literacy, numeracy, creativity, and habits of independent thought."],
  ["04", "Secondary", "Rigorous study, mentorship, leadership, and preparation for life beyond school."],
];
const pursuits = [
  ["Skills", "Public speaking", "Creative writing", "Digital literacy", "Leadership"],
  ["Trades", "Culinary arts", "Fashion & textiles", "Woodwork", "Photography"],
  ["Clubs", "Robotics", "Drama", "Chess", "Music & choir"],
];
const activities = [
  ["Inter-house sports", "Competition becomes a lesson in teamwork, resilience, and school spirit.", "/images/home/primary.jpg"],
  ["Excursions", "The classroom expands into museums, nature, workplaces, and the wider city.", "/images/community.jpg"],
  ["Cultural days", "Learners celebrate language, dress, food, music, and the stories that shape us.", "/images/home/collage-5.jpg"],
  ["Graduation ceremonies", "Milestones are honoured with families, teachers, and the whole community.", "/images/home/collage-4.jpg"],
  ["Holiday celebrations", "Shared traditions create joyful memories and a deep sense of belonging.", "/images/home/collage-1.jpg"],
];

function Pill({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <Link className={`system-pill ${light ? "system-pill-light" : ""}`} href={href}><span>{children}</span><b aria-hidden>→</b></Link>;
}

function PageNav() {
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 420], ["rgba(255,255,255,.055)", "rgba(0,25,20,.92)"]);
  return <FloatingNav backgroundColor={background}/>;
}

export function SystemFooter() {
  return <motion.footer className="figma-footer system-footer" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .12 }} transition={{ staggerChildren: .14 }}>
    <motion.div className="figma-footer-top" variants={reveal}><p>A trusted place to learn,<br/><em>belong, and become.</em></p><Pill href="/enroll">Begin your journey</Pill></motion.div>
    <motion.div className="figma-footer-grid" variants={reveal}><div><strong>Malex International School</strong><p>Enugu, Nigeria<br/>+234 800 MALEX SCHOOL<br/>hello@malexschool.edu.ng</p></div><div><Link href="/about">About</Link><Link href="/admissions">Admissions</Link></div><div><Link href="/school-life">School Life</Link><Link href="/contact">Contact Us</Link></div><div><Link href="/login">Log In</Link><Link href="/enroll">Enroll Now</Link><Link href="/contact">Book a school visit</Link></div></motion.div>
    <motion.div className="figma-footer-base" variants={reveal}><span>© {new Date().getFullYear()} Malex International School</span><span>Privacy · Safeguarding · Accessibility</span></motion.div>
  </motion.footer>;
}

function EditorialHero({ eyebrow, title, accent, intro }: { eyebrow: string; title: string; accent: string; intro: string }) {
  return <section className="system-hero"><motion.div initial="hidden" animate="visible" transition={{ staggerChildren: .12, delayChildren: .12 }}><motion.p variants={reveal} className="figma-kicker">{eyebrow}</motion.p><motion.h1 variants={reveal}>{title} <em>{accent}</em></motion.h1><motion.p variants={reveal} className="system-hero-intro">{intro}</motion.p></motion.div></section>;
}

export function AdmissionsExperience() {
  const reduce = useReducedMotion();
  return <main className="figma-home system-page"><PageNav/><EditorialHero eyebrow="Our learning stages" title="One school." accent="Four distinct beginnings." intro="Each learning stage has its own rhythm, expectations, and opportunities—held together by one ambitious vision for every child."/>
    <motion.div className="system-wide-image" initial={reduce ? false : { clipPath: "inset(8% 8% 8% 8%)" }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }} viewport={{ once: false, amount: .15 }} transition={{ duration: 1, ease: [0.16,1,0.3,1] }}><Image src="/images/admissions/campus-stage.jpg" alt="Malex learners gathered on campus" fill priority sizes="100vw"/></motion.div>
    <motion.section className="system-belief" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .3 }} transition={{ staggerChildren: .12 }}><motion.p variants={reveal} className="figma-kicker">What we believe</motion.p><motion.h2 variants={reveal}>The right challenge, at the right moment, can change how a young person sees themselves.</motion.h2></motion.section>
    <section id="learning-stages" className="stage-grid">{stages.map((stage, i) => <motion.article key={stage[1]} initial={reduce ? false : { opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .45 }} transition={{ duration: .65, delay: i*.08 }}><span>{stage[0]}</span><h3>{stage[1]}</h3><p>{stage[2]}</p><div><Pill href={`/enroll?stage=${stage[1].toLowerCase()}`} light>Enroll</Pill><Link href="/contact">Ask about →</Link></div></motion.article>)}</section>
    <motion.section className="journey-steps" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .25 }} transition={{ staggerChildren: .12 }}><motion.div variants={reveal}><p className="figma-kicker">Your admissions journey</p><h2>Simple steps.<br/><em>Personal guidance.</em></h2></motion.div><div>{[["01","Discover","Explore our stages, speak with admissions, and arrange a visit."],["02","Apply","Tell us about your learner and share the requested documents."],["03","Join us","Receive a decision and clear guidance on enrolment and next steps."]].map(x=><motion.article variants={reveal} key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></motion.article>)}</div><motion.div variants={reveal}><Pill href="/enroll">Begin your journey</Pill></motion.div></motion.section><SystemFooter/></main>;
}

export function SchoolLifeExperience() {
  const reduce = useReducedMotion();
  return <main className="figma-home system-page life-page"><PageNav/><EditorialHero eyebrow="School life" title="Find what moves you." accent="Then take it further." intro="Beyond the timetable, learners build confidence through practice, friendship, service, performance, and play."/>
    <section id="skills" className="pursuit-section"><motion.div initial="hidden" whileInView="visible" viewport={{ once:false, amount:.35 }} transition={{ staggerChildren:.12 }}><motion.p variants={reveal} className="figma-kicker">Skills, trades & clubs</motion.p><motion.h2 variants={reveal}>More than one way<br/>to <em>shine.</em></motion.h2></motion.div><div className="pursuit-grid">{pursuits.map((group, i)=><motion.article key={group[0]} initial={reduce?false:{opacity:0,y:48}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.35}} transition={{delay:i*.1}}><span>0{i+1}</span><h3>{group[0]}</h3><ul>{group.slice(1).map(item=><li key={item}>{item}<b>↗</b></li>)}</ul></motion.article>)}</div></section>
    <section className="activities-section"><div className="activities-heading"><p className="figma-kicker">Shared moments</p><h2>Activities that become <em>memories.</em></h2></div><div className="activity-list">{activities.map((item,i)=><motion.article key={item[0]} initial={reduce?false:{opacity:0,y:55}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.25}} transition={{duration:.7}}><div className="activity-photo"><Image src={item[2]} alt={`Malex ${item[0]}`} fill sizes="(max-width: 800px) 100vw, 42vw"/></div><span>0{i+1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div></motion.article>)}</div></section><SystemFooter/></main>;
}

function ContactForm({ enrollment = false }: { enrollment?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <form className="malex-form" onSubmit={submit}>{enrollment && <><label>Child’s full name<input required name="childName"/></label><label>Learning stage<select required name="stage" defaultValue=""><option value="" disabled>Select a stage</option><option>Crèche</option><option>Nursery</option><option>Primary</option><option>Secondary</option></select></label></>}<label>{enrollment ? "Parent or guardian" : "Your name"}<input required name="name" autoComplete="name"/></label><label>Email address<input required type="email" name="email" autoComplete="email"/></label><label>Phone number<input required type="tel" name="phone" autoComplete="tel"/></label><label className="form-wide">{enrollment ? "Tell us about your child" : "How can we help?"}<textarea required name="message" rows={5}/></label><button type="submit">{sent ? "Thank you — we’ll be in touch" : enrollment ? "Send enrolment enquiry →" : "Send enquiry →"}</button><p className="form-status" aria-live="polite">{sent ? "Your enquiry has been recorded in this preview." : "We usually respond within one school day."}</p></form>;
}

export function ContactExperience() {
  return <main className="figma-home system-page contact-system"><PageNav/><EditorialHero eyebrow="Contact Malex" title="Start a conversation." accent="Come and see us." intro="Questions, school visits, admissions guidance—we are ready to help your family take the next step."/><section className="contact-panel"><div><p className="figma-kicker">Send an enquiry</p><h2>We’d love to<br/>hear from you.</h2></div><ContactForm/></section><section className="contact-means"><article><span>01</span><h3>Visit</h3><p>Malex International School<br/>Enugu, Nigeria<br/>Monday–Friday, 8am–4pm</p></article><article><span>02</span><h3>Call</h3><p>+234 800 MALEX SCHOOL<br/>Admissions and general enquiries</p></article><article><span>03</span><h3>Write</h3><p>hello@malexschool.edu.ng<br/>We reply within one school day.</p></article></section><section className="map-section"><div><p className="figma-kicker">Find us</p><h2>Right here<br/>in <em>Enugu.</em></h2></div><iframe title="Map showing Enugu, Nigeria" src="https://www.openstreetmap.org/export/embed.html?bbox=7.45%2C6.40%2C7.58%2C6.52&amp;layer=mapnik" loading="lazy"/></section><SystemFooter/></main>;
}

export function EnrollExperience() { return <main className="figma-home system-page form-page"><PageNav/><EditorialHero eyebrow="Enroll at Malex" title="A new chapter." accent="Let’s begin." intro="Share a few details and our admissions team will personally guide your family through the next steps."/><section className="enroll-form-section"><div><p className="figma-kicker">Enrolment enquiry</p><h2>Tell us about<br/>your learner.</h2><p>Submitting this form starts a conversation—it does not commit you to enrolment.</p></div><ContactForm enrollment/></section><SystemFooter/></main>; }

export function LoginExperience() {
  const [message,setMessage]=useState("");
  const router = useRouter();
  return <main className="figma-home system-page login-page"><PageNav/><section className="login-shell"><motion.div initial="hidden" animate="visible" transition={{staggerChildren:.12}}><motion.p variants={reveal} className="figma-kicker">Malex community</motion.p><motion.h1 variants={reveal}>Welcome<br/><em>back.</em></motion.h1><motion.p variants={reveal}>Access the secure space for enrolled families, learners, and staff.</motion.p></motion.div><motion.form initial={reveal.hidden} animate={reveal.visible} className="login-card" onSubmit={e=>{e.preventDefault();setMessage("Opening your portal…");router.push("/portal")}}><label>Email or school ID<input required autoComplete="username" defaultValue="parent@malexschool.edu.ng"/></label><label>Password<input required type="password" autoComplete="current-password" defaultValue="malex-demo"/></label><div><label className="remember"><input type="checkbox"/> Keep me signed in</label><button type="button">Forgot password?</button></div><button type="submit">Enter Portal →</button><p aria-live="polite">{message || "Demo access is pre-filled for this prototype."}</p><Link href="/contact">Need help accessing your account?</Link></motion.form></section><SystemFooter/></main>;
}

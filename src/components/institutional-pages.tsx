"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FloatingNav } from "./floating-nav";

const reveal = { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } };
const stages = [
  ["01", "Crèche", "Warm, responsive care and purposeful play for our youngest learners."],
  ["02", "Nursery", "Language, confidence, friendship, and discovery through play-led learning."],
  ["03", "Primary", "Strong literacy, numeracy, creativity, and habits of independent thought."],
  ["04", "Secondary", "Rigorous study, mentorship, leadership, and preparation for life beyond school."],
];
const secondaryCurriculum = [
  {
    stage: "Junior Secondary",
    note: "A broad foundation across languages, sciences, technology, enterprise, culture, and citizenship.",
    subjects: ["English Studies", "Mathematics", "Physical and Health Education", "Christian Religious Studies", "Nigerian History", "Cultural and Creative Arts (CCA)", "French", "Intermediate Science", "Digital Technology", "Business Studies", "Social and Citizenship Studies", "Igbo"],
    trades: ["Livestock Farming"],
  },
  {
    stage: "Senior Secondary",
    note: "A purposeful range of core, science, humanities, business, and vocational subjects for life beyond school.",
    subjects: ["English Language", "General Mathematics", "Digital Technologies", "Biology", "Chemistry", "Physics", "Agriculture", "Foods and Nutrition", "Nigerian History", "Government", "Christian Religious Studies", "Literature in English", "Commerce", "Accounting", "Marketing", "Economics", "Igbo"],
    trades: ["Livestock Farming", "Beauty and Cosmetology"],
  },
];
const activityPath = (folder: string, stamp: string, number: number) => `/images/Activities/${folder}/ChatGPT Image Aug 22, 2026, ${stamp} PM (${number}).png`;
const activitySeries = (folder: string, stamps: string[]) => stamps.map((stamp, index) => activityPath(folder, stamp, index + 1));
const activities = [
  { title: "Inter-house Sports", description: "Competition becomes a lesson in teamwork, resilience, and school spirit.", images: activitySeries("Interhouse Sports", ["07_14_03","07_14_03","07_14_04","07_14_04","07_14_04","07_14_05","07_14_05"]) },
  { title: "Excursion to Nike Lake", description: "Learners take curiosity beyond the classroom through discovery, nature, and shared adventure.", images: activitySeries("Escortion to Nike Lake", ["07_16_34","07_16_34","07_16_35","07_16_35","07_16_35","07_16_35","07_16_36","07_16_36","07_16_37","07_16_37"]) },
  { title: "Excursion to Oakland", description: "New places turn learning into an experience filled with questions, confidence, and joy.", images: activitySeries("Escortion to Oakland", ["07_18_37","07_18_38","07_18_38","07_18_38"]) },
  { title: "Cultural Day", description: "Learners celebrate language, dress, food, music, and the stories that shape our community.", images: activitySeries("Cultural day pictures", ["06_59_23","06_59_23","06_59_23","06_59_23"]) },
  { title: "Graduation Ceremony", description: "Milestones are honoured with families, teachers, and the whole Malex community.", images: activitySeries("Graduation Pictures", ["06_52_12","06_52_12","06_52_12","06_52_13","06_52_13"]) },
  { title: "Interschool Debate", description: "Young voices develop clarity, courage, and respect through thoughtful competition.", images: activitySeries("Interschool Debate", ["07_29_48","07_29_49","07_29_49"]) },
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
    <section className="curriculum-section"><motion.div className="curriculum-heading" initial="hidden" whileInView="visible" viewport={{ once:false, amount:.3 }} transition={{ staggerChildren:.12 }}><motion.p variants={reveal} className="figma-kicker">Secondary curriculum</motion.p><motion.h2 variants={reveal}>Subjects that build<br/><em>strong foundations.</em></motion.h2><motion.p variants={reveal}>Our secondary curriculum balances essential academic knowledge with practical learning and opportunities to discover individual strengths.</motion.p></motion.div><div className="curriculum-grid">{secondaryCurriculum.map((level, levelIndex)=><motion.article key={level.stage} initial={reduce?false:{opacity:0,y:48}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.18}} transition={{duration:.7,delay:levelIndex*.1}}><div className="curriculum-card-heading"><span>0{levelIndex+1}</span><div><h3>{level.stage}</h3><p>{level.note}</p></div></div><ol>{level.subjects.map((subject, subjectIndex)=><li key={subject}><span>{String(subjectIndex+1).padStart(2,"0")}</span>{subject}</li>)}</ol><div className="trade-subjects"><p className="figma-kicker">Trade {level.trades.length === 1 ? "subject" : "subjects"}</p>{level.trades.map(trade=><strong key={trade}>{trade}</strong>)}</div></motion.article>)}</div></section>
    <ActivitySection reduceMotion={Boolean(reduce)}/><SystemFooter/></main>;
}

function ActivitySection({ reduceMotion }: { reduceMotion: boolean }) {
  const [preview, setPreview] = useState<{ activity: number; image: number } | null>(null);
  const selectedActivity = preview ? activities[preview.activity] : null;

  function movePreview(direction: number) {
    setPreview(current => {
      if (!current) return current;
      const imageCount = activities[current.activity].images.length;
      return { ...current, image: (current.image + direction + imageCount) % imageCount };
    });
  }

  useEffect(() => {
    if (!preview) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") setPreview(null);
      if (event.key === "ArrowLeft") movePreview(-1);
      if (event.key === "ArrowRight") movePreview(1);
    }
    window.addEventListener("keydown", handleKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", handleKey); };
  }, [preview]);

  return <section className="activities-section"><div className="activities-heading"><p className="figma-kicker">Shared moments</p><h2>Activities that become <em>memories.</em></h2></div><div className="activity-list">{activities.map((item, activityIndex)=><motion.article key={item.title} initial={reduceMotion?false:{opacity:0,y:55}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.2}} transition={{duration:.7}}><div className="activity-photo-grid">{item.images.slice(0,3).map((src,imageIndex)=><button type="button" onClick={()=>setPreview({activity:activityIndex,image:imageIndex})} aria-label={`Preview ${item.title} photo ${imageIndex+1}`} key={src}><Image src={src} alt={`${item.title} at Malex International School`} fill sizes="(max-width: 800px) 100vw, 42vw"/>{imageIndex===0&&<span>View gallery · {item.images.length}</span>}</button>)}</div><span>0{activityIndex+1}</span><div><h3>{item.title}</h3><p>{item.description}</p><button className="activity-view-button" type="button" onClick={()=>setPreview({activity:activityIndex,image:0})}>View all photos <span>↗</span></button></div></motion.article>)}</div>
    <AnimatePresence>{preview&&selectedActivity&&<motion.div className="activity-lightbox" role="dialog" aria-modal="true" aria-label={`${selectedActivity.title} photo gallery`} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onMouseDown={event=>{if(event.target===event.currentTarget)setPreview(null)}}><motion.div className="activity-lightbox-inner" initial={reduceMotion?false:{opacity:0,scale:.96,y:18}} animate={{opacity:1,scale:1,y:0}} exit={reduceMotion?undefined:{opacity:0,scale:.97}} transition={{duration:.3,ease:[.16,1,.3,1]}}><div className="lightbox-top"><div><p className="figma-kicker">{selectedActivity.title}</p><span>{preview.image+1} / {selectedActivity.images.length}</span></div><button type="button" onClick={()=>setPreview(null)} aria-label="Close image preview">×</button></div><div className="lightbox-image"><AnimatePresence mode="wait"><motion.div key={selectedActivity.images[preview.image]} initial={reduceMotion?false:{opacity:0,x:18}} animate={{opacity:1,x:0}} exit={reduceMotion?undefined:{opacity:0,x:-18}} transition={{duration:.22}}><Image src={selectedActivity.images[preview.image]} alt={`${selectedActivity.title} photo ${preview.image+1}`} fill priority sizes="95vw"/></motion.div></AnimatePresence></div><div className="lightbox-controls"><button type="button" onClick={()=>movePreview(-1)} aria-label="Previous photo">← Previous</button><p>Use arrow keys to browse</p><button type="button" onClick={()=>movePreview(1)} aria-label="Next photo">Next →</button></div></motion.div></motion.div>}</AnimatePresence>
  </section>;
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

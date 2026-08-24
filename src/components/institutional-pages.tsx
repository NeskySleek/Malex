"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { FloatingNav } from "./floating-nav";

const reveal = { hidden: { opacity: 0, y: 44 }, visible: { opacity: 1, y: 0 } };
const stages = [
  ["01", "Crèche", "Warm, responsive care and purposeful play for our youngest learners."],
  ["02", "Kindergarten (KG)", "Language, confidence, friendship, and discovery through play-led learning."],
  ["03", "Basic", "Strong literacy, numeracy, creativity, and habits of independent thought."],
  ["04", "Secondary", "Rigorous study, mentorship, leadership, and preparation for life beyond school."],
];
type CurriculumLevel = { stage: string; note: string; subjects: string[]; trades?: string[] };
const foundationCurriculum: CurriculumLevel[] = [
  {
    stage: "Crèche",
    note: "Gentle first steps in communication, number sense, healthy routines, and learning with others.",
    subjects: ["Health Habits", "Handwriting", "Literacy", "Numeracy", "Pre-Science", "Social Habits"],
  },
  {
    stage: "Kindergarten (KG)",
    note: "Across the KG classes, guided and playful learning develops language, creativity, movement, confidence, and independence.",
    subjects: ["Literacy (Letter Work)", "Literacy (Language Domain)", "Numeracy", "Basic Science and Technology", "Health Habits", "Social Habits", "Civic Education", "Physical and Health Education", "Personal Development", "Creativity", "Songs and Rhymes", "Handwriting"],
  },
  {
    stage: "Basic",
    note: "The Basic programme builds strong academic foundations while introducing technology, vocational learning, and French.",
    subjects: ["English Studies", "Mathematics", "Basic Science and Technology", "Physical and Health Education", "Christian Religious Studies", "Islamic Studies", "Nigerian History", "Social and Citizenship Studies", "Cultural and Creative Arts (CCA)", "Basic Digital Literacy", "Pre-vocational Studies", "French"],
  },
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
    <motion.div className="figma-footer-grid" variants={reveal}><div><strong>Malex International School</strong><p>2A Niger Close, Uwani, Enugu<br/>Principal: 0803 750 6913<br/>Admin: 0803 894 7795<br/>School: 0816759432<br/>contact@malexinternationalschool.com</p></div><div><Link href="/about">About</Link><Link href="/admissions">Admissions</Link></div><div><Link href="/school-life">School Life</Link><Link href="/news">News & Updates</Link><Link href="/contact">Contact Us</Link></div></motion.div>
    <motion.div className="figma-footer-base" variants={reveal}><span>© {new Date().getFullYear()} Malex International School</span><span>Privacy · Safeguarding · Accessibility</span></motion.div>
  </motion.footer>;
}

function EditorialHero({ eyebrow, title, accent, intro }: { eyebrow: string; title: string; accent: string; intro: string }) {
  return <section className="system-hero"><motion.div initial="hidden" animate="visible" transition={{ staggerChildren: .12, delayChildren: .12 }}><motion.p variants={reveal} className="figma-kicker">{eyebrow}</motion.p><motion.h1 variants={reveal}>{title} <em>{accent}</em></motion.h1><motion.p variants={reveal} className="system-hero-intro">{intro}</motion.p></motion.div></section>;
}

export function AdmissionsExperience() {
  const reduce = useReducedMotion();
  return <main className="figma-home system-page"><PageNav/><EditorialHero eyebrow="Our learning stages" title="One school." accent="Four distinct beginnings." intro="Each learning stage has its own rhythm, expectations, and opportunities—held together by one ambitious vision for every child."/>
    <motion.div className="system-wide-image" initial={reduce ? false : { clipPath: "inset(8% 8% 8% 8%)" }} whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }} viewport={{ once: false, amount: .15 }} transition={{ duration: 1, ease: [0.16,1,0.3,1] }}><Image src="/images/about/campus.jpg" alt="Malex students walking through the school campus" fill priority sizes="100vw"/></motion.div>
    <motion.section className="system-belief" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .3 }} transition={{ staggerChildren: .12 }}><motion.p variants={reveal} className="figma-kicker">What we believe</motion.p><motion.h2 variants={reveal}>The right challenge, at the right moment, can change how a young person sees themselves.</motion.h2></motion.section>
    <section id="learning-stages" className="stage-grid">{stages.map((stage, i) => <motion.article key={stage[1]} initial={reduce ? false : { opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: .45 }} transition={{ duration: .65, delay: i*.08 }}><span>{stage[0]}</span><h3>{stage[1]}</h3><p>{stage[2]}</p><div><Pill href={`/enroll?stage=${stage[1].toLowerCase()}`} light>Enroll</Pill><Link href="/contact">Ask about →</Link></div></motion.article>)}</section>
    <motion.section className="journey-steps" initial="hidden" whileInView="visible" viewport={{ once: false, amount: .25 }} transition={{ staggerChildren: .12 }}><motion.div variants={reveal}><p className="figma-kicker">Your admissions journey</p><h2>Simple steps.<br/><em>Personal guidance.</em></h2></motion.div><div>{[["01","Discover","Explore our stages, speak with admissions, and arrange a visit."],["02","Apply","Tell us about your learner and share the requested documents."],["03","Join us","Receive a decision and clear guidance on enrolment and next steps."]].map(x=><motion.article variants={reveal} key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></motion.article>)}</div><motion.div variants={reveal}><Pill href="/enroll">Begin your journey</Pill></motion.div></motion.section><SystemFooter/></main>;
}

export function SchoolLifeExperience() {
  const reduce = useReducedMotion();
  return <main className="figma-home system-page life-page"><PageNav/><EditorialHero eyebrow="School life" title="Find what moves you." accent="Then take it further." intro="Beyond the timetable, learners build confidence through practice, friendship, service, performance, and play."/>
    <CurriculumSection eyebrow="Crèche, KG & Basic" title={<>Three stages.<br/><em>One growing journey.</em></>} intro="A clear progression from first discoveries to confident, independent study." levels={foundationCurriculum} reduceMotion={Boolean(reduce)}/>
    <CurriculumSection eyebrow="Secondary curriculum" title={<>Subjects that build<br/><em>strong foundations.</em></>} intro="Our secondary curriculum balances essential academic knowledge with practical learning and opportunities to discover individual strengths." levels={secondaryCurriculum} reduceMotion={Boolean(reduce)} secondary/>
    <ActivitySection reduceMotion={Boolean(reduce)}/><SystemFooter/></main>;
}

function CurriculumSection({ eyebrow, title, intro, levels, reduceMotion, secondary = false }: { eyebrow: string; title: React.ReactNode; intro: string; levels: CurriculumLevel[]; reduceMotion: boolean; secondary?: boolean }) {
  return <section className={`curriculum-section ${secondary ? "curriculum-section-secondary" : "curriculum-section-foundation"}`}><motion.div className="curriculum-heading" initial="hidden" whileInView="visible" viewport={{ once:false, amount:.3 }} transition={{ staggerChildren:.12 }}><motion.p variants={reveal} className="figma-kicker">{eyebrow}</motion.p><motion.h2 variants={reveal}>{title}</motion.h2><motion.p variants={reveal}>{intro}</motion.p></motion.div><div className={`curriculum-grid ${levels.length > 2 ? "curriculum-grid-many" : ""}`}>{levels.map((level, levelIndex)=><motion.article key={level.stage} initial={reduceMotion?false:{opacity:0,y:48}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.16}} transition={{duration:.7,delay:(levelIndex%2)*.08}}><div className="curriculum-card-heading"><span>{String(levelIndex+1).padStart(2,"0")}</span><div><h3>{level.stage}</h3><p>{level.note}</p></div></div><ol>{level.subjects.map((subject, subjectIndex)=><li key={subject}><span>{String(subjectIndex+1).padStart(2,"0")}</span>{subject}</li>)}</ol>{level.trades&&level.trades.length>0&&<div className="trade-subjects"><p className="figma-kicker">Trade {level.trades.length === 1 ? "subject" : "subjects"}</p>{level.trades.map(trade=><strong key={trade}>{trade}</strong>)}</div>}</motion.article>)}</div></section>;
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

export function ContactExperience() {
  const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const mapUrl = mapsApiKey ? `https://www.google.com/maps/embed/v1/place?key=${mapsApiKey}&q=Malex+International+School%2C+2A+Niger+Close%2C+Uwani%2C+Enugu&zoom=17` : "https://www.google.com/maps?q=2A%20Niger%20Close%2C%20Uwani%2C%20Enugu&output=embed";
  return <main className="figma-home system-page contact-system"><PageNav/><EditorialHero eyebrow="Contact Malex" title="Start a conversation." accent="Come and see us." intro="Questions, school visits, admissions guidance—we are ready to help your family take the next step."/><section className="contact-directory"><div className="contact-directory-heading"><p className="figma-kicker">Talk to us directly</p><h2>The right person,<br/><em>one call away.</em></h2><p>Call the school team directly or send us an email. Tap any contact detail to get started.</p></div><div className="contact-means"><article><span>01</span><h3>Principal</h3><a href="tel:+2348037506913">0803 750 6913</a><p>Leadership and school matters</p></article><article><span>02</span><h3>Admin</h3><a href="tel:+2348038947795">0803 894 7795</a><p>Administration and enquiries</p></article><article><span>03</span><h3>School line</h3><a href="tel:+234816759432">0816759432</a><p>General information</p></article><article><span>04</span><h3>Email</h3><a href="mailto:contact@malexinternationalschool.com">contact@malexinternationalschool.com</a><p>School email address</p></article></div></section><section className="map-section"><div className="map-copy"><p className="figma-kicker">Find us</p><h2>Right here<br/>in <em>Enugu.</em></h2><address>Malex International School<br/>2A Niger Close, Uwani<br/>Enugu, Nigeria</address><a href="https://www.google.com/maps/search/?api=1&amp;query=2A%20Niger%20Close%20Uwani%20Enugu" target="_blank" rel="noreferrer">Open in Google Maps ↗</a></div><iframe title="Google Map showing Malex International School at 2A Niger Close, Uwani, Enugu" src={mapUrl} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/></section><SystemFooter/></main>;
}

export function EnrollExperience() {
  const reduce = useReducedMotion();
  const paths = [
    { number: "01", stage: "Crèche, Kindergarten (KG) & Basic", title: "Purchase an application form", detail: "Visit Malex International School to purchase an application form for ₦5,000. The form fee is non-refundable.", note: "No online application is required." },
    { number: "02", stage: "Secondary", title: "Purchase a form and apply", detail: "Visit Malex International School to purchase the ₦5,000 non-refundable application form. Submit the completed form at the school and the applicant will receive a date for the entrance examination.", note: "The examination date is issued in person after the form is submitted." },
  ];
  return <main className="figma-home system-page form-page"><PageNav/><EditorialHero eyebrow="Enroll at Malex" title="Begin in person." accent="We’ll guide you." intro="Enrollment is currently handled physically at the school, where our admissions team can guide every family clearly."/><section className="enroll-form-section enroll-physical"><div><p className="figma-kicker">How to enrol</p><h2>Choose your<br/>learning stage.</h2><p>Visit us at 2A Niger Close, Uwani, Enugu. Please call ahead if you need help preparing for your visit.</p><Pill href="/contact">Contact the school</Pill></div><div className="enroll-paths">{paths.map((path,index)=><motion.article key={path.number} initial={reduce?false:{opacity:0,y:44}} whileInView={{opacity:1,y:0}} viewport={{once:false,amount:.35}} transition={{duration:.65,delay:index*.1}}><span>{path.number}</span><p>{path.stage}</p><h3>{path.title}</h3><div><p>{path.detail}</p><small>{path.note}</small></div></motion.article>)}</div></section><SystemFooter/></main>;
}

export function LoginExperience() {
  const [message,setMessage]=useState("");
  const router = useRouter();
  return <main className="figma-home system-page login-page"><PageNav/><section className="login-shell"><motion.div initial="hidden" animate="visible" transition={{staggerChildren:.12}}><motion.p variants={reveal} className="figma-kicker">Malex community</motion.p><motion.h1 variants={reveal}>Welcome<br/><em>back.</em></motion.h1><motion.p variants={reveal}>Access the secure space for enrolled families, learners, and staff.</motion.p></motion.div><motion.form initial={reveal.hidden} animate={reveal.visible} className="login-card" onSubmit={e=>{e.preventDefault();setMessage("Opening your portal…");router.push("/portal")}}><label>Email or school ID<input required autoComplete="username" defaultValue="parent@malexschool.edu.ng"/></label><label>Password<input required type="password" autoComplete="current-password" defaultValue="malex-demo"/></label><div><label className="remember"><input type="checkbox"/> Keep me signed in</label><button type="button">Forgot password?</button></div><button type="submit">Enter Portal →</button><p aria-live="polite">{message || "Demo access is pre-filled for this prototype."}</p><Link href="/contact">Need help accessing your account?</Link></motion.form></section><SystemFooter/></main>;
}

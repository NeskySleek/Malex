"use client";

import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useState } from "react";

type Role = "Parent" | "Student" | "Teacher" | "Finance" | "Admin";

const roles: Role[] = ["Parent", "Student", "Teacher", "Finance", "Admin"];
const navItems = ["Overview", "Academics", "Fees", "Activities", "Messages"];

const roleData: Record<Role, { eyebrow: string; title: string; intro: string; stats: Array<[string,string,string]> }> = {
  Parent: { eyebrow: "Guardian portal", title: "Good morning, Amaka.", intro: "Here is what is happening across your family today.", stats: [["₦185,000","Outstanding balance","Due 30 July"],["3","New materials","Across 2 subjects"],["87%","Term average","Up 4% this term"]] },
  Student: { eyebrow: "Student portal", title: "Ready for today, Ada?", intro: "Your lessons, materials, results, and activities in one place.", stats: [["6","Lessons today","Next: Mathematics"],["2","Assignments due","This week"],["87%","Term average","Up 4% this term"]] },
  Teacher: { eyebrow: "Teacher dashboard", title: "Welcome back, Mrs Okafor.", intro: "Your classes, materials, and result workflows are ready.", stats: [["5","Classes today","First: JSS 2A"],["28","Results pending","Awaiting submission"],["3","New messages","From parents"]] },
  Finance: { eyebrow: "Finance dashboard", title: "Good morning, Chinedu.", intro: "Monitor collections, balances, and reconciliation activity.", stats: [["₦8.4m","Collected this term","72% of target"],["42","Pending invoices","Across 4 levels"],["7","Payments to verify","Offline records"]] },
  Admin: { eyebrow: "School administration", title: "Welcome, Administrator.", intro: "Admissions, students, academics, and approvals at a glance.", stats: [["1,248","Active learners","2026/27 session"],["34","Applications","12 need review"],["18","Results pending","Awaiting approval"]] },
};

function StatCard({ item, index }: { item: [string,string,string]; index: number }) {
  return <motion.article className="portal-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .07 }}><strong>{item[0]}</strong><h3>{item[1]}</h3><p>{item[2]}</p><span aria-hidden>0{index + 1}</span></motion.article>;
}

export function PortalExperience() {
  const [role, setRole] = useState<Role>("Parent");
  const [active, setActive] = useState("Overview");
  const [child, setChild] = useState("Adaeze");
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();
  const data = roleData[role];

  return <main className="portal-app">
    <aside className={menuOpen ? "portal-sidebar is-open" : "portal-sidebar"}>
      <div className="portal-brand"><Link href="/">Malex</Link><button type="button" onClick={() => setMenuOpen(false)} aria-label="Close portal menu">×</button></div>
      <div className="portal-user"><span>AO</span><div><strong>Amaka Okafor</strong><small>{role}</small></div></div>
      <nav aria-label="Portal navigation">{navItems.map((item, index) => <button type="button" className={active === item ? "active" : ""} onClick={() => {setActive(item);setMenuOpen(false)}} key={item}><span>0{index+1}</span>{item}</button>)}</nav>
      <div className="portal-side-bottom"><Link href="/contact">Help & support</Link><Link href="/login">Sign out</Link></div>
    </aside>
    <section className="portal-main">
      <header className="portal-topbar"><button className="portal-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open portal menu"><i/><i/></button><Link href="/" className="portal-mobile-brand">Malex</Link><div className="role-preview"><label>Preview role<select value={role} onChange={event => setRole(event.target.value as Role)}>{roles.map(item => <option key={item}>{item}</option>)}</select></label><button type="button" aria-label="Notifications">●<span>3</span></button><span className="portal-avatar">AO</span></div></header>
      <AnimatePresence mode="wait">
        <motion.div key={`${role}-${active}`} className="portal-content" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -10 }} transition={{ duration: .3 }}>
          <div className="portal-heading"><div><p>{data.eyebrow} · {active}</p><h1>{data.title}</h1><span>{data.intro}</span></div>{role === "Parent" && <label className="child-switcher">Viewing child<select value={child} onChange={event => setChild(event.target.value)}><option>Adaeze</option><option>Chisom</option></select></label>}</div>
          <div className="portal-stats">{data.stats.map((item,index)=><StatCard item={item} index={index} key={item[1]}/>)}</div>
          {active === "Overview" ? <Overview role={role} child={child}/> : <ModulePreview active={active} role={role}/>} 
        </motion.div>
      </AnimatePresence>
    </section>
  </main>;
}

function Overview({ role, child }: { role: Role; child: string }) {
  if (role !== "Parent") return <div className="portal-grid"><section className="portal-panel portal-panel-wide"><div className="panel-title"><p>Priority queue</p><Link href="#">View workspace →</Link></div><div className="task-list">{["Review items needing attention","Continue your latest draft","Check today’s announcements"].map((item,index)=><button type="button" key={item}><span>0{index+1}</span><strong>{item}</strong><small>Open →</small></button>)}</div></section><section className="portal-panel"><div className="panel-title"><p>Today</p></div><div className="mini-calendar"><strong>22</strong><span>July 2026</span><p>3 scheduled items</p></div></section></div>;
  return <>
    <div className="portal-grid">
      <section className="portal-panel portal-panel-wide"><div className="panel-title"><p>Today for {child}</p><Link href="#">View timetable →</Link></div><div className="schedule-list"><article><time>08:00</time><div><strong>Mathematics</strong><span>Mrs Okafor · Room 4</span></div><b>Now</b></article><article><time>10:15</time><div><strong>Basic Science</strong><span>Mr Eze · Science Lab</span></div></article><article><time>13:00</time><div><strong>Creative Arts</strong><span>Mrs Nwosu · Art Studio</span></div></article></div></section>
      <section className="portal-panel"><div className="panel-title"><p>Quick actions</p></div><div className="quick-actions"><button type="button">Pay school fees <span>→</span></button><button type="button">Download result <span>→</span></button><button type="button">Message a teacher <span>→</span></button></div></section>
    </div>
    <div className="portal-grid portal-grid-lower"><section className="portal-panel"><div className="panel-title"><p>Latest result</p><Link href="#">Full report →</Link></div><div className="result-ring"><div><strong>87</strong><span>Average</span></div><p><b>Excellent progress</b>{child} improved in English, Mathematics, and Basic Science.</p></div></section><section className="portal-panel portal-panel-wide"><div className="panel-title"><p>Recent learning materials</p><Link href="#">All materials →</Link></div><div className="material-list"><article><span>PDF</span><div><strong>Fractions practice pack</strong><small>Mathematics · Added today</small></div><button type="button">↓</button></article><article><span>DOC</span><div><strong>Our environment worksheet</strong><small>Basic Science · Yesterday</small></div><button type="button">↓</button></article></div></section></div>
  </>;
}

function ModulePreview({ active, role }: { active: string; role: Role }) {
  return <section className="portal-panel module-preview"><p>{active}</p><h2>{role} {active.toLowerCase()} workspace</h2><span>This module shell is ready for the next implementation slice. It will connect to role-scoped records and server-checked permissions.</span><button type="button">Create first workflow →</button></section>;
}

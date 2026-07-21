import Image from "next/image";
import Link from "next/link";

export const nav = [
  ["About", "/about"], ["Programmes", "/programmes"], ["Admissions", "/admissions"],
  ["School Life", "/school-life"], ["News & Events", "/news"], ["Contact", "/contact"],
];

export function SiteHeader() {
  return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">M</span><span><strong>MALEX</strong><small>International School</small></span></Link><nav aria-label="Main navigation">{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav><Link href="/portal" className="portal-link">Portal <span>↗</span></Link><details className="mobile-menu"><summary>Menu</summary><div>{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}<Link href="/portal">Portal Login</Link></div></details></header>;
}

export function SiteFooter() {
  return <footer><div className="footer-top"><Link href="/" className="footer-wordmark">MALEX</Link><p>A trusted place to learn,<br/>belong, and become.</p><Link href="/admissions" className="circle-link">Apply<br/>now ↗</Link></div><div className="footer-grid"><div><strong>Malex International School</strong><p>Enugu, Nigeria<br/>+234 800 MALEX SCHOOL<br/>hello@malexschool.edu.ng</p></div><div>{nav.slice(0,3).map(([a,b])=><Link href={b} key={b}>{a}</Link>)}</div><div>{nav.slice(3).map(([a,b])=><Link href={b} key={b}>{a}</Link>)}</div><div><Link href="/portal">Parent & Student Portal</Link><Link href="/contact">Book a school visit</Link></div></div><div className="copyright">© {new Date().getFullYear()} Malex International School <span>Privacy · Safeguarding · Accessibility</span></div></footer>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow:string; title:string; intro:string; image:string; imageAlt:string }) {
  return <><section className="page-title"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><div className="wide-image"><Image src={image} alt={imageAlt} fill priority sizes="100vw"/></div></>;
}

export function PhotoBand({ image, alt, quote }: { image:string; alt:string; quote:string }) {
  return <section className="photo-band"><Image src={image} alt={alt} fill sizes="100vw"/><blockquote>{quote}</blockquote></section>;
}

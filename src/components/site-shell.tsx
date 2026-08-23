import Image from "next/image";
import Link from "next/link";

export const nav = [
  ["About", "/about"], ["Admissions", "/admissions"], ["School Life", "/school-life"],
  ["News", "/news"], ["Contact", "/contact"], ["Log In", "/login"], ["Enroll", "/enroll"],
];

export function SiteHeader() {
  return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">M</span><span><strong>MALEX</strong><small>International School</small></span></Link><nav aria-label="Main navigation">{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</nav><Link href="/enroll" className="portal-link">Enroll <span>↗</span></Link><details className="mobile-menu"><summary>Menu</summary><div>{nav.map(([label,href])=><Link href={href} key={href}>{label}</Link>)}</div></details></header>;
}

export function SiteFooter() {
  return <footer><div className="footer-top"><Link href="/" className="footer-wordmark">MALEX</Link><p>A trusted place to learn,<br/>belong, and become.</p><Link href="/enroll" className="circle-link">Apply<br/>now ↗</Link></div><div className="footer-grid"><div><strong>Malex International School</strong><p>2A Niger Close, Uwani, Enugu<br/>Principal: 0803 750 6913<br/>Admin: 0803 894 7795<br/>School: 0816759432<br/>contact@malexinternationalschool.com</p></div><div>{nav.slice(0,3).map(([a,b])=><Link href={b} key={b}>{a}</Link>)}</div><div>{nav.slice(3).map(([a,b])=><Link href={b} key={b}>{a}</Link>)}</div><div><Link href="/login">Log In</Link><Link href="/contact">Book a school visit</Link></div></div><div className="copyright">© {new Date().getFullYear()} Malex International School <span>Privacy · Safeguarding · Accessibility</span></div></footer>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow:string; title:string; intro:string; image:string; imageAlt:string }) {
  return <><section className="page-title"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></section><div className="wide-image"><Image src={image} alt={imageAlt} fill priority sizes="100vw"/></div></>;
}

export function PhotoBand({ image, alt, quote }: { image:string; alt:string; quote:string }) {
  return <section className="photo-band"><Image src={image} alt={alt} fill sizes="100vw"/><blockquote>{quote}</blockquote></section>;
}

import Link from "next/link";
import { PageHero, PhotoBand, SiteFooter, SiteHeader } from "./site-shell";

type Section = { number:string; title:string; body:string; link?:string; href?:string };
export function ContentPage({ eyebrow,title,intro,image,imageAlt,statement,sections,bandImage="/images/classroom.jpg" }: {eyebrow:string;title:string;intro:string;image:string;imageAlt:string;statement:string;sections:Section[];bandImage?:string}) {
 return <><SiteHeader/><main><PageHero {...{eyebrow,title,intro,image,imageAlt}}/><section className="belief"><p>What we believe</p><h2>{statement}</h2></section><section className="story-grid">{sections.map(s=><article key={s.number}><span>{s.number}</span><h3>{s.title}</h3><p>{s.body}</p>{s.href&&<Link href={s.href}>{s.link} <b>↗</b></Link>}</article>)}</section><PhotoBand image={bandImage} alt="Malex learners engaged in school" quote="Every learner deserves to be seen, stretched, and supported."/></main><SiteFooter/></>;
}

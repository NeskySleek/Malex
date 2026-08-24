import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingNav } from "@/components/floating-nav";
import { SystemFooter } from "@/components/institutional-pages";
import { schoolNews } from "@/data/school-news";

type NewsPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return schoolNews.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = schoolNews.find((item) => item.slug === slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    alternates: { canonical: `/news/${story.slug}` },
    openGraph: { title: story.title, description: story.excerpt, type: "article", images: [{ url: story.image }] },
    twitter: { card: "summary_large_image", title: story.title, description: story.excerpt, images: [story.image] },
  };
}

export default async function NewsArticlePage({ params }: NewsPageProps) {
  const { slug } = await params;
  const storyIndex = schoolNews.findIndex((item) => item.slug === slug);
  if (storyIndex < 0) notFound();
  const story = schoolNews[storyIndex];
  const related = schoolNews.filter((item) => item.slug !== slug).slice(0, 3);

  return <main className="figma-home news-article-page">
    <section className="news-article-hero">
      <FloatingNav backgroundColor="rgba(0,25,20,.93)" />
      <div className="news-article-heading">
        <Link href="/news" className="news-back">← All school updates</Link>
        <p className="news-meta">{story.category} · {story.published}</p>
        <h1>{story.title}</h1>
        <p>{story.excerpt}</p>
      </div>
    </section>
    <article className="news-story">
      <div className="news-story-image"><Image src={story.image} alt={story.title} fill priority sizes="(max-width: 800px) 100vw, 78vw" /></div>
      <div className="news-story-layout">
        <aside>
          <p className="figma-kicker">At a glance</p>
          {story.details?.map((detail) => <div key={detail.label}><span>{detail.label}</span><strong>{detail.value}</strong></div>)}
          {!story.details && <div><span>Update</span><strong>{story.category}</strong></div>}
        </aside>
        <div className="news-story-copy">
          {story.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <div className="news-story-actions"><Link href="/contact">Contact the school <span>→</span></Link><Link href="/enroll">Enrollment information <span>→</span></Link></div>
        </div>
      </div>
    </article>
    <section className="news-related">
      <div><p className="figma-kicker">Keep reading</p><h2>More from<br/><em>around Malex.</em></h2></div>
      <div className="news-related-grid">{related.map((item) => <article key={item.slug}><Link href={`/news/${item.slug}`}><div><Image src={item.image} alt="" fill sizes="(max-width: 700px) 100vw, 33vw" /></div><p className="news-meta">{item.category} · {item.published}</p><h3>{item.title}</h3><span>Read update →</span></Link></article>)}</div>
    </section>
    <SystemFooter />
  </main>;
}

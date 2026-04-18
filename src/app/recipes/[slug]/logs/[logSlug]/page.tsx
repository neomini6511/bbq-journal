import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecipes, getCookLog } from "@/data/recipes";
import { SegmentedNav } from "@/components/segmented-nav";
import { Timeline } from "@/components/timeline";
import { ImageMosaic } from "@/components/image-mosaic";
import { formatLongDate } from "@/lib/format";

export function generateStaticParams() {
  const recipes = getRecipes();
  const params: { slug: string; logSlug: string }[] = [];
  for (const recipe of recipes) {
    for (const log of recipe.cookLogs) {
      params.push({ slug: recipe.slug, logSlug: log.slug });
    }
  }
  return params;
}

export default function CookLogPage({ params }: { params: { slug: string; logSlug: string } }) {
  const recipes = getRecipes();
  const recipe = recipes.find((r) => r.slug === params.slug);
  const log = getCookLog(params.slug, params.logSlug);
  if (!recipe || !log) return notFound();

  const navItems = [
    { href: `/recipes/${recipe.slug}`, label: "Overview" },
    { href: `/recipes/${recipe.slug}/logs`, label: "Cook logs", active: true },
  ];

  return (
    <div className="container">
      <div className="page-header">
        <Link href={`/recipes/${recipe.slug}`} className="back-link">
          ← {recipe.title}
        </Link>
        <h1 className="page-header__title">{log.title}</h1>
        <p className="page-header__subtitle">{formatLongDate(log.date)}</p>
      </div>

      <SegmentedNav items={navItems} />

      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Summary</p>
          <h2>Session at a glance</h2>
        </div>
        <div className="stats-row">
          <div className="stat">
            <span className="stat__label">Score</span>
            <span className="stat__value">{log.score.toFixed(1)}/10</span>
          </div>
          <div className="stat">
            <span className="stat__label">Servings</span>
            <span className="stat__value">{log.servings}</span>
          </div>
          <div className="stat">
            <span className="stat__label">Finished</span>
            <span className="stat__value">{log.finishedAt}</span>
          </div>
          <div className="stat">
            <span className="stat__label">Duration</span>
            <span className="stat__value">{log.duration}</span>
          </div>
        </div>
        <p className="prose">{log.summary}</p>
        <div className="highlight-pills">
          {log.highlights.map((h) => (
            <span key={h} className="highlight-pill">
              {h}
            </span>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Event log</p>
          <h2>What happened and when</h2>
        </div>
        <Timeline items={log.timeline} />
      </section>

      <ImageMosaic images={log.gallery} />

      <div className="section-card">
        <Link href={`/recipes/${recipe.slug}/logs`} className="back-link">
          ← All cook logs for {recipe.title}
        </Link>
      </div>
    </div>
  );
}

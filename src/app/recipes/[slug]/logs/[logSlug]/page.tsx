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

export default async function CookLogPage({
  params,
}: {
  params: Promise<{ slug: string; logSlug: string }>;
}) {
  const { slug, logSlug } = await params;
  const recipes = getRecipes();
  const recipe = recipes.find((r) => r.slug === slug);
  const log = getCookLog(slug, logSlug);
  if (!recipe || !log) return notFound();

  const navItems = [
    { href: `/recipes/${recipe.slug}`, label: "Overview" },
    { href: `/recipes/${recipe.slug}/logs`, label: "Cook logs", active: true },
  ];

  // Separate gallery: images shown in the timeline already + remaining hero shots
  const timelineImageSrcs = new Set(
    log.timeline.flatMap((e) => (e.images ?? []).map((i) => i.src))
  );
  const galleryImages = log.gallery.filter((img) => !timelineImageSrcs.has(img.src));
  // Always feature the final plating shots in the gallery regardless
  const heroImages = log.gallery.slice(-2);
  const extraGallery = galleryImages.filter((img) => !heroImages.some((h) => h.src === img.src));
  const displayGallery = [...heroImages, ...extraGallery];

  return (
    <div className="container">
      <div className="page-header">
        <Link href={`/recipes/${recipe.slug}`} className="back-link">
          ← {recipe.title}
        </Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <div>
            <p className="eyebrow">{formatLongDate(log.date)}</p>
            <h1 className="page-header__title">{log.title}</h1>
          </div>
          <div className="score-badge" aria-label={`Score: ${log.score} out of 10`}>
            {log.score.toFixed(1)}
            <span className="score-badge__label">/10</span>
          </div>
        </div>
      </div>

      <SegmentedNav items={navItems} />

      {/* Stats */}
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
            <span className="stat__label">Wrapped up</span>
            <span className="stat__value">~{log.finishedAt}</span>
          </div>
          <div className="stat">
            <span className="stat__label">Duration</span>
            <span className="stat__value">{log.duration}</span>
          </div>
        </div>
        <p className="prose" style={{ marginTop: "1rem" }}>{log.summary}</p>
        <div className="highlight-pills">
          {log.highlights.map((h) => (
            <span key={h} className="highlight-pill">{h}</span>
          ))}
        </div>
      </section>

      {/* Time-ordered event log with inline images */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Event log</p>
          <h2>What happened and when</h2>
        </div>
        <Timeline items={log.timeline} />
      </section>

      {/* Gallery: hero + any images not already shown in the timeline */}
      <ImageMosaic images={displayGallery} />

      <div className="section-card">
        <Link href={`/recipes/${recipe.slug}/logs`} className="back-link">
          ← All cook logs for {recipe.title}
        </Link>
      </div>
    </div>
  );
}

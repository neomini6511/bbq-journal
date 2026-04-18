import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "@/data/recipes";
import { SegmentedNav } from "@/components/segmented-nav";
import { formatLongDate } from "@/lib/format";
import SourcesSection from "./sources-section";

export function generateStaticParams() {
  const recipes = getRecipes();
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipes = getRecipes();
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return notFound();

  const latestLog = recipe.cookLogs[recipe.cookLogs.length - 1];
  const firstDate = recipe.cookLogs[0]?.date;

  const navItems = [
    { href: `/recipes/${recipe.slug}`, label: "Overview", active: true },
    { href: `/recipes/${recipe.slug}/logs`, label: "Cook logs" },
  ];

  return (
    <div className="container">
      {/* Page header */}
      <div className="page-header">
        <Link href="/" className="back-link">← All recipes</Link>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <div>
            <p className="eyebrow">{firstDate ? formatLongDate(firstDate) : ""}</p>
            <h1 className="page-header__title">{recipe.title}</h1>
            <p className="page-header__subtitle">{recipe.subtitle}</p>
          </div>
          {latestLog && (
            <div className="score-badge" aria-label={`Score: ${latestLog.score} out of 10`}>
              {latestLog.score.toFixed(1)}
              <span className="score-badge__label">/10</span>
            </div>
          )}
        </div>
      </div>

      <SegmentedNav items={navItems} />

      {/* Hero image */}
      <section className="cover-hero">
        <div className="image-frame image-frame--hero">
          <Image
            src={recipe.coverImage.src}
            alt={recipe.coverImage.alt}
            fill
            sizes="(max-width: 800px) 100vw, 800px"
            className="image-frame__img"
            priority
          />
        </div>
        <p className="cover-hero__caption">{recipe.coverImage.caption}</p>
      </section>

      {/* Summary + key details */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Summary</p>
          <h2>About this recipe</h2>
        </div>
        <p className="prose">{recipe.summary}</p>

        <div className="key-details" style={{ marginTop: "1.25rem" }}>


          <div className="key-detail">
            <span className="key-detail__label">Yield</span>
            <span className="key-detail__value">{recipe.yield}</span>
          </div>
          <div className="key-detail">
            <span className="key-detail__label">Grill</span>
            <span className="key-detail__value">{recipe.equipment[0]}</span>
          </div>
          <div className="key-detail">
            <span className="key-detail__label">Fuel</span>
            <span className="key-detail__value">{recipe.equipment[1]}</span>
          </div>
          {latestLog && (
            <div className="key-detail">
              <span className="key-detail__label">Best score</span>
              <span className="key-detail__value">{latestLog.score.toFixed(1)}/10</span>
            </div>
          )}
        </div>
      </section>

      {/* Accent images */}
      {recipe.accentImages.length > 0 && (
        <div className="accent-strip">
          {recipe.accentImages.map((img) => (
            <figure key={img.src} className="accent-strip__item">
              <div className="image-frame image-frame--accent">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 260px"
                  className="image-frame__img"
                />
              </div>
            </figure>
          ))}
        </div>
      )}

      {/* Ingredients */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Ingredients</p>
          <h2>What you need</h2>
        </div>
        <ul className="checklist">
          {recipe.ingredients.map((ing) => (
            <li key={ing}>{ing}</li>
          ))}
        </ul>
      </section>

      {/* Equipment */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Equipment</p>
          <h2>Tools</h2>
        </div>
        <ul className="checklist">
          {recipe.equipment.map((eq) => (
            <li key={eq}>{eq}</li>
          ))}
        </ul>
      </section>

      {/* Method */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Method</p>
          <h2>How to make it</h2>
        </div>
        <ol className="steps">
          {recipe.method.map((step, idx) => (
            <li key={idx} className="step">
              <span className="step__num" aria-hidden>{idx + 1}</span>
              <span className="step__text">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Tasting notes */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Tasting notes</p>
          <h2>How it turned out</h2>
        </div>
        <ul className="notes-list">
          {recipe.tastingNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Next time notes */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Next time</p>
          <h2>What to change</h2>
        </div>
        <ul className="notes-list">
          {recipe.nextTimeNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Sources */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Sources</p>
          <h2>References</h2>
        </div>
        <SourcesSection sourceLinks={recipe.sourceLinks} />
      </section>

      {/* Cook logs list */}
      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Cook logs</p>
          <h2>Sessions</h2>
        </div>
        <div className="cook-log-list">
          {recipe.cookLogs.map((log) => (
            <Link
              key={log.slug}
              href={`/recipes/${recipe.slug}/logs/${log.slug}`}
              className="cook-log-list__item"
            >
              <span className="cook-log-list__title">{log.title}</span>
              <span className="cook-log-list__meta">
                {formatLongDate(log.date)} · Score {log.score.toFixed(1)}/10
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "@/data/recipes";
import { SegmentedNav } from "@/components/segmented-nav";

export function generateStaticParams() {
  const recipes = getRecipes();
  return recipes.map((r) => ({ slug: r.slug }));
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipes = getRecipes();
  const recipe = recipes.find((r) => r.slug === params.slug);
  if (!recipe) return notFound();

  const navItems = [
    { href: `/recipes/${recipe.slug}`, label: "Overview", active: true },
    { href: `/recipes/${recipe.slug}/logs`, label: "Cook logs" },
  ];

  return (
    <div className="container">
      <div className="page-header">
        <Link href="/" className="back-link">
          ← All recipes
        </Link>
        <h1 className="page-header__title">{recipe.title}</h1>
        <p className="page-header__subtitle">{recipe.subtitle}</p>
      </div>

      <SegmentedNav items={navItems} />

      <section className="cover-hero">
        <div className="image-frame image-frame--hero">
          <Image
            src={recipe.coverImage.src}
            alt={recipe.coverImage.alt}
            fill
            sizes="100vw"
            className="image-frame__img"
            priority
          />
        </div>
        <p className="cover-hero__caption">{recipe.coverImage.caption}</p>
      </section>

      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Summary</p>
          <h2>About this recipe</h2>
        </div>
        <p className="prose">{recipe.summary}</p>
        <div className="stats-row">
          <div className="stat">
            <span className="stat__label">Yield</span>
            <span className="stat__value">{recipe.yield}</span>
          </div>
          <div className="stat">
            <span className="stat__label">Source</span>
            <span className="stat__value">{recipe.source}</span>
          </div>
        </div>
      </section>

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

      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Method</p>
          <h2>How to make it</h2>
        </div>
        <ol className="steps">
          {recipe.method.map((step, idx) => (
            <li key={idx} className="step">
              <span className="step__num" aria-hidden>
                {idx + 1}
              </span>
              <span className="step__text">{step}</span>
            </li>
          ))}
        </ol>
      </section>

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

      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Sources</p>
          <h2>References</h2>
        </div>
        <ul className="source-list">
          {recipe.sourceLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

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
                {log.date} · Score {log.score.toFixed(1)}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { getRecipes } from "@/data/recipes";
import { formatLongDate } from "@/lib/format";

export default function Home() {
  const recipes = getRecipes();

  return (
    <div className="container">
      <section className="hero">
        <h1 className="hero__title">Cooks, captured.</h1>
        <p className="hero__subtitle">
          A journal of what we made, what worked, and what we will tweak next time.
        </p>
      </section>

      <section className="feed">
        <h2 className="feed__heading">Recent recipes</h2>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <article key={recipe.slug} className="recipe-card">
              <Link href={`/recipes/${recipe.slug}`} className="recipe-card__link">
                <div className="recipe-card__media">
                  <div className="image-frame image-frame--cover">
                    <Image
                      src={recipe.coverImage.src}
                      alt={recipe.coverImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="image-frame__img"
                      priority
                    />
                  </div>
                </div>
                <div className="recipe-card__content">
                  <p className="recipe-card__meta">{recipe.yield}</p>
                  <h3 className="recipe-card__title">{recipe.title}</h3>
                  <p className="recipe-card__summary">{recipe.summary}</p>
                  <p className="recipe-card__cta">Open recipe →</p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-card">
        <div className="section-card__header">
          <h2>Latest cook log</h2>
          <p className="eyebrow">Most recent session</p>
        </div>
        {recipes[0]?.cookLogs[0] && (
          <div className="cook-log-preview">
            <div className="cook-log-preview__header">
              <div>
                <p className="cook-log-preview__date">
                  {formatLongDate(recipes[0].cookLogs[0].date)}
                </p>
                <h3 className="cook-log-preview__title">{recipes[0].cookLogs[0].title}</h3>
              </div>
              <div className="cook-log-preview__score" aria-label="Score">
                {recipes[0].cookLogs[0].score.toFixed(1)}
              </div>
            </div>
            <p className="cook-log-preview__summary">{recipes[0].cookLogs[0].summary}</p>
            <p className="cook-log-preview__meta">
              Finished around {recipes[0].cookLogs[0].finishedAt} · {recipes[0].cookLogs[0].servings}
            </p>
            <Link
              href={`/recipes/${recipes[0].slug}/logs/${recipes[0].cookLogs[0].slug}`}
              className="cook-log-preview__cta"
            >
              View full log →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}

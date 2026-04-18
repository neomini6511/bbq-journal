import { notFound } from "next/navigation";
import Link from "next/link";
import { getRecipes } from "@/data/recipes";
import { SegmentedNav } from "@/components/segmented-nav";
import { formatLongDate } from "@/lib/format";

export function generateStaticParams() {
  const recipes = getRecipes();
  return recipes.map((r) => ({ slug: r.slug }));
}

export default async function RecipeLogsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipes = getRecipes();
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return notFound();

  const navItems = [
    { href: `/recipes/${recipe.slug}`, label: "Overview" },
    { href: `/recipes/${recipe.slug}/logs`, label: "Cook logs", active: true },
  ];

  return (
    <div className="container">
      <div className="page-header">
        <Link href="/" className="back-link">← All recipes</Link>
        <h1 className="page-header__title">{recipe.title}</h1>
        <p className="page-header__subtitle">Cook logs</p>
      </div>

      <SegmentedNav items={navItems} />

      <section className="section-card">
        <div className="section-card__header">
          <p className="eyebrow">Sessions</p>
          <h2>Every time we made this</h2>
        </div>
        <div className="cook-log-list cook-log-list--cards">
          {recipe.cookLogs.map((log) => (
            <Link
              key={log.slug}
              href={`/recipes/${recipe.slug}/logs/${log.slug}`}
              className="cook-log-card"
            >
              <div className="cook-log-card__header">
                <h3>{log.title}</h3>
                <span className="cook-log-card__score" aria-label={`Score: ${log.score} out of 10`}>
                  {log.score.toFixed(1)}
                </span>
              </div>
              <p className="cook-log-card__meta">
                {formatLongDate(log.date)} · Finished around {log.finishedAt} · {log.servings}
              </p>
              <p className="cook-log-card__summary">{log.summary}</p>
              <span className="cook-log-card__cta">View full log →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

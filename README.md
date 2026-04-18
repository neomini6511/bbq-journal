# BBQ Journal

A mobile-first recipe and cook log journal built with Next.js 16 (App Router). Track what you cook, how it turns out, and what to change next time.

## Routes

| Route | Description |
|---|---|
| `/` | Feed of all recipes with the latest cook log preview |
| `/recipes/[slug]` | Recipe detail — Overview tab (ingredients, method, notes, sources) + Cook Logs tab |
| `/recipes/[slug]/logs` | Full list of cook sessions for one recipe |
| `/recipes/[slug]/logs/[logSlug]` | Individual cook log — stats, time-ordered event log with inline photos, gallery |

## Stack

- **Next.js 16** (App Router, static site generation via `generateStaticParams`)
- **TypeScript** — all data is typed
- **Custom CSS** via `src/app/globals.css` — no Tailwind dependency at runtime
- **`next/image`** — automatic optimization for all photos

## Agent Skill

For OpenClaw agents, a skill exists to guide real‑time BBQ cook logging and journal updates. It covers:

- Capturing timeline events, photos, and notes during a live cook.
- Transforming the raw log into structured recipe and cook‑log entries.
- Updating the data file and deploying the site.

The skill is located at `~/.openclaw/workspace/skills/bbq-journal-cook-log/`. Use it when M is documenting a BBQ cook and wants a polished archival report later.

---

## How to add a new recipe

### 1. Add photos

Create a folder under `public/images/` named `YYYY-MM-DD-recipe-slug/` and drop your numbered JPEG files in (e.g. `01.jpg`, `02.jpg`, …).

### 2. Add the recipe entry

Open `src/data/recipes.ts` and append a new object to the `recipes` array. The full type is defined at the top of that file. Here is a minimal skeleton:

```ts
{
  slug: "your-recipe-slug",            // URL segment — must be unique
  title: "Recipe Title",
  subtitle: "Short descriptor",
  butcher: "Where the meat came from", // optional
  weight: "~1.5 kg",                   // optional
  source: "Primary source label",
  coverImage: {
    src: "/images/YYYY-MM-DD-recipe-slug/23.jpg",
    alt: "Alt text",
    caption: "Caption shown under the hero image",
  },
  accentImages: [],                    // 0–3 images shown as a strip under the summary
  summary: "One or two sentence overview.",
  yield: "Serves X",
  equipment: ["Grill name", "Fuel type", "Other tool"],
  ingredients: [
    "Item 1",
    "Item 2",
  ],
  method: [
    "Step one description.",
    "Step two description.",
  ],
  tastingNotes: [
    "Note about the result.",
  ],
  nextTimeNotes: [
    "Thing to change next time.",
  ],
  sourceLinks: [
    { label: "Link label", href: "https://..." },
  ],
  cookLogs: [],  // add logs here (see below)
}
```

### 3. Add the first cook log

Add a `CookLog` object inside the `cookLogs` array of the recipe you just created:

```ts
{
  slug: "YYYY-MM-DD-first-cook",       // URL segment — unique within the recipe
  title: "First cook",
  date: "YYYY-MM-DD",
  summary: "One sentence about this session.",
  score: 8.5,                          // out of 10
  servings: "2 people",
  duration: "~5 h total",
  finishedAt: "15:45",                 // time the day wrapped up
  highlights: [
    "Key fact 1",
    "Key fact 2",
  ],
  timeline: [
    {
      time: "10:00",
      title: "Event title",
      details: ["Detail one.", "Detail two."],
      images: [                         // optional — inline photos for this event
        {
          src: "/images/YYYY-MM-DD-recipe-slug/01.jpg",
          alt: "Alt text",
          caption: "What this photo shows",
        },
      ],
    },
    // …more events in chronological order
  ],
  gallery: [                            // all photos for this cook, in order
    {
      src: "/images/YYYY-MM-DD-recipe-slug/01.jpg",
      alt: "Alt text",
      caption: "Caption",
    },
    // …
  ],
}
```

### 4. Verify

```bash
npm run build
```

All routes are statically generated — a successful build means the new recipe and log are ready to deploy.

---

## How to add a cook log to an existing recipe

1. Find the recipe object in `src/data/recipes.ts`.
2. Append a new `CookLog` entry to its `cookLogs` array (see shape above).
3. Add photos to `public/images/YYYY-MM-DD-recipe-slug/` (or a new dated folder).
4. Run `npm run build` to verify.

---

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

---

## Deploy

Connect the repo to [Vercel](https://vercel.com) for automatic deploys on push, or:

```bash
npx vercel --prod
```

---

Built for tasty experiments and better next times.

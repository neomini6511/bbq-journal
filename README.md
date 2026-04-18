# BBQ Journal

A mobile-first recipe and cook log journal built with Next.js. Track what you cook, how it turns out, and what to change next time.

## Structure

- **Home** — Feed of recipes with the latest cook log preview.
- **Recipe page** — Overview of the recipe with ingredients, method, tasting notes, and lessons.
- **Cook logs** — Every time you make a recipe, log the session. Multiple cooks per recipe.
- **Log detail** — Timeline of what happened and when, plus a full photo gallery.

## How to add a new recipe

1. Open `src/data/recipes.ts`.
2. Add a new entry to the `recipes` array following the `Recipe` type.
3. Add cook log(s) to the `cookLogs` array.
4. Add images to `public/images/YYYY-MM-DD-recipe-slug/`.
5. Reference the images in your recipe data.
6. Run `npm run build` to verify.
7. Commit and push.

## How to add a cook log to an existing recipe

1. Find the recipe in `src/data/recipes.ts`.
2. Add a new entry to the `cookLogs` array.
3. Add images to the appropriate public directory.
4. Update and deploy.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/` for static hosting.

## Deploy to Vercel

```bash
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deploys.

---

Built for tasty experiments and better next times.

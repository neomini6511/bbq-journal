export type RecipeLink = { label: string; href: string };

export type RecipeImage = {
  src: string;
  alt: string;
  caption: string;
};

export type TimelineEntry = {
  time: string;
  title: string;
  details: string[];
  images?: RecipeImage[];
};

export type RecipeScore = {
  slug: string;
  score: number;
};

export type CookLog = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  score: number; // legacy single score, use recipeScores for multiple recipes
  recipeScores?: RecipeScore[];
  butcher?: string;
  weight?: string;
  servings: string;
  duration: string;
  finishedAt: string;
  highlights: string[];
  timeline: TimelineEntry[];
  gallery: RecipeImage[];
};

export type Recipe = {
  slug: string;
  title: string;
  subtitle: string;
  source: string;
  coverImage: RecipeImage;
  accentImages: RecipeImage[];
  summary: string;
  yield: string;
  equipment: string[];
  ingredients: string[];
  method: string[];
  tastingNotes: string[];
  nextTimeNotes: string[];
  sourceLinks: RecipeLink[];
  tags: string[];
  cookLogs: CookLog[];
};

const beefRibGallery: RecipeImage[] = [
  { src: "/images/2026-04-18-beef-rib/01.jpg", alt: "Seasoned beef rib before cooking", caption: "Seasoned 1 kg beef rib after binder and rub applied." },
  { src: "/images/2026-04-18-beef-rib/02.jpg", alt: "Ninja app ignition screenshot", caption: "Ignition started in the Ninja app at 65 °C." },
  { src: "/images/2026-04-18-beef-rib/03.jpg", alt: "Smoker settings screenshot", caption: "First stage plan: 1 h 20 m at 65 °C." },
  { src: "/images/2026-04-18-beef-rib/04.jpg", alt: "Grill display at cook start", caption: "Grill display right around the start of the cook." },
  { src: "/images/2026-04-18-beef-rib/05.jpg", alt: "Pellet smoke rising from grill", caption: "Pellet ignition smoke during startup." },
  { src: "/images/2026-04-18-beef-rib/06.jpg", alt: "Beef rib placed on grill grate", caption: "Rib on the grate with probe inserted, 13 °C starting temperature." },
  { src: "/images/2026-04-18-beef-rib/07.jpg", alt: "App status at 10:58 – 20 min remaining", caption: "After pellet refill and temperature increase, ~20 min left in stage one." },
  { src: "/images/2026-04-18-beef-rib/08.jpg", alt: "App status at 11:23 – 48 °C internal", caption: "Second stage at 120 °C; internal temperature climbing through 48 °C." },
  { src: "/images/2026-04-18-beef-rib/09.jpg", alt: "Thermometer mode – 75 °C target set", caption: "Switched from timed mode to thermometer mode with a 75 °C target." },
  { src: "/images/2026-04-18-beef-rib/10.jpg", alt: "Rib inspection at 81 °C before wrapping", caption: "Bark well developed; spritzed and ready to wrap." },
  { src: "/images/2026-04-18-beef-rib/11.jpg", alt: "App showing 81 °C internal temperature", caption: "Internal reading just before the foil wrap." },
  { src: "/images/2026-04-18-beef-rib/12.jpg", alt: "App at 12:59 – 3:02 remaining, 95 °C target", caption: "Wrapped phase; target moved to 95 °C for tenderness." },
  { src: "/images/2026-04-18-beef-rib/13.jpg", alt: "Wrapped rib in foil at 12:59", caption: "Rib in foil, bark very dark, meat pulling back from the bone." },
  { src: "/images/2026-04-18-beef-rib/14.jpg", alt: "Wrapped rib at 13:30", caption: "Later tenderness check — getting very close to ready." },
  { src: "/images/2026-04-18-beef-rib/23.jpg", alt: "Finished plate – beef rib and potatoes", caption: "The finished plate: beef rib and golden potatoes." },
  { src: "/images/2026-04-18-beef-rib/24.jpg", alt: "Final meal close-up", caption: "Table-ready final shot of the first full cook." },
  { src: "/images/2026-04-18-beef-rib/25.jpg", alt: "Casual meal scene with rib", caption: "Enjoying the rib outdoors with condiments." },
  { src: "/images/2026-04-18-beef-rib/26.jpg", alt: "Plated barbecue meal", caption: "Final plate: beef rib, potato wedges, sauce, and mayo." },
  { src: "/images/2026-04-18-beef-rib/27.jpg", alt: "Cooked rib with salsa verde", caption: "Rib after cooking, ready to be carved." },
  { src: "/images/2026-04-18-beef-rib/28.jpg", alt: "Potato wedges breading", caption: "Coating potato wedges with seasoning mixture." },
  { src: "/images/2026-04-18-beef-rib/29.jpg", alt: "Potato cutting prep", caption: "Cutting potatoes for the side dish." },
];

const potatoGallery: RecipeImage[] = [
  { src: "/images/2026-04-18-beef-rib/15.jpg", alt: "Raw potatoes, cut into small pieces", caption: "Potatoes cut into small pieces for the side dish." },
  { src: "/images/2026-04-18-beef-rib/16.jpg", alt: "Potatoes in salted water", caption: "Potatoes washed and set in salted warm water before boiling." },
  { src: "/images/2026-04-18-beef-rib/17.jpg", alt: "Potatoes boiling", caption: "Potatoes at the boil before the air fry finish." },
  { src: "/images/2026-04-18-beef-rib/18.jpg", alt: "Potato seasoning mix", caption: "Country cuts seasoning, sticky rice powder, and oil for the coating." },
  { src: "/images/2026-04-18-beef-rib/19.jpg", alt: "App – potato air fry at 200 °C, 25 min", caption: "Air fry cycle started at 200 °C for 25 minutes." },
  { src: "/images/2026-04-18-beef-rib/20.jpg", alt: "Grill reset before potato cook", caption: "Grill reset for the potato stage after the beef rested." },
  { src: "/images/2026-04-18-beef-rib/21.jpg", alt: "App showing 24:27 remaining for potatoes", caption: "Potatoes in, roughly 24 minutes left on the air fry cycle." },
  { src: "/images/2026-04-18-beef-rib/22.jpg", alt: "Potatoes spread across grill racks", caption: "Potatoes on the upper rack and lower grill plate." },
  { src: "/images/2026-04-18-beef-rib/28.jpg", alt: "Potato wedges breading", caption: "Coating potato wedges with seasoning mixture." },
  { src: "/images/2026-04-18-beef-rib/29.jpg", alt: "Potato cutting prep", caption: "Cutting potatoes for the side dish." },
];

const steakGallery: RecipeImage[] = [
  { src: "/images/2026-04-19-steak/01.jpg", alt: "Raw steaks before seasoning", caption: "Two steaks ready for seasoning." },
  { src: "/images/2026-04-19-steak/02.jpg", alt: "Seasoned steaks", caption: "Salt and pepper applied." },
  { src: "/images/2026-04-19-steak/03.jpg", alt: "Steaks on hot grill", caption: "Steaks placed on the preheated grate." },
  { src: "/images/2026-04-19-steak/04.jpg", alt: "Cooking steaks", caption: "During the cook, smoke rising." },
  { src: "/images/2026-04-19-steak/05.jpg", alt: "Flipping steaks", caption: "Turning steaks after a few minutes." },
  { src: "/images/2026-04-19-steak/06.jpg", alt: "Cooked steaks off grill", caption: "Steaks removed after 6–8 minutes total." },
  { src: "/images/2026-04-19-steak/07.jpg", alt: "Plated steaks with sides", caption: "Served with accompaniments." },
  { src: "/images/2026-04-19-steak/08.jpg", alt: "Crust close-up", caption: "Detail of the steak crust." },
  { src: "/images/2026-04-19-steak/09.jpg", alt: "Side dish", caption: "Accompanying side dish." },
  { src: "/images/2026-04-19-steak/10.jpg", alt: "Final meal", caption: "Table shot of the finished meal." },
];

export const recipes: Recipe[] = [
  {
    slug: "ninja-woodfire-beef-rib",
    title: "Beef Rib BBQ",
    subtitle: "Low & Slow on the Ninja Woodfire XL",
    source: "Fleisch Discounter",
    coverImage: beefRibGallery[17], // plated barbecue meal with wedges and sauce
    accentImages: [beefRibGallery[0], beefRibGallery[9], beefRibGallery[15]],
    summary:
      "A first-run bone-in beef rib on the Ninja Woodfire XL, tracked live from seasoning through cleanup. The result was excellent — deep bark, strong smoke profile, and clear lessons for the next iteration.",
    yield: "Serves 2 generously",
    equipment: [
      "Ninja Woodfire XL grill",
      "Wood pellets",
      "Temperature probe",
      "Aluminium foil",
    ],
    ingredients: [
      "1 kg bone-in beef rib (Fleisch Discounter)",
      "Binder: apple cider vinegar + yellow mustard, 50/50",
      "Rub: coarse salt + black pepper, 50/50 — salt first, then pepper",
      "Spritz: water + vinegar, 50/50",
    ],
    method: [
      "Apply the 50/50 vinegar-mustard binder evenly over the rib. Season immediately with coarse salt, then black pepper.",
      "Ignite the Ninja Woodfire XL and set to 65 °C for 1 h 20 m. Wait for full ignition before loading the rib.",
      "Place the rib directly on the grate with a probe in the thickest part (avoid the bone).",
      "After 1 h 20 m total, flip the rib. Raise the grill to 120 °C. Switch the app to thermometer mode, target 75 °C internal, and immediately spritz all sides with the water-vinegar mix. This typically takes about 30 minutes.",
      "When the internal temperature reaches 75 °C and the bark is dark and set, remove the rib, spritz once more, wrap tightly in foil, and return to the grill at 150 °C.",
      "Cook wrapped until probe-tender, about 1–2 hours (check every 30 minutes). The probe should glide in with no resistance.",
      "Rest the rib wrapped for at least 40 min — use this time to prepare a side dish. Expect the bark to darken noticeably during the rest.",
    ],
    tastingNotes: [
      "Beef scored 8.5/10 — enough for two people and genuinely excellent.",
      "Bark was quite dark and a touch salty, but the overall flavour was still very good.",
    ],
    nextTimeNotes: [
      "Reduce salt slightly on the bark — the exterior ended up a bit too salty.",
      "Probe carefully through foil. A hole was made this time and juice leaked out.",
      "Expect significant darkening during a long foil rest — don't judge colour at pull time.",
    ],
    sourceLinks: [
      { label: "Dad Got This: Woodfire Smoked Beef Dino Ribs", href: "https://dadgotthis.com/woodfire-smoked-beef-dino-ribs/" },
      { label: "YouTube – Beef Rib guide (lxhidk0mAWg)", href: "https://youtu.be/lxhidk0mAWg?si=26iVTBTxf9sNhEv4" },
      { label: "YouTube – Beef Rib guide (nFVu_XwLrew)", href: "https://youtu.be/nFVu_XwLrew?si=5zpj3Dkp8M0RlA" },
    ],
    tags: ["beef", "rib", "low-and-slow", "ninja-woodfire"],
    cookLogs: [
      {
        slug: "2026-04-18-first-cook",
        title: "First full cook on the new grill",
        date: "2026-04-18",
        summary:
          "Live-documented first run of the beef rib recipe on the Ninja Woodfire XL. Excellent result on the beef with a deep bark; clear lessons for refining the bark salt balance and the potato side.",
        score: 8.5,
        recipeScores: [
          { slug: "ninja-woodfire-beef-rib", score: 8.5 },
          { slug: "air-fried-potatoes", score: 5 }
        ],
        butcher: "Fleisch Discounter",
        weight: "~1 kg",
        servings: "2 people",
        duration: "~5 h 45 m (cook + eating + cleanup)",
        finishedAt: "15:45",
        highlights: [
          "Beef rib: 8.5/10 – excellent bark, a touch salty",
          "Potatoes: 5/10 – coating needs work, boil was too long",
          "~1 kg bone-in beef rib from Fleisch Discounter",
          "Cook started 10:00, finished eating around 15:45",
          "Wrapped at 81 °C, finished to probe tenderness",
          "~40 min foil rest while air frying potatoes",
        ],
        timeline: [
          {
            time: "09:52",
            title: "Ignition started",
            details: [
              "Ninja app showed ignition at 1%.",
              "Stage one set to 65 °C for 1 h 20 m.",
            ],
            images: [beefRibGallery[1], beefRibGallery[2]], // 02, 03
          },
          {
            time: "10:00",
            title: "Beef seasoned and loaded",
            details: [
              "Binder: 50% apple cider vinegar, 50% yellow mustard.",
              "Rub: 50% coarse salt (first), 50% black pepper.",
              "Rib placed on the grate with a probe inserted; starting internal temperature 13 °C.",
            ],
            images: [beefRibGallery[0], beefRibGallery[3], beefRibGallery[4], beefRibGallery[5]], // 01, 04, 05, 06
          },
          {
            time: "10:50",
            title: "Pellet refill",
            details: ["More pellets added; ignition restarted."],
          },
          {
            time: "11:00",
            title: "Temperature raised to 80 °C",
            details: [
              "Grill raised to 80 °C.",
              "App showed roughly 20 min remaining in stage one.",
            ],
            images: [beefRibGallery[6]], // 07
          },
          {
            time: "11:20",
            title: "Rib turned — stage two begins",
            details: [
              "Rib flipped after 1 h 20 m total.",
              "Grill raised to 120 °C; next milestone ~75 °C internal.",
            ],
            images: [beefRibGallery[7]], // 08
          },
          {
            time: "11:25",
            title: "Switched to thermometer mode",
            details: [
              "App changed from timed to thermometer mode.",
              "Target set to 75 °C internal; current reading 48 °C.",
            ],
            images: [beefRibGallery[8]], // 09
          },
          {
            time: "11:30",
            title: "First spritz",
            details: ["Rib spritzed on all sides with 50/50 water and vinegar. Lid closed."],
          },
          {
            time: "12:15",
            title: "Inspection and wrap at 81 °C",
            details: [
              "Bark dark and well developed; surface colour looking great.",
              "Spritzed again, wrapped tightly in aluminium foil.",
              "Grill set to 150 °C; cooking to tenderness rather than a fixed number.",
            ],
            images: [beefRibGallery[9], beefRibGallery[10]], // 10, 11
          },
          {
            time: "12:59",
            title: "Wrapped phase check",
            details: [
              "App target moved to 95 °C.",
              "Bark very dark; meat beginning to pull back from the bone.",
              "About 3 h 02 m left on the app timer at this point.",
            ],
            images: [beefRibGallery[11], beefRibGallery[12]], // 12, 13
          },
          {
            time: "13:00",
            title: "Extended 30 minutes",
            details: ["Still not probe tender — cook extended by another 30 min."],
          },
          {
            time: "13:30",
            title: "Tenderness check — getting close",
            details: [
              "Probe resistance noticeably improved.",
              "Decided to leave it 10–20 min more while starting potato prep.",
            ],
            images: [beefRibGallery[13]], // 14
          },
          {
            time: "13:39",
            title: "Potato prep started",
            details: [
              "0.8 kg potatoes cut into small pieces, washed, held in salted warm water.",
              "Plan: boil 5–8 min, then air fry.",
              "See Air‑fried Potatoes recipe for method.",
            ],
            images: [potatoGallery[0], potatoGallery[1], potatoGallery[2]],
          },
          {
            time: "13:46",
            title: "Potatoes seasoned",
            details: [
              "2 tbsp country cuts seasoning, 2 tbsp sticky rice powder, 1 tbsp oil.",
              "See Air‑fried Potatoes recipe for details.",
            ],
            images: [potatoGallery[3]],
          },
          {
            time: "13:50",
            title: "Beef off — resting",
            details: ["Rib removed from the grill and wrapped in foil to rest."],
          },
          {
            time: "14:00",
            title: "Potato air fry started",
            details: [
              "Old pellets cleared out.",
              "New air fry cycle: 200 °C for 25 min.",
              "See Air‑fried Potatoes recipe for details.",
            ],
            images: [potatoGallery[4], potatoGallery[5]],
          },
          {
            time: "14:10",
            title: "Potatoes loaded",
            details: [
              "Potatoes placed across the upper rack and lower grill plate.",
              "App showed 24 min 27 sec remaining.",
              "See Air‑fried Potatoes recipe for details.",
            ],
            images: [potatoGallery[6], potatoGallery[7]],
          },
          {
            time: "14:23",
            title: "Potatoes turned",
            details: [
              "Potatoes moved for more even cooking with ~12 min left.",
              "See Air‑fried Potatoes recipe for details.",
            ],
          },
          {
            time: "14:30",
            title: "Served",
            details: [
              "Potatoes out. Beef unwrapped after a ~40 min rest. Meal ready.",
            ],
            images: [beefRibGallery[13], beefRibGallery[14]],
          },
          {
            time: "15:45",
            title: "Day wrapped up",
            details: ["Cooking, eating, and cleanup all finished by 15:45."],
          },
        ],
        gallery: beefRibGallery,
      },
    ],
  },
  {
    slug: "air-fried-potatoes",
    title: "Air‑fried Potatoes",
    subtitle: "Crispy side for grilled mains",
    source: "Ninja Woodfire XL",
    coverImage: potatoGallery[0],
    accentImages: [potatoGallery[3], potatoGallery[7]],
    summary: "Par‑boiled then air‑fried potatoes, seasoned with country cuts and sticky rice powder. They stayed crunchy but the coating needs refinement.",
    yield: "Serves 2 as a side",
    equipment: [
      "Ninja Woodfire XL",
      "Pot for boiling",
      "Mixing bowl",
    ],
    ingredients: [
      "0.8 kg potatoes, cut small",
      "Salt for water",
      "2 tbsp country cuts seasoning",
      "2 tbsp sticky rice powder",
      "1 tbsp oil",
    ],
    method: [
      "Cut potatoes into small pieces, wash, hold in salted warm water.",
      "Boil 3–5 minutes until just tender, then drain (avoid over‑boiling).",
      "Toss with country cuts seasoning, sticky rice powder, and oil.",
      "Air fry at 200 °C for 20–25 minutes, turning once, until golden and crisp.",
    ],
    tastingNotes: [
      "Potatoes stayed crunchy but the sticky rice powder coating wasn't the right choice.",
    ],
    nextTimeNotes: [
      "Rework the coating; skip the sticky rice powder.",
      "Shorten the boil time — 3–5 minutes is enough.",
    ],
    sourceLinks: [],
    tags: ["potato", "side", "air-fry", "ninja-woodfire"],
    cookLogs: [],
  },
  {
    slug: "ninja-woodfire-steak",
    title: "Steak on Ninja Woodfire XL",
    subtitle: "High‑heat direct grilling",
    source: "Unknown butcher",
    coverImage: steakGallery[5],
    accentImages: [steakGallery[0], steakGallery[2], steakGallery[8]],
    summary: "Quick weeknight steak cooked directly on high heat. Simple salt‑and‑pepper seasoning, 6–8 minutes total.",
    yield: "Serves 2",
    equipment: ["Ninja Woodfire XL grill", "Wood pellets"],
    ingredients: [
      "Two steaks (cut unknown, ~1.5–2 cm thick)",
      "Coarse salt",
      "Black pepper",
    ],
    method: [
      "Season steaks generously with salt and pepper on both sides.",
      "Preheat the grill on high (maximum temperature).",
      "Place steaks directly on the grate. Cook 3–4 minutes per side for thinner steaks, 4–5 minutes per side for thicker ones.",
      "Remove when internal temperature reaches desired doneness (or rely on timing and visual cues for thin steaks).",
      "Rest briefly before serving.",
    ],
    tastingNotes: [
      "Steaks scored 8/10 — turned out great, juicy with a good crust.",
    ],
    nextTimeNotes: [
      "For thin steaks (under 2 cm), thermometer readings are unreliable; better to rely on timing and visual cues.",
      "High‑heat direct grilling works fine for quick weeknight steak.",
      "Experiment with reverse sear for thicker cuts.",
    ],
    sourceLinks: [],
    tags: ["beef", "steak", "high-heat", "ninja-woodfire"],
    cookLogs: [
      {
        slug: "2026-04-19-steak",
        title: "Quick high‑heat steak",
        date: "2026-04-19",
        summary: "Simple steak cook on the Ninja Woodfire XL using maximum heat. Relied on timing rather than thermometer for thin steaks.",
        score: 8,
        servings: "2 people",
        duration: "~15 min (cook + rest)",
        finishedAt: "18:30",
        highlights: [
          "Steaks scored 8/10 — turned out great.",
          "Seasoning: just salt and pepper.",
          "Cook time: 6 minutes for small steak, 8 minutes for larger one.",
          "Thermometer unreliable on thin steaks; timing used instead.",
        ],
        timeline: [
          {
            time: "18:15",
            title: "Steaks seasoned and loaded",
            details: [
              "Steaks seasoned with salt and pepper.",
              "Grill preheated on high.",
              "Steaks placed directly on the grate.",
            ],
            images: [steakGallery[0], steakGallery[1]],
          },
          {
            time: "18:20",
            title: "Flipped",
            details: [
              "Smaller steak flipped after about 3–4 minutes.",
              "Larger steak flipped after about 4–5 minutes.",
            ],
            images: [steakGallery[4]],
          },
          {
            time: "18:25",
            title: "Removed",
            details: [
              "Smaller steak removed after about 6 minutes total.",
              "Larger steak removed after about 8 minutes total.",
            ],
            images: [steakGallery[5]],
          },
          {
            time: "18:30",
            title: "Served",
            details: ["Steaks rested briefly, then served."],
            images: [steakGallery[6], steakGallery[7]],
          },
        ],
        gallery: steakGallery,
      },
    ],
  },
];

export function getRecipes() {
  return recipes;
}

export function getRecipe(slug: string) {
  return recipes.find((recipe) => recipe.slug === slug);
}

export function getCookLog(recipeSlug: string, logSlug: string) {
  return getRecipe(recipeSlug)?.cookLogs.find((log) => log.slug === logSlug);
}

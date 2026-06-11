/* ============================================================
   data.js  —  shared recipe database for WinCo Run / Meal Planner
   ============================================================ */

/* ---------- pantry defaults ----------
   Ingredients marked pantry:true are excluded from generated
   shopping lists unless the user removes them from their pantry. */
const PANTRY_DEFAULTS = new Set([
  'white-rice','garlic','butter','cumin','oregano','bay-leaf',
  'salt','black-pepper','cooking-oil','knorr-de-pollo','garlic-minced-jar'
]);

/* ---------- recipe library ---------- */
const RECIPES = [

  /* ── MAIN ROTATION ─────────────────────────────────── */

  {
    id: 'garlic-butter-shrimp',
    name: 'Garlic Butter Shrimp',
    subtitle: 'over rice',
    category: 'main',
    servings: 4,
    time: 20,
    sourceUrl: null,
    ingredients: [
      { id:'shrimp',       name:'Frozen shrimp',  amount:1,   unit:'lb',    section:'Meat & Seafood', bulk:false },
      { id:'butter',       name:'Butter',          amount:4,   unit:'tbsp',  section:'Dairy',          bulk:false, pantry:true },
      { id:'garlic',       name:'Garlic',          amount:6,   unit:'cloves',section:'Produce',        bulk:false, pantry:true },
      { id:'limes',        name:'Limes',            amount:2,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'cilantro',     name:'Cilantro',         amount:1,   unit:'bunch', section:'Produce',        bulk:false },
      { id:'white-rice',   name:'White rice',       amount:2,   unit:'cups',  section:'Bulk Bins',      bulk:true,  pantry:true },
    ],
    steps:[
      'Thaw and pat shrimp dry.',
      'Melt butter in a large pan over medium-high heat.',
      'Add garlic, cook 1 min.',
      'Add shrimp, cook 2–3 min per side until pink.',
      'Squeeze lime over, top with cilantro.',
      'Serve over rice.',
    ]
  },

  {
    id: 'ropa-vieja',
    name: 'Ropa Vieja',
    subtitle: 'Cuban shredded beef · rice & beans',
    category: 'main',
    servings: 5,
    time: 120,
    sourceUrl: 'https://www.sofritoproject.com/recipes/2019/2/12/ropa-vieja',
    ingredients: [
      { id:'chuck-roast',      name:'Chuck roast',         amount:2,   unit:'lb',  section:'Meat & Seafood', bulk:false },
      { id:'yellow-onion',     name:'Yellow onions',        amount:1,   unit:'ct',  section:'Produce',        bulk:false },
      { id:'bell-peppers',     name:'Bell peppers',         amount:2,   unit:'ct',  section:'Produce',        bulk:false },
      { id:'garlic',           name:'Garlic',               amount:4,   unit:'cloves',section:'Produce',      bulk:false, pantry:true },
      { id:'diced-tomatoes',   name:'Diced tomatoes',       amount:1,   unit:'can', section:'Canned & Dry',   bulk:false },
      { id:'tomato-sauce',     name:'Tomato sauce',         amount:1,   unit:'can', section:'Canned & Dry',   bulk:false },
      { id:'white-vinegar',    name:'White vinegar',        amount:2,   unit:'tbsp',section:'Canned & Dry',   bulk:false },
      { id:'cumin',            name:'Cumin',                amount:1,   unit:'tsp', section:'Spices',         bulk:false, pantry:true },
      { id:'oregano',          name:'Oregano',              amount:1,   unit:'tsp', section:'Spices',         bulk:false, pantry:true },
      { id:'bay-leaf',         name:'Bay leaf',             amount:2,   unit:'ct',  section:'Spices',         bulk:false, pantry:true },
      { id:'white-rice',       name:'White rice',           amount:2,   unit:'cups',section:'Bulk Bins',      bulk:true,  pantry:true },
      { id:'black-beans-dry',  name:'Dried black beans',    amount:1,   unit:'lb',  section:'Bulk Bins',      bulk:true,  weighed:true },
    ],
    steps:[
      'Season beef with salt, cumin, oregano.',
      'Brown beef in a Dutch oven or Instant Pot.',
      'Add onion, peppers, garlic — cook 3 min.',
      'Add tomatoes, tomato sauce, vinegar, bay leaves.',
      'Braise 1.5 hrs on stovetop (or 45 min pressure).',
      'Shred beef, return to sauce.',
      'Serve over rice with beans.',
    ]
  },

  {
    id: 'carnitas',
    name: 'Instant Pot Carnitas',
    subtitle: 'rice & beans · tortillas',
    category: 'main',
    servings: 6,
    time: 75,
    sourceUrl: 'https://nomnompaleo.com/instant-pot-pressure-cooker-carnitas',
    ingredients: [
      { id:'pork-shoulder',  name:'Pork shoulder / butt', amount:4,   unit:'lb',    section:'Meat & Seafood', bulk:false },
      { id:'oranges',        name:'Oranges',               amount:1,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'yellow-onion',   name:'Yellow onions',          amount:1,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'garlic',         name:'Garlic',                 amount:6,   unit:'cloves',section:'Produce',        bulk:false, pantry:true },
      { id:'cumin',          name:'Cumin',                  amount:2,   unit:'tsp',   section:'Spices',         bulk:false, pantry:true },
      { id:'oregano',        name:'Oregano',                amount:1,   unit:'tsp',   section:'Spices',         bulk:false, pantry:true },
      { id:'bay-leaf',       name:'Bay leaf',               amount:2,   unit:'ct',    section:'Spices',         bulk:false, pantry:true },
      { id:'soft-tortillas', name:'Soft tortillas',         amount:1,   unit:'pack',  section:'Canned & Dry',   bulk:false },
      { id:'white-rice',     name:'White rice',             amount:2,   unit:'cups',  section:'Bulk Bins',      bulk:true,  pantry:true },
      { id:'black-beans-dry',name:'Dried black beans',      amount:0.5, unit:'lb',    section:'Bulk Bins',      bulk:true,  weighed:true },
    ],
    steps:[
      'Cut pork into 2-inch chunks, season with salt, cumin, oregano.',
      'Add to Instant Pot with garlic, onion, orange juice + zest, bay leaves.',
      'Pressure cook 30 min, natural release 15 min.',
      'Shred pork, spread on sheet pan.',
      'Broil 5–7 min until edges crisp.',
      'Serve in tortillas with rice and beans.',
    ]
  },

  {
    id: 'moros-y-cristianos',
    name: 'Moros y Cristianos',
    subtitle: 'black beans & rice · leftover carnitas',
    category: 'main',
    servings: 5,
    time: 60,
    sourceUrl: 'https://icuban.com/food/moros_y_cristianos.html',
    ingredients: [
      { id:'black-beans-dry', name:'Dried black beans',  amount:1,   unit:'lb',    section:'Bulk Bins',    bulk:true, weighed:true },
      { id:'yellow-onion',    name:'Yellow onions',       amount:1,   unit:'ct',    section:'Produce',      bulk:false },
      { id:'green-pepper',    name:'Green bell pepper',   amount:1,   unit:'ct',    section:'Produce',      bulk:false },
      { id:'garlic',          name:'Garlic',              amount:4,   unit:'cloves',section:'Produce',      bulk:false, pantry:true },
      { id:'tomato-sauce',    name:'Tomato sauce',        amount:0.5, unit:'can',   section:'Canned & Dry', bulk:false },
      { id:'white-vinegar',   name:'White vinegar',       amount:1,   unit:'tbsp',  section:'Canned & Dry', bulk:false },
      { id:'white-rice',      name:'White rice',          amount:2,   unit:'cups',  section:'Bulk Bins',    bulk:true, pantry:true },
      { id:'cumin',           name:'Cumin',               amount:1,   unit:'tsp',   section:'Spices',       bulk:false, pantry:true },
      { id:'oregano',         name:'Oregano',             amount:1,   unit:'tsp',   section:'Spices',       bulk:false, pantry:true },
      { id:'bay-leaf',        name:'Bay leaf',            amount:2,   unit:'ct',    section:'Spices',       bulk:false, pantry:true },
    ],
    steps:[
      'Soak beans overnight or quick-soak 1 hr.',
      'Cook beans until just tender, reserve liquid.',
      'Sauté onion, pepper, garlic until soft.',
      'Add tomato sauce, vinegar, spices — cook 2 min.',
      'Add rice, beans, and enough bean liquid to cook rice.',
      'Cover and simmer 20 min until rice is done.',
    ]
  },

  {
    id: 'baked-chicken-thighs',
    name: 'Baked Chicken Thighs',
    subtitle: 'with rice',
    category: 'main',
    servings: 4,
    time: 45,
    sourceUrl: null,
    ingredients: [
      { id:'chicken-thighs', name:'Bone-in chicken thighs', amount:3,   unit:'lb',    section:'Meat & Seafood', bulk:false },
      { id:'garlic',         name:'Garlic',                  amount:4,   unit:'cloves',section:'Produce',        bulk:false, pantry:true },
      { id:'cooking-oil',    name:'Cooking oil',             amount:2,   unit:'tbsp',  section:'Canned & Dry',   bulk:false, pantry:true },
      { id:'cumin',          name:'Cumin',                   amount:1,   unit:'tsp',   section:'Spices',         bulk:false, pantry:true },
      { id:'white-rice',     name:'White rice',              amount:2,   unit:'cups',  section:'Bulk Bins',      bulk:true,  pantry:true },
      { id:'limes',          name:'Limes',                   amount:2,   unit:'ct',    section:'Produce',        bulk:false },
    ],
    steps:[
      'Preheat oven to 425°F.',
      'Pat chicken dry, rub with oil, garlic, cumin, salt.',
      'Bake skin-side up 35–40 min until skin is crispy.',
      'Rest 5 min, squeeze lime over.',
      'Serve with rice.',
    ]
  },

  {
    id: 'carne-asada-tacos',
    name: 'Carne Asada Tacos',
    subtitle: '',
    category: 'main',
    servings: 4,
    time: 30,
    sourceUrl: null,
    ingredients: [
      { id:'flank-skirt-steak', name:'Flank or skirt steak',  amount:1.5, unit:'lb',    section:'Meat & Seafood', bulk:false },
      { id:'limes',             name:'Limes',                  amount:3,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'garlic',            name:'Garlic',                 amount:4,   unit:'cloves',section:'Produce',        bulk:false, pantry:true },
      { id:'cilantro',          name:'Cilantro',               amount:1,   unit:'bunch', section:'Produce',        bulk:false },
      { id:'yellow-onion',      name:'Yellow onions',           amount:0.5, unit:'ct',    section:'Produce',        bulk:false },
      { id:'soft-tortillas',    name:'Soft tortillas',          amount:1,   unit:'pack',  section:'Canned & Dry',   bulk:false },
      { id:'cooking-oil',       name:'Cooking oil',             amount:2,   unit:'tbsp',  section:'Canned & Dry',   bulk:false, pantry:true },
    ],
    steps:[
      'Marinate steak in lime juice, garlic, oil, salt — 30 min to 2 hrs.',
      'Grill or pan-sear over high heat, 3–4 min per side.',
      'Rest 5 min, slice thin against the grain.',
      'Serve in warm tortillas with diced onion and cilantro.',
    ]
  },

  {
    id: 'arroz-con-pollo',
    name: 'Arroz con Pollo',
    subtitle: '',
    category: 'main',
    servings: 5,
    time: 60,
    sourceUrl: null,
    ingredients: [
      { id:'chicken-thighs',  name:'Bone-in chicken thighs', amount:3,   unit:'lb',    section:'Meat & Seafood', bulk:false },
      { id:'yellow-onion',    name:'Yellow onions',           amount:1,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'bell-peppers',    name:'Bell peppers',            amount:1,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'garlic',          name:'Garlic',                  amount:4,   unit:'cloves',section:'Produce',        bulk:false, pantry:true },
      { id:'tomato-sauce',    name:'Tomato sauce',            amount:1,   unit:'can',   section:'Canned & Dry',   bulk:false },
      { id:'white-rice',      name:'White rice',              amount:2,   unit:'cups',  section:'Bulk Bins',      bulk:true,  pantry:true },
      { id:'cumin',           name:'Cumin',                   amount:1,   unit:'tsp',   section:'Spices',         bulk:false, pantry:true },
      { id:'cooking-oil',     name:'Cooking oil',             amount:2,   unit:'tbsp',  section:'Canned & Dry',   bulk:false, pantry:true },
    ],
    steps:[
      'Brown chicken in oil in a wide pan, set aside.',
      'Sauté onion, pepper, garlic until soft.',
      'Add tomato sauce, cumin — cook 2 min.',
      'Add rice, stir to coat.',
      'Nestle chicken back in, add 2.5 cups water or broth.',
      'Cover and simmer 25 min until rice is cooked and chicken is done.',
    ]
  },

  {
    id: 'taco-night',
    name: 'Taco Night',
    subtitle: 'ground beef',
    category: 'main',
    servings: 4,
    time: 25,
    sourceUrl: null,
    ingredients: [
      { id:'ground-beef',    name:'Ground beef (80/20)',  amount:1.5, unit:'lb',   section:'Meat & Seafood', bulk:false },
      { id:'soft-tortillas', name:'Soft tortillas',        amount:1,   unit:'pack', section:'Canned & Dry',   bulk:false },
      { id:'yellow-onion',   name:'Yellow onions',          amount:0.5, unit:'ct',   section:'Produce',        bulk:false },
      { id:'garlic',         name:'Garlic',                 amount:3,   unit:'cloves',section:'Produce',       bulk:false, pantry:true },
      { id:'limes',          name:'Limes',                  amount:2,   unit:'ct',   section:'Produce',        bulk:false },
      { id:'cilantro',       name:'Cilantro',               amount:1,   unit:'bunch',section:'Produce',        bulk:false },
      { id:'cheese-shred',   name:'Shredded cheese',        amount:1,   unit:'bag',  section:'Dairy',          bulk:false },
      { id:'cumin',          name:'Cumin',                  amount:2,   unit:'tsp',  section:'Spices',         bulk:false, pantry:true },
    ],
    steps:[
      'Brown ground beef, drain fat.',
      'Add onion, garlic, cumin — cook 3 min.',
      'Season to taste.',
      'Serve in tortillas with cheese, lime, cilantro.',
    ]
  },

  {
    id: 'bean-cheese-burritos',
    name: 'Bean & Cheese Burritos',
    subtitle: '',
    category: 'main',
    servings: 4,
    time: 20,
    sourceUrl: null,
    ingredients: [
      { id:'black-beans-can',  name:'Canned black beans',  amount:2,   unit:'cans', section:'Canned & Dry',   bulk:false },
      { id:'soft-tortillas',   name:'Soft tortillas (large)',amount:1,  unit:'pack', section:'Canned & Dry',   bulk:false },
      { id:'cheese-shred',     name:'Shredded cheese',      amount:1,   unit:'bag',  section:'Dairy',          bulk:false },
      { id:'garlic',           name:'Garlic',               amount:2,   unit:'cloves',section:'Produce',       bulk:false, pantry:true },
      { id:'cumin',            name:'Cumin',                amount:1,   unit:'tsp',  section:'Spices',         bulk:false, pantry:true },
      { id:'cooking-oil',      name:'Cooking oil',          amount:1,   unit:'tbsp', section:'Canned & Dry',   bulk:false, pantry:true },
    ],
    steps:[
      'Heat oil, add garlic and cumin — cook 1 min.',
      'Add drained beans, mash roughly, season.',
      'Warm tortillas.',
      'Fill with beans and cheese, roll tight.',
      'Optional: pan-toast seam-side down until crisp.',
    ]
  },

  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    subtitle: '',
    category: 'main',
    servings: 5,
    time: 40,
    sourceUrl: null,
    ingredients: [
      { id:'ground-beef',   name:'Ground beef (80/20)',  amount:1.5, unit:'lb',   section:'Meat & Seafood', bulk:false },
      { id:'spaghetti',     name:'Spaghetti',             amount:1,   unit:'box',  section:'Canned & Dry',   bulk:false },
      { id:'marinara',      name:'Jar marinara / red sauce',amount:1, unit:'jar',  section:'Canned & Dry',   bulk:false },
      { id:'yellow-onion',  name:'Yellow onions',          amount:1,   unit:'ct',   section:'Produce',        bulk:false },
      { id:'garlic',        name:'Garlic',                 amount:3,   unit:'cloves',section:'Produce',       bulk:false, pantry:true },
      { id:'cooking-oil',   name:'Cooking oil',            amount:1,   unit:'tbsp', section:'Canned & Dry',   bulk:false, pantry:true },
    ],
    steps:[
      'Brown beef, drain fat.',
      'Add onion and garlic, cook 3 min.',
      'Pour in marinara, simmer 15 min.',
      'Cook spaghetti to package directions.',
      'Serve sauce over pasta.',
    ]
  },

  {
    id: 'caldo-de-pollo',
    name: 'Caldo de Pollo',
    subtitle: 'Mexican chicken soup',
    category: 'main',
    servings: 6,
    time: 60,
    sourceUrl: null,
    ingredients: [
      { id:'chicken-thighs', name:'Bone-in chicken thighs', amount:2.5, unit:'lb',    section:'Meat & Seafood', bulk:false },
      { id:'yellow-onion',   name:'Yellow onions',           amount:1,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'garlic',         name:'Garlic',                  amount:5,   unit:'cloves',section:'Produce',        bulk:false, pantry:true },
      { id:'cilantro',       name:'Cilantro',                amount:1,   unit:'bunch', section:'Produce',        bulk:false },
      { id:'limes',          name:'Limes',                   amount:2,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'zucchini',       name:'Zucchini',                amount:2,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'corn-cobs',      name:'Corn on the cob',         amount:2,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'knorr-de-pollo', name:'Knorr de Pollo',          amount:2,   unit:'tsp',   section:'Canned & Dry',   bulk:false, pantry:true },
    ],
    steps:[
      'Add chicken, onion, garlic, knorr to a large pot, cover with water.',
      'Bring to boil, skim foam, simmer 20 min.',
      'Add zucchini and corn, simmer 15 more min.',
      'Pull chicken, shred, return to pot.',
      'Season to taste, top with cilantro and lime.',
    ]
  },

  {
    id: 'birria-tacos',
    name: 'Birria-Style Beef Tacos',
    subtitle: 'consommé for dipping',
    category: 'main',
    servings: 5,
    time: 150,
    sourceUrl: null,
    ingredients: [
      { id:'chuck-roast',    name:'Chuck roast',          amount:2.5, unit:'lb',    section:'Meat & Seafood', bulk:false },
      { id:'dried-chiles',   name:'Dried guajillo chiles',amount:4,   unit:'ct',    section:'Canned & Dry',   bulk:false },
      { id:'diced-tomatoes', name:'Diced tomatoes',        amount:1,   unit:'can',   section:'Canned & Dry',   bulk:false },
      { id:'yellow-onion',   name:'Yellow onions',          amount:1,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'garlic',         name:'Garlic',                 amount:5,   unit:'cloves',section:'Produce',        bulk:false, pantry:true },
      { id:'soft-tortillas', name:'Soft tortillas',          amount:1,   unit:'pack',  section:'Canned & Dry',   bulk:false },
      { id:'cheese-shred',   name:'Shredded cheese',         amount:1,   unit:'bag',   section:'Dairy',          bulk:false },
      { id:'cilantro',       name:'Cilantro',                amount:1,   unit:'bunch', section:'Produce',        bulk:false },
      { id:'limes',          name:'Limes',                   amount:2,   unit:'ct',    section:'Produce',        bulk:false },
      { id:'cumin',          name:'Cumin',                   amount:1,   unit:'tsp',   section:'Spices',         bulk:false, pantry:true },
      { id:'oregano',        name:'Oregano',                 amount:1,   unit:'tsp',   section:'Spices',         bulk:false, pantry:true },
    ],
    steps:[
      'Toast guajillo chiles, soak in hot water 15 min.',
      'Blend chiles with tomatoes, garlic, onion, cumin, oregano.',
      'Season and sear beef chunks, add chile sauce + water to cover.',
      'Braise 2 hrs until fall-apart tender (or Instant Pot 45 min).',
      'Shred beef, reserve broth (consommé).',
      'Dip tortillas in consommé, fill with beef and cheese, pan-fry.',
      'Serve with cilantro, lime, and cups of consommé for dipping.',
    ]
  },

  /* ── KID BACKUP / QUICK MEALS ───────────────────────── */

  {
    id: 'pancakes',
    name: 'Pancakes',
    subtitle: 'from mix',
    category: 'kid',
    servings: 4,
    time: 20,
    sourceUrl: null,
    ingredients: [
      { id:'pancake-mix',  name:'Pancake mix',  amount:1,   unit:'box',  section:'Canned & Dry', bulk:false },
      { id:'eggs',         name:'Eggs',          amount:2,   unit:'ct',   section:'Dairy',        bulk:false },
      { id:'milk',         name:'Milk',           amount:1,   unit:'cup',  section:'Dairy',        bulk:false },
      { id:'butter',       name:'Butter',         amount:2,   unit:'tbsp', section:'Dairy',        bulk:false, pantry:true },
      { id:'syrup',        name:'Maple syrup',    amount:1,   unit:'bottle',section:'Canned & Dry',bulk:false },
    ],
    steps:[
      'Mix pancake mix with egg and milk per box directions.',
      'Heat buttered pan or griddle over medium.',
      'Pour batter, cook until bubbles form — flip.',
      'Serve with syrup.',
    ]
  },

  {
    id: 'mac-and-cheese',
    name: 'Mac & Cheese',
    subtitle: 'boxed',
    category: 'kid',
    servings: 3,
    time: 15,
    sourceUrl: null,
    ingredients: [
      { id:'mac-box',  name:'Boxed mac & cheese', amount:2,   unit:'boxes', section:'Canned & Dry', bulk:false },
      { id:'butter',   name:'Butter',              amount:2,   unit:'tbsp',  section:'Dairy',        bulk:false, pantry:true },
      { id:'milk',     name:'Milk',                amount:0.25,unit:'cup',   section:'Dairy',        bulk:false },
    ],
    steps:[
      'Cook pasta per box, drain.',
      'Add butter, milk, cheese packet.',
      'Stir until smooth.',
    ]
  },

  {
    id: 'chicken-nuggets',
    name: 'Chicken Nuggets',
    subtitle: 'frozen',
    category: 'kid',
    servings: 3,
    time: 20,
    sourceUrl: null,
    ingredients: [
      { id:'frozen-nuggets', name:'Frozen chicken nuggets', amount:1, unit:'bag', section:'Frozen', bulk:false },
    ],
    steps:[
      'Preheat oven to 400°F.',
      'Spread nuggets on a sheet pan.',
      'Bake 15–18 min, flip halfway.',
    ]
  },

  {
    id: 'quesadillas',
    name: 'Chicken Quesadillas',
    subtitle: '',
    category: 'kid',
    servings: 4,
    time: 20,
    sourceUrl: null,
    ingredients: [
      { id:'rotisserie-chicken', name:'Rotisserie chicken (shredded)',amount:1, unit:'ct',   section:'Meat & Seafood', bulk:false },
      { id:'soft-tortillas',     name:'Soft tortillas',               amount:1, unit:'pack', section:'Canned & Dry',   bulk:false },
      { id:'cheese-shred',       name:'Shredded cheese',              amount:1, unit:'bag',  section:'Dairy',          bulk:false },
      { id:'cooking-oil',        name:'Cooking oil',                  amount:1, unit:'tbsp', section:'Canned & Dry',   bulk:false, pantry:true },
    ],
    steps:[
      'Heat oil in pan over medium.',
      'Place tortilla, add cheese and chicken on half.',
      'Fold, cook 2 min per side until golden.',
      'Slice and serve.',
    ]
  },

  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese',
    subtitle: '+ tomato soup',
    category: 'kid',
    servings: 3,
    time: 15,
    sourceUrl: null,
    ingredients: [
      { id:'bread',          name:'Bread (sliced)',       amount:1, unit:'loaf', section:'Canned & Dry', bulk:false },
      { id:'cheese-sliced',  name:'Cheese slices',        amount:1, unit:'pkg',  section:'Dairy',        bulk:false },
      { id:'butter',         name:'Butter',               amount:3, unit:'tbsp', section:'Dairy',        bulk:false, pantry:true },
      { id:'tomato-soup-can',name:'Canned tomato soup',   amount:2, unit:'cans', section:'Canned & Dry', bulk:false },
      { id:'milk',           name:'Milk',                 amount:0.5,unit:'cup', section:'Dairy',        bulk:false },
    ],
    steps:[
      'Butter outside of bread slices.',
      'Fill with cheese, pan-fry over medium until golden.',
      'Heat tomato soup with milk per can directions.',
    ]
  },

  {
    id: 'scrambled-eggs',
    name: 'Scrambled Eggs & Toast',
    subtitle: '',
    category: 'kid',
    servings: 3,
    time: 10,
    sourceUrl: null,
    ingredients: [
      { id:'eggs',    name:'Eggs',              amount:8,   unit:'ct',   section:'Dairy',        bulk:false },
      { id:'milk',    name:'Milk',              amount:3,   unit:'tbsp', section:'Dairy',        bulk:false },
      { id:'butter',  name:'Butter',            amount:1,   unit:'tbsp', section:'Dairy',        bulk:false, pantry:true },
      { id:'bread',   name:'Bread (sliced)',     amount:1,   unit:'loaf', section:'Canned & Dry', bulk:false },
    ],
    steps:[
      'Whisk eggs with milk and a pinch of salt.',
      'Melt butter in pan over medium-low.',
      'Add eggs, fold gently until just set.',
      'Serve with toast.',
    ]
  },

  {
    id: 'ramen-upgrade',
    name: 'Ramen Upgrade',
    subtitle: 'add egg & green onion',
    category: 'kid',
    servings: 2,
    time: 10,
    sourceUrl: null,
    ingredients: [
      { id:'instant-ramen',  name:'Instant ramen packs',  amount:2, unit:'ct',    section:'Canned & Dry', bulk:false },
      { id:'eggs',           name:'Eggs',                 amount:2, unit:'ct',    section:'Dairy',        bulk:false },
      { id:'green-onion',    name:'Green onions',          amount:3, unit:'stalks',section:'Produce',      bulk:false },
    ],
    steps:[
      'Cook ramen per package.',
      'Soft-boil egg 7 min, peel and halve.',
      'Top ramen with egg and sliced green onion.',
    ]
  },

  {
    id: 'frozen-pizza',
    name: 'Frozen Pizza',
    subtitle: '',
    category: 'kid',
    servings: 3,
    time: 20,
    sourceUrl: null,
    ingredients: [
      { id:'frozen-pizza', name:'Frozen pizza', amount:1, unit:'ct', section:'Frozen', bulk:false },
    ],
    steps:[
      'Preheat oven to temperature on box.',
      'Bake directly on rack or sheet pan.',
      'Slice and serve.',
    ]
  },

  {
    id: 'hot-dogs',
    name: 'Hot Dogs',
    subtitle: '',
    category: 'kid',
    servings: 4,
    time: 10,
    sourceUrl: null,
    ingredients: [
      { id:'hot-dogs',     name:'Hot dogs',       amount:1, unit:'pkg', section:'Meat & Seafood', bulk:false },
      { id:'hot-dog-buns', name:'Hot dog buns',   amount:1, unit:'pkg', section:'Canned & Dry',   bulk:false },
    ],
    steps:[
      'Boil, grill, or pan-cook hot dogs.',
      'Serve in buns with your choice of toppings.',
    ]
  },

]; /* end RECIPES */

/* ---------- section sort order ---------- */
const SECTION_ORDER = [
  'Produce','Bulk Bins','Meat & Seafood','Dairy','Canned & Dry','Frozen','Spices','Other'
];

/* ---------- localStorage helpers ---------- */
const KEYS = {
  plannerState: 'plannerStateV1',
  generatedList: 'plannerGeneratedListV1',
  priceMemory:   'plannerPriceMemoryV1',
};

function loadPlannerState() {
  try {
    const raw = localStorage.getItem(KEYS.plannerState);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return {
    week: { sun:null,mon:null,tue:null,wed:null,thu:null,fri:null,sat:null },
    kidBackup: { sun:null,mon:null,tue:null,wed:null,thu:null,fri:null,sat:null },
    lastWeek: null,
    pantry: [...PANTRY_DEFAULTS],
    favorites: [],
    lastCooked: {},
  };
}

function savePlannerState(state) {
  try { localStorage.setItem(KEYS.plannerState, JSON.stringify(state)); } catch(e) {}
}

function loadPriceMemory() {
  try {
    const raw = localStorage.getItem(KEYS.priceMemory);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return {};
}

function savePriceMemory(mem) {
  try { localStorage.setItem(KEYS.priceMemory, JSON.stringify(mem)); } catch(e) {}
}

/* ---------- list generation ---------- */
function generateShoppingList(weekPlan, kidBackupPlan, pantrySet) {
  const combined = {};

  function addRecipe(recipeId) {
    if (!recipeId) return;
    const recipe = RECIPES.find(r => r.id === recipeId);
    if (!recipe) return;
    for (const ing of recipe.ingredients) {
      if (pantrySet.has(ing.id)) continue;
      if (combined[ing.id]) {
        combined[ing.id].amount += ing.amount;
      } else {
        combined[ing.id] = { ...ing };
      }
    }
  }

  const DAYS = ['sun','mon','tue','wed','thu','fri','sat'];
  DAYS.forEach(d => {
    addRecipe(weekPlan[d]);
    addRecipe(kidBackupPlan[d]);
  });

  // Format for shopping list (compatible with index.html DATA format)
  return Object.values(combined)
    .sort((a, b) => {
      const ai = SECTION_ORDER.indexOf(a.section);
      const bi = SECTION_ORDER.indexOf(b.section);
      return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
    })
    .map(ing => ({
      id: ing.id,
      name: ing.name,
      note: formatIngNote(ing),
      bulk: ing.bulk || false,
      weighed: ing.weighed || false,
      section: ing.section,
    }));
}

function formatIngNote(ing) {
  const amt = ing.amount % 1 === 0 ? ing.amount : parseFloat(ing.amount.toFixed(2));
  const unitLabel = formatUnit(ing.unit, ing.amount);
  return `${amt} ${unitLabel}`;
}

function formatUnit(unit, amount) {
  const pl = amount !== 1;
  const map = {
    'lb': 'lb', 'ct': pl ? 'ct' : 'ct', 'bunch': pl ? 'bunches' : 'bunch',
    'can': pl ? 'cans' : 'can', 'pack': pl ? 'packs' : 'pack',
    'bag': pl ? 'bags' : 'bag', 'box': pl ? 'boxes' : 'box',
    'jar': pl ? 'jars' : 'jar', 'cup': pl ? 'cups' : 'cup',
    'tbsp': 'tbsp', 'tsp': 'tsp', 'cloves': 'cloves', 'stalks': 'stalks',
    'bottle': pl ? 'bottles' : 'bottle', 'pkg': pl ? 'pkgs' : 'pkg',
  };
  return map[unit] || unit;
}

/* ---------- helpers ---------- */
function getRecipeById(id) { return RECIPES.find(r => r.id === id) || null; }

function getRecipesByCategory(cat) { return RECIPES.filter(r => r.category === cat); }

function dayLabel(d) {
  return { sun:'Sunday',mon:'Monday',tue:'Tuesday',wed:'Wednesday',
           thu:'Thursday',fri:'Friday',sat:'Saturday' }[d] || d;
}

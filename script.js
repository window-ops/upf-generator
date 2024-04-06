const ingredients = {
  'flour': 1000,
  'artificial flavor': 10,
  'high fructose corn syrup': 10,
  'modified corn starch': 8,
  'sodium benzoate': 8,
  'potassium sorbate': 8,
  'artificial color': 8,
  'monosodium glutamate': 6,
  'soy lecithin': 6,
  'xanthan gum': 6,
  'cellulose gum': 6,
  'carrageenan': 6,
  'maltodextrin': 5,
  'dextrose': 5,
  'sucralose': 5,
  'acesulfame potassium': 5,
  'natural flavor': 3,
  'sugar': 3,
  'salt': 3,
  'vinegar': 3,
  'yeast': 3,
  'spices': 2,
  'vegetables': 1,
  'fruits': 1,
  'citric acid': 5,
  'sodium citrate': 4,
  'calcium chloride': 4,
  'sodium phosphate': 4,
  'sodium caseinate': 3,
  'disodium inosinate': 3,
  'disodium guanylate': 3,
  'sodium stearoyl lactylate': 3,
  'glycerol monostearate': 3,
  'polysorbate 80': 3,
  'propylene glycol alginate': 3,
  'magnesium sulfate': 2,
  'calcium propionate': 2,
  'sodium erythorbate': 2,
  'sodium nitrate': 2,
  'calcium sorbate': 2,
  'sodium ascorbate': 2,
  'tocopherols': 2,
  'ascorbic acid': 2,
  'sodium alginate': 1,
  'guar gum': 1,
  'locust bean gum': 1,
  'pectin': 1,
  'corn syrup': 1,
  'invert sugar': 1,
  'molasses': 1,
  'honey': 1,
  'high oleic sunflower oil': 1,
  'palm oil': 1,
  'hydrogenated vegetable oil': 1,
  'enzyme modified butter': 1,
  'butter oil': 1,
  'date syrup': 1,
  'agave nectar': 1,
  'brown rice syrup': 1,
  'corn oil': 1,
  'canola oil': 1,
  'soybean oil': 1,
  'mono and diglycerides': 1,
  'sorbitan monostearate': 1,
  'soy protein isolate': 1,
  'whey protein concentrate': 1,
  'textured vegetable protein': 1,
  'hydrolyzed vegetable protein': 1,
  'autolyzed yeast extract': 1,
  'hydrolyzed yeast protein': 1,
  'hydrolyzed soy protein': 1,
  'hydrolyzed wheat protein': 1,
  'flavor enhancer': 1,
  'preservative': 1,
  'stabilizer': 1,
  'thickener': 1,
  'emulsifier': 1,
  'coloring': 1,
  'sweetener': 1,
  'antioxidant': 1,
  'acid regulator': 1,
  'sequestrant': 1,
  'firming agent': 1,
  'humectant': 1,
  'foaming agent': 1,
  'glazing agent': 1,
  'improver': 1,
  'bleaching agent': 1,
  'chelating agent': 1,
  'packaging gas': 1,
  'propellant': 1,
  'raising agent': 1,
  'anti-caking agent': 1,
  'modified food starch': 1,
  'gelatin': 1,
  'isomalt': 1,
  'maltitol': 1,
  'mannitol': 1,
  'sorbitol': 1,
  'xylitol': 1,
  'erythritol': 1,
  'polydextrose': 1,
  'resistant maltodextrin': 1,
  'inulin': 1,
  'oligofructose': 1,
  'fructooligosaccharides': 1,
  'galactooligosaccharides': 1,
  'lactitol': 1,
  'maltose': 1,
  'lactose': 1,
  'trehalose': 1,
  'turbinado sugar': 1,
  'demerara sugar': 1,
  'muscovado sugar': 1,
  'panela sugar': 1,
  'rapadura sugar': 1,
  'sucanat': 1
};

function generateIngredients() {
  const numIngredients = Math.floor(Math.random() * (25 - 5 + 1)) + 5;
  const ingredientsList = [];
  const totalWeight = Object.values(ingredients).reduce((a, b) => a + b, 0);
  const usedIngredients = new Set();

  for (let i = 0; i < numIngredients; i++) {
    let weight = Math.floor(Math.random() * totalWeight) + 1;

    for (const [ingredient, prob] of Object.entries(ingredients)) {
      weight -= prob;
      if (weight <= 0 && !usedIngredients.has(ingredient)) {
        ingredientsList.push(ingredient);
        usedIngredients.add(ingredient);
        break;
      }
    }
  }

  return ingredientsList;
}

function generateUltraProcessedFood() {
  const foodName = ['Snack', 'Bar', 'Bite', 'Crisp', 'Puff', 'Ball', 'Stick', 'Nugget', 'Piece', 'Chip'][Math.floor(Math.random() * 10)];
  const ingredientList = generateIngredients();
  return `Food name: ${foodName}\n\nIngredients: ${ingredientList.join(', ')}`;
}

document.getElementById('generate').addEventListener('click', () => {
  document.getElementById('food').innerText = generateUltraProcessedFood() + '\n\nDisclaimer: The generator is not realistic and is intentionally biased towards generating food with tons of unhealthy additives (because that is the food you would find in the supermarket).';
  document.getElementById('food-container').style.display = 'block';
});
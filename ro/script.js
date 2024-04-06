const ingredients = {
  'făină': 100000,
  'aromă artificială': 10,
  'sirop de porumb cu conținut ridicat de fructoză': 10,
  'amidon de porumb modificat': 8,
  'benzoat de sodiu': 8,
  'sorbat de potasiu': 8,
  'colorant artificial': 8,
  'glutamat monosodic': 6,
  'lecitină de soia': 6,
  'gumă de xantan': 6,
  'gumă de celuloză': 6,
  'caragenan': 6,
  'maltodextrină': 5,
  'dextroză': 5,
  'sucraloză': 5,
  'acesulfam de potasiu': 5,
  'aromă naturală': 3,
  'zahăr': 3,
  'sare': 3,
  'oțet': 3,
  'drojdie': 3,
  'condimente': 2,
  'legume': 1,
  'fructe': 1,
  'acid citric': 5,
  'citrat de sodiu': 4,
  'clorură de calciu': 4,
  'fosfat de sodiu': 4,
  'cazeinat de sodiu': 3,
  'inozinat disodic': 3,
  'guanilat de disodiu': 3,
  'stearoil lactilat de sodiu': 3,
  'monostearat de glicerol': 3,
  'polisorbat 80': 3,
  'alginat de propilenglicol': 3,
  'sulfat de magneziu': 2,
  'propionat de calciu': 2,
  'eritorbat de sodiu': 2,
  'nitrat de sodiu': 2,
  'sorbat de calciu': 2,
  'ascorbat de sodiu': 2,
  'tocoferoli': 2,
  'acid ascorbic': 2,
  'alginat de sodiu': 1,
  'gumă de guar': 1,
  'gumă de carruba': 1,
  'pectină': 1,
  'sirop de porumb': 1,
  'zahăr invertit': 1,
  'melasă': 1,
  'miere': 1,
  'ulei de floarea-soarelui cu conținut ridicat de oleic': 1,
  'ulei de palmier': 1,
  'ulei vegetal hidrogenat': 1,
  'unt modificat enzimatic': 1,
  'ulei de unt': 1,
  'sirop de curmale': 1,
  'nectar de agave': 1,
  'sirop de orez brun': 1,
  'ulei de porumb': 1,
  'ulei de canola': 1,
  'ulei de soia': 1,
  'mono și digliceride': 1,
  'monostearat de sorbitan': 1,
  'izolat proteic de soia': 1,
  'concentrat de proteine din zer': 1,
  ' proteină vegetală texturată': 1,
  'proteină vegetală hidrolizată': 1,
  'extract de drojdie autolizată': 1,
  'proteină de drojdie hidrolizată': 1,
  'proteină de soia hidrolizată': 1,
  'proteină de grâu hidrolizată': 1,
  'potențiator de aromă': 1,
  'conservant': 1,
  'stabilizator': 1,
  'agent de îngroșare': 1,
  'emulgator': 1,
  'colorant': 1,
  'îndulcitor': 1,
  'antioxidant': 1,
  'corector de aciditate': 1,
  'sechestrant': 1,
  'agent de întărire': 1,
  'umectant': 1,
  'agent de spumare': 1,
  'agent de glazurare': 1,
  'ameliorator': 1,
  'agent de înălbire': 1,
  'agent de chelatizare': 1,
  'gaz de ambalare': 1,
  'agent de propulsie': 1,
  'agent de creștere': 1,
  'agent antiaglomerant': 1,
  'amidon alimentar modificat': 1,
  'gelatină': 1,
  'izomalt': 1,
  'maltitol': 1,
  'manitol': 1,
  'sorbitol': 1,
  'xilitol': 1,
  'eritritol': 1,
  'polidextroză': 1,
  'maltodextrină rezistentă': 1,
  'inulină': 1,
  'oligofructoză': 1,
  'fructooligozaharide': 1,
  'galactooligozaharide': 1,
  'lactitol': 1,
  'maltoză': 1,
  'lactoză': 1,
  'trehaloză': 1,
  'zahăr turbinado': 1,
  'zahăr demerara': 1,
  'zahăr muscovado': 1,
  'zahăr panela': 1,
  'zahăr rapadura': 1,
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
  const foodName = ['Gustare', 'Baton', 'Mușcătură', 'Crocant', 'Pufulete', 'Minge', 'Stic', 'Pepită', 'Piesă', 'Chip'][Math.floor(Math.random() * 10)];
  const ingredientList = generateIngredients();
  return `Denumire Aliment: ${foodName}\n\nIngrediente: ${ingredientList.join(', ')}`;
}

document.getElementById('generate').addEventListener('click', () => {
  document.getElementById('food').innerText = generateUltraProcessedFood() + '\n\nDisclaimer: Generatorul nu este realist și este în mod intenționat înclinat spre generarea de alimente cu tone de aditivi nesănătoși (pentru că acestea sunt alimentele pe care le găsiți la supermarket).';
  document.getElementById('food-container').style.display = 'block';
});
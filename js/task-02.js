const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const ingredientRef = document.querySelector('#ingredients');
const ingredientName = [];
const ingredientEl = ingredients.map(ingredient => {
  const heading = document.createElement('li');
  heading.textContent = ingredient;
  heading.classList.add('item');
  // console.log(heading);
  ingredientName.push(heading);
});
// console.log(ingredientName);
ingredientRef.append(...ingredientName);

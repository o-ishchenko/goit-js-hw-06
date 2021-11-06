const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 const  ingredientsList = ingredients.map(ingredient => {
    const listItemEl = document.createElement('li');
    listItemEl.textContent = ingredient;
    listItemEl.classList = "item";
    return listItemEl;
 })
const listEl = document.querySelector('#ingredients');
listEl.append(...ingredientsList);
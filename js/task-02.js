const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const list = document.querySelector("#ingredients");
// ingredients.forEach((ingredient) => {
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   item.classList.add(item);
//   createList.append(item);
//   console.log(item);
// });

const list = document.querySelector('#ingredients');

let createElement = new DocumentFragment();

for (const value of ingredients) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.textContent += value;
  createElement.appendChild(item);
}

document.querySelector('ul#ingredients').append(createElement);
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("ul");

const makeList = (ingredients) => {
  return ingredients.map((ingredients) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = ingredients;
    return listEl;
  });
};
const listEl = makeList(ingredients);
ulEl.append(...listEl);

// const list = ingredients.map((ingredients) => {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   listEl.textContent = ingredients;
//   return listEl;
// });
// console.log(list);
// ulEl.append(...list);

// for (const ingredient of ingredients) {
//   const listEl = document.createElement("li");
//   listEl.classList.add("item");
//   listEl.textContent = ingredient;
//   list.push(listEl);
// }
// ulEl.append(...list);

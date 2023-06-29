const catsElements = document.querySelectorAll("ul>li.item");
console.log(`Number of categories: ${catsElements.length}`);

catsElements.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  const listArr = element.querySelectorAll(`li`);
  console.log(`Elements: ${listArr.length} `);
});

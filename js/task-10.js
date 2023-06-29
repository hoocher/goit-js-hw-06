function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputValue = document.querySelector("input");
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divToAppent = document.getElementById("boxes");

function createBoxes(amount) {
  amount = inputValue.value;
  console.log(amount);
  const newDiv = [];
  let defSize = 30;
  for (let i = 0; i < amount; i = i + 1) {
    const div = document.createElement("div");
    div.style.width = `${defSize}px`;
    div.style.height = `${defSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    defSize = defSize + 10;
    newDiv.push(div);
  }
  divToAppent.append(...newDiv);
}

function destroyBoxes() {
  const divs = divToAppent.querySelectorAll("div");
  for (let i = 0; i <= divs.length; i += 1) {
    divs[i].remove();
  }
}
console.log;
createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);

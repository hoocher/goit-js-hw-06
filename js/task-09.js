function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnEl = document.querySelector("button");
const bodyEl = document.querySelector("body");
const textEl = document.querySelector("span");
btnEl.addEventListener("click", changeColor);
function changeColor() {
  const newHexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newHexColor;
  textEl.textContent = `${newHexColor}`;
}

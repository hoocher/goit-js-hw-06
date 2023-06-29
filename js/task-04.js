const valueEl = document.querySelector("#value");
const buttonIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);

let counterValue = Number(valueEl.textContent);

const increment = () => {
  counterValue += +1;
  return (valueEl.textContent = counterValue);
};
const decrement = () => {
  counterValue += -1;
  return (valueEl.textContent = counterValue);
};

buttonIncrementEl.addEventListener("click", increment);
buttonDecrementEl.addEventListener("click", decrement);

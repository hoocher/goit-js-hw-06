const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontSizeChange = () => {
  const size = inputEl.value;
  textEl.style.fontSize = `${size}px`;
};

inputEl.addEventListener("input", fontSizeChange);

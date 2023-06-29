const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const inputText = (inputEl) => {
  const string = outputEl.value;
  if (inputEl.currentTarget.value) {
    return (outputEl.textContent = inputEl.currentTarget.value);
  } else return (outputEl.textContent = "Anonymous");
};

inputEl.addEventListener("input", inputText);

const inputEl = document.querySelector("#validation-input");

const check = (event) => {
  const input = inputEl.value;
  if (input.length === Number(inputEl.dataset.length)) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    // console.log("6 digits");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
    // console.log("Must be 6 digits!!!");
  }
};

inputEl.addEventListener("blur", check);

const formEl = document.querySelector("form");
const inputArr = document.querySelectorAll("input");

const submitOnForm = (event) => {
  event.preventDefault();
  const objectFromFormOnSubmit = {};
  let alertCheck = 0;
  inputArr.forEach((input) => {
    if (input.value.length === 0) {
      alertCheck += 1;
    }
  });
  if (alertCheck === 0) {
    inputArr.forEach((pole) => {
      const { name, value } = pole;
      objectFromFormOnSubmit[name] = value;
    });
    console.log(objectFromFormOnSubmit);
  } else {
    alert("You must fill all inputs");
  }

  formEl.reset();
};

formEl.addEventListener("submit", submitOnForm);

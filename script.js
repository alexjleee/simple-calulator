const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const displayResult = calculator.querySelector(".calculator__display__result");

let acc, current, operator, prevKey;

buttons.addEventListener("click", (e) => {
  const buttonType = e.target.classList[1];
  const buttonContet = e.target.textContent;

  // When a number button is clicked
  if (buttonType === "number") {
    if (current === "0") {
      current = "";
    }
    current += buttonContet;
    displayResult.textContent = current;
  }

  // When dot button is clicked
  if (buttonType === "dot") {
    if (!current.includes(".")) {
      current += buttonContet;
      displayResult.textContent = current;
    }
  }

  // When all-clear button is clicked
  if (buttonType === "all-clear") {
    acc = null;
    current = null;
    operator = null;
    displayResult.textContent = "0";
    prevKey = "clear";
  }

  // When +/- button is clicked
  if (buttonType === "plus-minus") {
    if (current[0] === "-") {
      current = current.substring(1);
    } else {
      current = "-" + current;
    }
    displayResult.textContent = current;
  }

  // When % (percentage) button is clicked
  if (buttonType === "percentage") {
    current /= 100;
  }
  displayResult.textContent = current;
});

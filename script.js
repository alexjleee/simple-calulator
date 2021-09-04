const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const displayResult = calculator.querySelector(".calculator__display__result");

let current = "0";

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

  // When all-clear button is clicked
  if (buttonType === "all-clear") {
    current = "0";
    displayResult.textContent = current;
  }
});

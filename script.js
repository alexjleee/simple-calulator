const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const displayResult = calculator.querySelector(".calculator__display__result");

let acc, current, operator, prevKey;

buttons.addEventListener("click", (e) => {
  const buttonType = e.target.classList[1];
  const buttonContet = e.target.textContent;

  function calculate(s1, op, s2) {
    let n1 = Number(s1);
    let n2 = Number(s2);

    if (op === "+") {
      return n1 + n2;
    }
    if (op === "-") {
      return n1 - n2;
    }
    if (op === "×") {
      return n1 * n2;
    }
    if (op === "÷") {
      return n1 / n2;
    }
  }

  console.log(
    `B acc: ${acc}, current: ${current}, operator: ${operator}, prevKey: ${prevKey}`
  );

  // When a number button is clicked
  if (buttonType === "number") {
    if (displayResult.textContent === "0" || prevKey === "operator") {
      current = "";
    }
    current += buttonContet;
    displayResult.textContent = current;
    prevKey = "number";
  }

  // When an operator button is clicked
  if (buttonType === "operator") {
    if (acc && operator && prevKey !== "operator") {
      current = calculate(acc, operator, current);
      displayResult.textContent = current;
    }
    acc = displayResult.textContent;
    operator = buttonContet;
    prevKey = "operator";
  }

  // When calculate button is clicked
  if (buttonType === "calculate") {
    current = calculate(acc, operator, current);
    acc = null;
    displayResult.textContent = current;
    prevKey = "calculate";
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

  console.log(
    `A acc: ${acc}, current: ${current}, operator: ${operator}, prevKey: ${prevKey}`
  );
});

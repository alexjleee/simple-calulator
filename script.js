
const calculator = document.querySelector(".calculator");
const buttons = calculator.querySelector(".calculator__buttons");
const displayResult = calculator.querySelector(
  ".calculator__display__result"
);

let acc = null;
let current = "0";
let operator = null;
let prevKey = "clear";

function calculate(s1, op, s2) {
  const n1 = Number(s1);
  const n2 = Number(s2);

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
    if (n2 === 0) {
      return "Error";
    }

    return n1 / n2;
  }

  return n2;
}

function updateDisplay(value) {
  displayResult.textContent = value;
}

function formatNumber(value) {
  if (value === "Error") {
    return "Error";
  }

  return String(Number(value));
}

buttons.addEventListener("click", (e) => {
  const button = e.target.closest("button");

  if (!button) {
    return;
  }

  const buttonType = button.classList[1];
  const buttonContent = button.textContent.trim();

  // Number buttons
  if (buttonType === "number") {
    if (
      current === "0" ||
      prevKey === "operator" ||
      prevKey === "calculate"
    ) {
      current = "";
    }

    current += buttonContent;

    updateDisplay(current);
    prevKey = "number";
  }

  // Operator buttons
  else if (buttonType === "operator") {
    if (prevKey === "operator") {
      operator = buttonContent;
      return;
    }

    if (acc !== null && operator !== null && prevKey !== "calculate") {
      current = formatNumber(calculate(acc, operator, current));

      if (current === "Error") {
        updateDisplay(current);
        acc = null;
        operator = null;
        prevKey = "calculate";
        return;
      }
    }

    acc = current;
    operator = buttonContent;

    updateDisplay(current);
    prevKey = "operator";
  }

  // Calculate button
  else if (buttonType === "calculate") {
    if (acc !== null && operator !== null) {
      current = formatNumber(calculate(acc, operator, current));

      updateDisplay(current);

      acc = null;
      operator = null;

      prevKey = "calculate";
    }
  }

  // Decimal button
  else if (buttonType === "dot") {
    if (prevKey === "operator" || prevKey === "calculate") {
      current = "0";
    }

    if (!current.includes(".")) {
      current += ".";
    }

    updateDisplay(current);
    prevKey = "number";
  }

  // All-clear button
  else if (buttonType === "all-clear") {
    acc = null;
    current = "0";
    operator = null;
    prevKey = "clear";

    updateDisplay("0");
  }

  // Plus-minus button
  else if (buttonType === "plus-minus") {
    if (current !== "0" && current !== "Error") {
      current = String(Number(current) * -1);
    }

    updateDisplay(current);
  }

  // Percentage button
  else if (buttonType === "percentage") {
    if (current !== "Error") {
      current = String(Number(current) / 100);
    }

    updateDisplay(current);
  }
});

const buttonsOperator = document.getElementsByClassName("operator");
const buttons = document.getElementsByClassName("btn");
const displayInput = document.getElementById("display");

let currentInput = "";
let previousInput = "";
let operator = null;

// Add event listeners to all buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let value = this.textContent; // Get the value of the clicked button

    if (!isNaN(value) || value === ".") {
      currentInput += value;
      displayInput.value = currentInput;
    } else if (
      value === "+" ||
      value === "-" ||
      value === "x" ||
      value === "/"
    ) {
      operator = value;
      previousInput = currentInput;
      currentInput = "";
    } else if (value === "C") {
      // Corrected case sensitivity
      currentInput = "";
      previousInput = "";
      operator = null;
      displayInput.value = "";
    } else if (value === "=") {
      if (previousInput !== "" && operator !== null && currentInput !== "") {
        let result = 0;
        const prev = parseFloat(previousInput); // Use `prev` and `current` to avoid redeclaration
        const current = parseFloat(currentInput);

        // Perform the calculation based on the operator
        if (operator === "+") {
          result = prev + current;
        } else if (operator === "-") {
          result = prev - current;
        } else if (operator === "x") {
          result = prev * current;
        } else if (operator === "/") {
          result = prev / current;
        }

        // Display the result and allow further calculations
        displayInput.value = result;
        currentInput = result.toString(); // Store result as the next input
        operator = null;
        previousInput = "";
      }
    }
  });
}

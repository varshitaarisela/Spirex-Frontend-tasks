
// Get HTML Elements
const display = document.getElementById("display");
const message = document.getElementById("message");

// Calculator Variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;

// Display Number
function appendNumber(number) {

    message.innerText = "";

    if (display.value === "Error") {
        clearDisplay();
    }

    if (shouldResetDisplay) {
        display.value = number;
        shouldResetDisplay = false;
    } else {
        if (display.value === "0") {
            display.value = number;
        } else {
            display.value += number;
        }
    }
}

// Decimal Point
function appendDecimal() {

    if (display.value === "Error") {
        clearDisplay();
    }

    if (shouldResetDisplay) {
        display.value = "0.";
        shouldResetDisplay = false;
        return;
    }

    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

// Select Operator
function chooseOperator(selectedOperator) {

    if (display.value === "Error") {
        return;
    }

    if (operator !== "" && !shouldResetDisplay) {
        calculateResult();

        if (display.value === "Error") {
            return;
        }
    }

    firstNumber = display.value;
    operator = selectedOperator;
    shouldResetDisplay = true;
}

// Calculate Result
function calculateResult() {

    if (operator === "" || shouldResetDisplay) {
        return;
    }

    secondNumber = display.value;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
    let result;

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                display.value = "Error";
                message.innerText = "Cannot divide by zero!";
                operator = "";
                firstNumber = "";
                shouldResetDisplay = true;
                return;
            }

            result = num1 / num2;
            break;
    }

    // Handle Invalid Results
    if (!Number.isFinite(result)) {
        display.value = "Error";
        message.innerText = "Invalid calculation!";
    } else {
        display.value = parseFloat(result.toPrecision(12)).toString();
        message.innerText = "";
    }

    firstNumber = display.value;
    operator = "";
    shouldResetDisplay = true;
}

// Clear Calculator
function clearDisplay() {

    display.value = "0";
    firstNumber = "";
    secondNumber = "";
    operator = "";
    shouldResetDisplay = false;
    message.innerText = "";
}

// Backspace
function deleteLast() {

    if (display.value === "Error" || shouldResetDisplay) {
        clearDisplay();
        return;
    }

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}

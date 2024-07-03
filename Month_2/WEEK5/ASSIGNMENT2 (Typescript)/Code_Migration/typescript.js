"use strict";
let currentNumber = "";
let previousNumber = "";
let operation = "";
function appendNumber(number) {
    currentNumber += number;
    const display = document.getElementById("display");
    display.value = currentNumber;
}
function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operation = "";
    const display = document.getElementById("display");
    display.value = "";
}
function decimalPoint() {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        const display = document.getElementById("display");
        display.value = currentNumber;
    }
}
function appendOperator(op) {
    if (currentNumber !== "") {
        previousNumber = currentNumber;
        currentNumber = "";
        operation = op;
    }
}
function calculate() {
    if (currentNumber !== "" && previousNumber !== "") {
        let result;
        const prevNum = parseFloat(previousNumber);
        const currNum = parseFloat(currentNumber);
        switch (operation) {
            case "+":
                result = prevNum + currNum;
                break;
            case "-":
                result = prevNum - currNum;
                break;
            case "*":
                result = prevNum * currNum;
                break;
            case "/":
                if (currNum === 0) {
                    alert("Division by zero is not allowed!");
                }
                else {
                    result = prevNum / currNum;
                }
                break;
            default:
                result = undefined;
                break;
        }
        if (result !== undefined) {
            currentNumber = result.toString();
            previousNumber = "";
            operation = "";
            const display = document.getElementById("display");
            display.value = currentNumber;
        }
    }
}

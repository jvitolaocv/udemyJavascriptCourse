const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Creates an output for display box
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function displayLogEntry(operator, initial, number, current) {
  const logEntry = {
    operation: operator,
    prevResult: initial,
    number: number,
    result: current,
  };
  console.log(logEntry);
}

// Displays logEntries in console
function displayLogEntries(value) {
  logEntries.push(value);
  console.log(logEntries);
}

// Performs math operation
function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    !enteredNumber
  ) {
    return;
  }

  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  displayLogEntry(calculationType, initialResult, enteredNumber, currentResult);
}

// Value entered by user
function getUserNumberInput() {
  return +userInput.value;
}

// Adds value to  'Result'
function add() {
  calculateResult("ADD");
}

// Subtracts value from 'Result'
function subtract() {
  calculateResult("SUBTRACT");
}

// Multiplys 'Result' by value
function multiply() {
  calculateResult("MULTIPLY");
}

//Divides the 'Result' by value
function divide() {
  calculateResult("DIVIDE");
}

// Executes method on button click
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

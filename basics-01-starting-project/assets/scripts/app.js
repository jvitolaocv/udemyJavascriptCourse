const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Creates an output for display box
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

// Displays logEntries in console
function displayLogEntries(value) {
    logEntries.push(value)
    console.log(logEntries)
}

function displayLogEntry(operator, initial, number, current ) {
    const logEntry = {
        operation: operator,
        prevResult: initial,
        number: number,
        result: current
    }
    
    console.log(logEntry)
}

// Value entered by user
function getUserNumberInput() {
    return +userInput.value
}

// Adds value to  'Result'
function add() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber)
    displayLogEntries(enteredNumber)
    displayLogEntry('ADD', initialResult, enteredNumber, currentResult)
}

// Subtracts value from 'Result'
function subtract() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber)
    displayLogEntries(enteredNumber)
    displayLogEntry('SUBTRACT', initialResult, enteredNumber, currentResult)
}

// Multiplys 'Result' by value
function multiply() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber)
    displayLogEntries(enteredNumber)
    displayLogEntry('MULTIPLY', initialResult, enteredNumber, currentResult)
}

//Divides the 'Result' by value
function divide() {
    const enteredNumber = getUserNumberInput()
    const initialResult = currentResult
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber)
    displayLogEntries(enteredNumber)
    displayLogEntry('DIVIDE', initialResult, enteredNumber, currentResult)
}


// Executes method on button click
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
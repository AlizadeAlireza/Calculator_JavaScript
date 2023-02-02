class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
    }

    clear() {}

    delete() {}

    apppendNumber(number) {}

    chooseOperation(operation) {}

    compute() {}

    updateDisplay() {}
}

// variables
const numberButtons = document.qurerySelectorAll("[data-number]")
const operationButtons = document.qurerySelectorAll("[data-operation]")
const equalsButton = document.qurerySelectorAll("[data-equals]")

const deleteButton = document.qurerySelectorAll("[data-delete]")
const previousOperandTextElement = document.qurerySelectorAll(
    "[data-previous-operand]"
)
const currentOperandTextElement = document.qurerySelectorAll(
    "[data-current-operand]"
)

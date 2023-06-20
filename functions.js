module.exports = {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
}

function returnTwo() {
    return 2
}

function greeting(name) {
    let greeting = `Hello, ${name}`

    return greeting
}

function add(num1, num2) {
    let sum = num1 + num2
    return sum
}

function multiply(num1, num2) {
    let product = num1 * num2
    return product
}

function divide(num1, num2) {
    let remainder = num1 / num2
    return remainder
}

function subtract(num1, num2) {
    let difference = num1 - num2
    return difference
}




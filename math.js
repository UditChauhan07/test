// math.js

// Function to add two numbers
function add(x, y) {
    return x + y;
}

// Function to subtract two numbers
function subtract(x, y) {
    return x - y;
}

// Function to multiply two numbers
function multiply(x, y) {
    return x * y;
}

// Function to divide two numbers
function divide(x, y) {
    if (y === 0) {
        throw new Error('Cannot divide by zero');
    }
    return x / y;
}

// Export functions for use in other modules
module.exports = {
    add,
    subtract,
    multiply,
    divide
};
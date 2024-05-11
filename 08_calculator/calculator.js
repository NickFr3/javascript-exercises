const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
    return array.reduce((sum, number) => sum + number, 0);
};

const multiply = function(array) {
    return array.reduce((product, number) => product * number, 1);
};

const power = function(a, b) {
    return Math.pow(a, b)
};

const factorial = function(number) {
    if (number <= 1) {
        return 1;
    } else {
        return factorial(number - 1) * number;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  return array.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
};

const multiply = function (array) {
  return array.reduce(function (acc, curr) {
    return acc * curr;
  }, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (x) {
  return x !== 0 ? x * factorial(x - 1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

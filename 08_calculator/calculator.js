const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  let restParmSum = 0;
  for (const element of array) {
    restParmSum += element;
  }
  return restParmSum;
};

const multiply = function (array) {
  let restParmSum = 1;
  for (const element of array) {
    restParmSum *= element;
  }
  return restParmSum;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  a === 0 ? (a = 1) : (a = a);
  let factor = 1;
  for (let i = 1; i <= a; i++) {
    factor *= i;
  }
  return factor;
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

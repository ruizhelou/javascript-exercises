const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((sumSoFar, nextNumber) => sumSoFar + nextNumber, 0)
};

const multiply = function(array) {
  return array.reduce((productSoFar, nextNumber) => productSoFar * nextNumber, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(n) {
	let factorial = 1
  while(n > 1) {
    factorial *= n
    n--
  }
  return factorial
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

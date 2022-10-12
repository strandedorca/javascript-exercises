const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(theArgs) {
	let sum = 0;
  theArgs.forEach((item) =>
    sum+=item
  )
  return sum;
};

const multiply = function(theArgs) {
  let multiply = 1;
  theArgs.forEach((item) =>
    multiply*=item)
  return multiply;
};

const power = function(a, b) {
  let power = 1;
	for (let i = 0; i < b; i++) {
    power*=a;
  }
  return power;
};

const factorial = function(a) {
	let factorial = 1;
  for (i = a; i >= 1; i--) {
    factorial*=i;
  }
  return factorial;
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

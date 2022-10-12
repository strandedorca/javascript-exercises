const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	if (a >= b) {
      return a - b;
   }
   return b - a;
};

const sum = function(args) {
   let sum = 0;
   for (let arg of args) {
      sum+=arg;
   }
   return sum;
};

const multiply = function(args) {
   let product = 1;
   args.forEach(arg => product*=arg)
   return product;
};

const power = function(a, b) {
	let power = 1;
   for (let i = 0; i < b; i++) {
      power*=a;
   }
   return power;
};

const factorial = function(n) {
	let fac = 1;
   for (i = 1; i <= n; i++) {
      fac*=i;
   }
   return fac;
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
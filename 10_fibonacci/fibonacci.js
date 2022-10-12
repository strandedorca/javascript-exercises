const fibonacci = function(n) {
   if (n < 0) return "OOPS";
   let n_2 = 0;
   let n_1 = 1;
   for (let i = 1; i < n; i++) {
      let temp = n_2;
      n_2 = n_1;
      n_1 += temp;
   }
   return n_1;
};

// Do not edit below this line
module.exports = fibonacci;
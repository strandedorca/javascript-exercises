const sumAll = function(int1, int2) {
   let sum = 0;
   // work with large number first 
   if (int1 > int2) {
      let temp = int2;
      int2 = int1;
      int1 = temp;
   }
   const LENGTH = (int2 - int1);

   // deal with negative numbers and non-number
   // -------- Use isInteger()
   // if (!Number.isInteger(int1) || !Number.isInteger(int2) || int1 < 0) {
   //    return 'ERROR';
   // }
   // -------- Use typeof -------- use isInteger() checks for negative too...
   let t1 = (typeof int1);
   let t2 = (typeof int2);
   if ((t1 != 'number') || (t2 != 'number') || (int1 < 0)) {
      return 'ERROR';
   }

   for (let i = 0; i <= (LENGTH); i++) {
      sum+=int1;
      int1++;
   }
   return sum;
};

// Do not edit below this line
module.exports = sumAll;

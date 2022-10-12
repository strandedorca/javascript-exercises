const palindromes = function (string) {
   string = string.toLowerCase();
   string = Array.from(string);

   // remove all punctuation and breaks
   let newString = [];
   string.forEach((item, index) => {
      if (((item > 'a') && (item < 'z')) || (item == 'a') || (item == 'z')) {
         newString.push(item);
      }
   });

   const LENGTH = newString.length;
   const HALF = parseInt(LENGTH / 2) 
   for (let i = 0, j = (LENGTH - 1); i <= HALF, j >= HALF; i++, j--) {
      let a = newString[i];
      let b = newString[j];
      if (newString[i] != newString[j])
      {
         return false;
      }
   }
   return true;
};

// Do not edit below this line
module.exports = palindromes;

const palindromes = function (str) {
let newString = str.toLowerCase().replace(/[^a-z]/g, "");
return newString
   .split("")
   .reverse()
   .join("") == newString;
};

// Do not edit below this line
module.exports = palindromes;
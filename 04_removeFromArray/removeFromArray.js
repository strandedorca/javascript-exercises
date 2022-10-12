// Use Arrow function
// const removeFromArray = function(arr, ...theArgs) {
//    theArgs.forEach((item) => {
//             for (let j = 0; j < arr.length; j++) {
//                if (item === arr[j]) {
//                   arr.splice(j, 1);
//                }
//             }});
//    return arr;
// }

// The same but using anonymous function instead of arrow
// const removeFromArray = function(arr, ...theArgs) {
//    theArgs.forEach(function(item) {
//             for (let j = 0; j < arr.length; j++) {
//                if (item === arr[j]) {
//                   arr.splice(j, 1);
//                }
//             }});
//    return arr;
// }

// Using includes and a new array
const removeFromArray = function(arr, ...theArgs) {
   let newArr = [];
   arr.forEach((item) => {
      if (!theArgs.includes(item)) {
         newArr.push(item);
      }});
   return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;

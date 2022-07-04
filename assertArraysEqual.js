const eqArrays = require("./eqArrays");

// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let index = 0; index < array1.length; index++) {
//     if (array1[index] !== array2[index]) {
//       return false;
//     }
//   }
//   return true;
// }

const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2) ? console.log(`✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
};

module.exports = assertArraysEqual;


// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
// assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should FAIL
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should FAIL
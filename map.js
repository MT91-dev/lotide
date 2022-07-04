const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

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

// const assertArraysEqual = (array1, array2) => {
//   eqArrays(array1, array2) ? console.log(`✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
// };

// const words1 = ["ground", "control", "to", "major", "tom"];
// const words2 = ["How", "can", "we", "get", "better", "than", "this", "with", "callbacks"];
// const words3 = ["There", "is", "so", "much", "to", "learn", "now"];

// const results1 = map(words1, word => word[0]);
// console.log(results1);
// const results2 = map(words2, word => word[0]);
// console.log(results2);
// const results3 = map(words3, word => word[0]);
// console.log(results3);

// assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); // => should PASS
// assertArraysEqual(results2, ["H", "c", "w", "g", "b", "t", "t", "w", "c"]); // => should PASS
// assertArraysEqual(results3, ["T", "i", "s", "m", "t", "l", "n"]); // => should PASS
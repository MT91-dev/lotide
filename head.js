// //Function below takes two parameters and checks whether they are the same. Provides with an assertion output based on the two parameters.
// const assertEqual = function (actual, expected) {
//   return (actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`));
// };

const assertEqual = require("./assertEqual")

//Function below takes an array as variable arr and returns the head of the array
const head = (arr) => {
  //locally scoped variable firstElement is declared
  let firstElement;
  if (arr.length > 0) { //if arr has any number of elements, firstElement is assigned as element at index 0
    firstElement = arr[0];
  }
  return firstElement; //return firstElement
}

module.exports = head;

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), 5);
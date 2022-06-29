//Function below takes two parameters and checks whether they are the same. Provides with an assertion output based on the two parameters.
const assertEqual = (actual, expected) => {
  //checks whether the two parameters are the same and outputs a console statement using template literal
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else { //has a default case to the if statement for when the two parameters are not the same, outputs a console statement using template literal
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function below takes an array as variable arr and returns the tail of the array
const tail = (arr) => {
  return arr.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
const check = ["Do", "A", "4", "Loop"]
console.log(tail (check));
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(check.length, 4); // original array should still have 3 elements!
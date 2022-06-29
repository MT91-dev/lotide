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
  //locally scoped variable tailArray is declared
  let tailArray;
  if (arr.length === 0) { //if arr has no elements, tailArray is assigned as an empty array
    tailArray = [];
  } else if (arr.length === 1) { //if arr has only 1 element, tailArray is assigned as an empty array
    tailArray = [];
  } else if (arr.length > 1) { //if arr has more then 1 elements, tailArray is assigned as a new array using slice method on arr starting at index 1
    tailArray = arr.slice(1);
  }
  return tailArray; //return tailArray
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
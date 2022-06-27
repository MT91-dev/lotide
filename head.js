//Function below takes two parameters and checks whether they are the same. Provides with an assertion output based on the two parameters.
const assertEqual = function (actual, expected) {
  //checks whether the two parameters are the same and outputs a console statement using template literal
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else { //has a default case to the if statement for when the two parameters are not the same, outputs a console statement using template literal
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function below takes an array as variable arr and returns the head of the array
const head = (arr) => {
  //locally scoped variable firstElement is declared
  let firstElement;
  if (arr.length === 0) { //if arr has no elements, firstElement is assigned as undefined
    firstElement = undefined;
  } else if (arr.length > 0) { //if arr has any number of elements, firstElement is assigned as element at index 0
    firstElement = arr[0];
  }
  return firstElement; //return firstElement
}

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 5);
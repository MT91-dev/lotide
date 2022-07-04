//Function below takes two arguments and checks whether they are the same. Provides with an assertion output based on the two parameters.
const assertEqual = function (actual, expected) {
  return (actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`));
};


module.exports = assertEqual;

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 1);
// assertEqual(1, 5);
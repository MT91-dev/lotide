//Function below takes two parameters and checks whether they are the same. Provides with an assertion output based on the two parameters.
const assertEqual = (actual, expected) => {
  //checks whether the two parameters are the same and outputs a console statement using template literal
  return (actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const countLetters = (string) => {
  const sanitizedString = string.split(" ").join("");
  const lettersObj = {};
  for (let element of sanitizedString) {
      lettersObj[element] === undefined ? lettersObj[element] = 1 : lettersObj[element]++;
  }
  return lettersObj;
}

assertEqual(countLetters("lighthouse in the house"), { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });
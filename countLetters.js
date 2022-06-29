//Function below takes two parameters and checks whether they are the same. Provides with an assertion output based on the two parameters.
const assertEqual = (actual, expected) => {
  //checks whether the two parameters are the same and outputs a console statement using template literal
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else { //has a default case to the if statement for when the two parameters are not the same, outputs a console statement using template literal
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (string) => {
  const sanitizedString = string.split(" ").join("");
  const lettersObj = {};
  for (let element of sanitizedString) {
    if (!lettersObj[element]) {
      lettersObj[element] = 1;
    } else {
      lettersObj[element]++;
    }
  }
  return lettersObj;
}

countLetters("lighthouse in the house");
const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = (array1, array2) => {
  eqArrays(array1, array2) ? console.log(`✅ Assertion Passed: ${array1} === ${array2}`) : console.log(`🛑 Assertion Failed: ${array1} !== ${array2}`);
};

const letterPositions = function (sentence) {
  const results = {};
  const sanitizedString = sentence.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  let tempIndex = 0;

  for (let element of sanitizedString) {
    results[element] === undefined ? results[element] = [tempIndex] : results[element].push(tempIndex);
    tempIndex++;
    // let indexArr = [tempIndex];
    // if (!results[element]) {
    //   results[element] = indexArr;
    //   tempIndex++;
    // } else {
    //   results[element].push(tempIndex);
    //   tempIndex++;
    // }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("We like to have spaces, many, commas, and . periods. How about an '").a, [9, 14, 19, 26, 28, 41, 46]);

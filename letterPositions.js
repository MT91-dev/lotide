const assertArraysEqual = (array1, array2) => {
  let failedIndex;
  let perfectMatch = true;
  const eqArrays = (array1, array2) => {

    if (array1.length !== array2.length) {
      perfectMatch = false;
    }
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]) {
        perfectMatch = false;
        failedIndex = index;
      }
    }
    return perfectMatch;
    // console.log(perfectMatch);
    // console.log(failedIndex);
  }
  eqArrays(array1, array2);

  if (perfectMatch) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑 Assertion Failed at index ${[failedIndex]}: ${array1[failedIndex]} !== ${array2[failedIndex]}`);
  }
};

const letterPositions = function (sentence) {
  const results = {};
  const sanitizedString = sentence.replace(/[^A-Z0-9]/ig, "").toLowerCase();

  let tempIndex = 0;

  for (let element of sanitizedString) {
    let indexArr = [tempIndex];
    if (!results[element]) {
      results[element] = indexArr;
      tempIndex++;
    } else {
      results[element].push(tempIndex);
      tempIndex++;
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);

letterPositions("We like to have spaces, many, commas, and . periods. How about an '")

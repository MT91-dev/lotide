const assertArraysEqual = (array1, array2) => {
  let failedIndex;
  let perfectMatch = true;
  const eqArrays = (array1, array2) => {

    if (array1.length !== array2.length) {
      perfectMatch = false;
    } else {
      for (let index = 0; index < array1.length; index++) {
        if (array1[index] !== array2[index]) {
          perfectMatch = false;
          failedIndex = index;
        }
      }
    }
    return perfectMatch;
    // console.log(perfectMatch);
    // console.log(failedIndex);
  }
  eqArrays(array1, array2);
  if (perfectMatch) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (!perfectMatch && failedIndex !== undefined) {
    console.log(`🛑 Assertion Failed at index ${[failedIndex]}: ${array1[failedIndex]} !== ${array2[failedIndex]}`);
  } else {
    console.log(`🛑 Assertion Failed due to both of the arrays not being the same length!`)
  }
};

const flatten = (nestedArray) => {
  let flattenedArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (!Array.isArray(nestedArray[i])) {
      flattenedArray.push(nestedArray[i]);
    } else {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flattenedArray.push(nestedArray[i][j]);
      }
    }
  }
  return flattenedArray;
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // => should PASS

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
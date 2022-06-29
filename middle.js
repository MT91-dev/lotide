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

const middle = (midArr) => {
  let mid = [];
  let arrayLength = midArr.length;

  if (arrayLength > 2 && arrayLength % 2 !== 0) {
    mid.push(Math.ceil(arrayLength / 2 + 1));
  } else if (arrayLength > 2 && arrayLength % 2 === 0) {
    mid.push(arrayLength / 2);
    mid.push(arrayLength / 2 + 1);
  }
  return mid;
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
const assertArraysEqual = (array1, array2) => {
  let failedIndex;
  let perfectMatch = true;
  
  const eqArrays = (array1, array2) => {
  
    if (array1.length !== array2.length) {
      perfectMatch = false;
    }
    for (let index = 0; index < array1.length; index++) {
      if (array1[index] !== array2[index]){
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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS
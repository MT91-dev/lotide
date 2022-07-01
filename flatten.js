const flatten = (nestedArray) => {
  let flattenedArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    let currentElement = nestedArray[i];
    let arrayStatus = Array.isArray(nestedArray[i]);

    switch (arrayStatus) {
      case true:
        for (let j = 0; j < currentElement.length; j++) {
          flattenedArray.push(currentElement[j]);
        }
        break;
      case false:
        flattenedArray.push(currentElement);
        break;
    }
  }
  return flattenedArray;
}

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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should PASS
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => should PASS
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]) // => should PASS

console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
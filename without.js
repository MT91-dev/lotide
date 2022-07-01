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

const without = (source, itemsToRemove) => {
  let newSource = [];

  for (let sourceIndex = 0; sourceIndex < source.length; sourceIndex++) {
    let pushElementStatus = true;
    for (let itemsToRemoveIndex = 0; itemsToRemoveIndex < itemsToRemove.length; itemsToRemoveIndex++) {
      if (source[sourceIndex] === itemsToRemove[itemsToRemoveIndex]) {
        pushElementStatus = false;
        break;
      }
    }
    if (pushElementStatus) {
      newSource.push(source[sourceIndex]);
    }
  }
  console.log(newSource);
  //return newSource;
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
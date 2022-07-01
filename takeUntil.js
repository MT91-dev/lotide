const takeUntil = (array, callback) => {
  const results = [];
  for (let index = 0; index < array.length; index++) {
    !callback(array[index]) ? results.push(array[index]) : index = array.length;
  }
  return results;
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results3 = takeUntil(data3, x => x === 'Redwood');
console.log(results3);

const data4 = [4, 24, 8, 60, 44, 23];
const results4 = takeUntil(data4, x => x % 4 !== 0);
console.log(results4);

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => should PASS
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']); // => should PASS
assertArraysEqual(results3, ["I've", 'been', 'to', 'Hollywood', ',', "I've", 'been', 'to']); // => should PASS
assertArraysEqual(results4, [4, 24, 8, 60, 44]); // => should PASS
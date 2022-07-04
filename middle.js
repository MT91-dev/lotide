const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual")

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

module.exports = middle;

// assertArraysEqual(middle([1]), []); // => should PASS
// assertArraysEqual(middle([1, 2]), []); // => should PASS
// assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS

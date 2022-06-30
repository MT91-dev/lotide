const assertObjectsEqual = (object1, object2) => {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

const eqObjects = (object1, object2) => {

  obj1Keys = Object.keys(object1);
  obj2Keys = Object.keys(object2);
  let matchingLength = true;
  if (obj1Keys.length !== obj2Keys.length) {
    matchingLength = false;
    return false;
  }
  if (matchingLength) {
    let status;
    for (let key of obj1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        status = eqArrays(object1[key], object2[key]);
      } else {
        if (object2[key] === object1[key]) {
          status = true;
        } else {
          status = false;
        }
      }
    }
    return status;
  }
  // console.log(obj1Keys);
  // console.log(obj2Keys);
};

const eqArrays = (array1, array2) => {
  let perfectMatch = true;

  if (array1.length !== array2.length) {
    perfectMatch = false;
  }
  for (let index = 0; index < array1.length; index++) {
    if (array1[index] !== array2[index]) {
      perfectMatch = false;
    }
  }
  return perfectMatch;
}

const a = { a: '1', b: 2 };
const b = { b: 2, a: '1' };
const c = { c: 3, a: 2 }
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };


assertObjectsEqual(a, b);
assertObjectsEqual(a, c);
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2); // => false
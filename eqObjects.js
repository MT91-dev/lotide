//Function below takes two parameters and checks whether they are the same. Provides with an assertion output based on the two parameters.
const assertEqual = (actual, expected) => {
  //checks whether the two parameters are the same and outputs a console statement using template literal
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else { //has a default case to the if statement for when the two parameters are not the same, outputs a console statement using template literal
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba), true); // => true


const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
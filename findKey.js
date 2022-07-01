const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}

const assertEqual = function (actual, expected) {
  return (actual === expected ? console.log(`✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`));
};

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}

const data2 = {
  "test1": { stars: 4 },
  "test2": { stars: -2 },
  "test3": { stars: 4 },
  "test4": { stars: 9 },
}

const run1 = (findKey(data1, x => x.stars === 2)) // => "noma"
const run2 = (findKey(data2, x => x.stars === 9)) // => "test4"

assertEqual(run1, "noma");
assertEqual(run2, "test4");
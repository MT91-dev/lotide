//Function below takes two parameters and checks whether they are the same. Provides with an assertion output based on the two parameters.
const assertEqual = (actual, expected) => {
  //checks whether the two parameters are the same and outputs a console statement using template literal
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else { //has a default case to the if statement for when the two parameters are not the same, outputs a console statement using template literal
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = (allItems, itemsToCount) => {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item]){
      if (!results[item]) {
        results[item] = 1;
      } else {
        results[item]++;
      }
    }
  }

  console.log(results);
  return results;

}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
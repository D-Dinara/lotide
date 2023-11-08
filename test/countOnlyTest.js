const countOnly = require('../countOnly');
const assertEqual = require('../assertEqual');

//Testing the countOnly function
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

//Test case: the element exists in the array
assertEqual(result1["Jason"], 1);

//Test case: the element does not exist in the array
assertEqual(result1["Karima"], undefined);

//Test case: The element occures multiple times in the array
assertEqual(result1["Fang"], 2);

//Test case: the element exists in the array, but the value in the object is false
assertEqual(result1["Agouhanna"], undefined);
const assertObjectsEqual = require('../assertObjectsEqual');

//Testing the function
const shirtObject = { color: "red", size: "medium" };
const similarShirtObject = { size: "medium", color: "red" };
const anotherShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const anotherShirtObject2 = { size: "medium", color: "blue"};
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "white"] };
const similarMultiColorShirtObject = { colors: ["red", "blue"], size: "medium" };

// Testing the function with objects that have the same keys but different values
assertObjectsEqual(shirtObject, anotherShirtObject); //expected to fail;

// Testing the function with objects that have different keys
assertObjectsEqual(shirtObject, anotherShirtObject2); //expected to fail;

// Testing the function with objects that have arrays as values and the arrays have different elements
assertObjectsEqual(multiColorShirtObject,anotherMultiColorShirtObject); // expected to fail

// Testing the function with objects that have arrays as values and the arrays have the same elements
assertObjectsEqual(multiColorShirtObject,similarMultiColorShirtObject); // expected to pass

// Testing the function with objects that have the same keys and values
assertObjectsEqual(shirtObject, similarShirtObject); //expected to pass
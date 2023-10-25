//If the values are arrays check arrays' elements for equality
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//Test the objects for equality
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result = eqObjects(actual,expected);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// This function takes two objects as arguments and returns true if they have the same contents,
// or false if they have any mismatching contents.
// The function supports both primitives and arrays as property values.
const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  //Check if the number of keys in objects are equal
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {

    //Check if the value is an array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key],object2[key])) return false;
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

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


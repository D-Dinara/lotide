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

//Test the results
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
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
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject),true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject),false);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

const longSleeveMultiColorShirtObject2 = { size: "medium", colors: ["red", "white"], sleeveLength: "long" };
assertEqual(eqObjects(longSleeveMultiColorShirtObject, longSleeveMultiColorShirtObject2), false);

const longSleeveMultiColorShirtObject3 = { size: "medium", colors: ["red", "white"], sleeveLength: "long" };
assertEqual(eqObjects(longSleeveMultiColorShirtObject3, longSleeveMultiColorShirtObject2), true);
const eqArrays = require('./eqArrays');

// The function takes in two objects as arguments and returns true if they have the same contents,
// or false if they have any mismatching contents.
// The function supports both primitives, arrays and objects as property values.

// Helper function to check if a value is an object (but not an array)
const isObject = (value) => {
  return typeof value === 'object' && !Array.isArray(value);
};

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If both values are arrays, use eqArrays to compare them.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (isObject(object1[key]) && isObject(object2[key])) {
      // Compare nested objects (non-arrays)
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;

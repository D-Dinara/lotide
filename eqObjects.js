const eqArrays = require('./eqArrays');

// The function takes in two objects as arguments and returns true if they have the same contents,
// or false if they have any mismatching contents.
// The function supports both primitives, arrays and objects as property values.

const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  if (object1Keys.length !== object2Keys.length) {
    return false;
  }

  for (const key of object1Keys) {

    //Check if the value is an Array
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }

      //Check if the value is an object
    } else  if (typeof object1[key] === 'object' && typeof object2[key] === 'object' && !Array.isArray(object1[key]) && !Array.isArray(object2[key])) {

      //Compare nested objects
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

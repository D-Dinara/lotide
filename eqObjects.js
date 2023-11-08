const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;

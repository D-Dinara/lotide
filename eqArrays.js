//The function takes in two arrays and returns true or false, based on a perfect match.
const eqArrays = function(arr1, arr2) {
  //If arrays' lengths are not equal, the arrays are not equal
  if (arr1.length !== arr2.length) {
    return false;
  }
  //Check each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = eqArrays;
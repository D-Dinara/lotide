//The function takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array (not nested).
const flatten = function(array) {
  const flattenedArray = [];

  for (const item of array) {
    //Check if the item is an array. If it is an array, iterate through it and retrieve the elements
    if (Array.isArray(item)) {
      for (const element of item) {
        flattenedArray.push(element);
      }
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};

module.exports = flatten;

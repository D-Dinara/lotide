//Implementing flatten function. The function takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
const flatten = function(array) {
  const flattenedArray = [];

  for (const item of array) {
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

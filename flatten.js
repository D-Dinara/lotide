// Testing arrays for equality
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual,expected);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//Testing flatten function
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten(["1", 2, ["3", 4], 5, ["6"]]), ["1", 2, "3", 4, 5, "6"]);
assertArraysEqual(flatten(["1", 2, ["3", 4], 5, []]), ["1", 2, "3", 4, 5]);


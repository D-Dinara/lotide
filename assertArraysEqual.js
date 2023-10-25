// The eqArrays function takes in two arrays as arguments and returns true if all elements of two arrays are equal
const eqArrays = function(arr1, arr2) {

  //Comparing the arrays' lengths first
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //Comparing each element
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};


//The assertArraysEqual function takes in two arrays to compare to each other and logs a message depending on the result of eqArrays' function output (result).
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual,expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Testing arrays for equality
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([], []);
assertArraysEqual([1], [1]);
assertArraysEqual([], [2]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);
assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]);
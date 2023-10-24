// Testing arrays for equality
//The assertArraysEqual function takes in two values to compare to each other and logs a message depending on the result of eqArrays' functioun output (result): if result is true - the assertion passed, if false - failed.

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual,expected);

  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Comparing arrays' elements with each other.
// The eqArrays function takes in two arrays as arguments and returns true if all elements of two arrays are equal and returns false if the elements are not equal
const eqArrays = function(arr1, arr2) {

  //Comparing the arrays' lengths first
  if (arr1.length !== arr2.length) {
    return false;
  }

  //Comparing each element
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//Implementing middle function. The function takes in an array and returns the middle-most element(s) of the given array.
const middle = function(array) {
  let middleArray = [];

  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    const midIndex1 = array.length  / 2 - 1;
    const midIndex2 = array.length / 2;
    middleArray.push(array[midIndex1]);
    middleArray.push(array[midIndex2]);
  } else {
    const midIndex = Math.floor(array.length / 2);
    middleArray.push(array[midIndex]);
  }
 
  return middleArray;
};



//Testing middle function
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

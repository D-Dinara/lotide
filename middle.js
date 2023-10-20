// // Testing arrays for equality
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

//Implementing middle function
const middle = function(array) {
  let middleArray = [];

  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(array[array.length  / 2 - 1]);
    middleArray.push(array[array.length / 2]);
  } else {
    middleArray.push(array[Math.floor(array.length / 2)]);
  }
 
  return middleArray;
};



//Testing flatten function
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

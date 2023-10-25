//The map function takes in an array to map and a callback function
//The map function returns a new array based on the results of the callback function

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


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


//Testing the map function
const words = ["ground", "control", "to", "major", " "];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => "this is " + word);
assertArraysEqual(["g","c","t","m"," "], results1);
assertArraysEqual(["this is ground", "this is control", "this is to", "this is major", "this is  "], results2);
const numbers = [1, 2, 3, 4];
const results3 = map(numbers, number => number * 2);
assertArraysEqual([2, 4, 6, 8], results3);
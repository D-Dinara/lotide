// The eqArrays function takes in two arrays as arguments and returns true if all elements of two arrays are equal
const eqArrays = require('./eqArrays');


//The assertArraysEqual function takes in two arrays to compare to each other and logs a message depending on the result of eqArrays' function output (result).
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual,expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
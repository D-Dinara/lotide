const eqArrays = require('./eqArrays');

//The assertArraysEqual function takes in two arrays to compare to each other and logs a message depending on the result of eqArrays' function output (result).
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
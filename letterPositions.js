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

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (results[char]) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
    
  console.log(results);
  return results;

};

letterPositions("hello");

const testResult = letterPositions("hello");

assertArraysEqual(testResult["h"],[0]);
assertArraysEqual(testResult["e"],[1]);
assertArraysEqual(testResult["l"],[2,3]);
assertArraysEqual(testResult["o"],[4]);
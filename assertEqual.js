//The function assertEqual takes in two values and checks if they are equal

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
//The function takes in two values and prints out a message telling if the values match or not

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp"); //expected to fail
assertEqual("Bootcamp", "Bootcamp"); //expected to pass
assertEqual(1, 1); //expected to pass
assertEqual(1, 3); //expected to fail

module.exports = assertEqual;


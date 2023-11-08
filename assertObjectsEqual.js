const eqObjects = require('./eqObjects');
const inspect = require('util').inspect;

//The function takes in two objects, checks if they are equal and console.log an appropriate message to the console
const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


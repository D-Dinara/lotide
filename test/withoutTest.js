const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {

  // Test case: two arrays of numbers
  it(`"returns [2, 3] for [1, 2, 3, 4] without [1, 4]`, () => {
    assert.deepEqual(without([1, 2, 3, 4], [1, 4]), [2, 3]);
  });
  
  // Test case: two arrays of numbers
  it(`"returns [2, 3] for [1, 2, 3] without [1]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });

  // Test case: two arrays with different data types
  it(`"returns ["1", "2"] for ["1", "2", "3"] without [1, 2, "3"]`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  // Test case: the initial array is not modified
  it(`"returns ["1", "2"] for ["1", "2", "3"] without [1, 2, "3"]`, () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
  
});
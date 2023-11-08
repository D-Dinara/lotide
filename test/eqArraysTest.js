const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  //Test case: equal arrays of numbers
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  //Test case: not equal arrays of numbers
  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });

  //Test case: empty arrays
  it("returns true for [], []", () => {
    assert.strictEqual(eqArrays([], []), true);
  });

  //Test case: an empty array and an array with one element
  it("returns false for [], [2]", () => {
    assert.strictEqual(eqArrays([], [2]), false);
  });

  //Test case: arrays with strings
  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });
  
  //Test case: arrays with different types of data
  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });

  //Test case: arrays with different number of elements
  it("returns false for ['1', '2', '3', '4'], ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3"]), false);
  });

  //Test case: arrays with different number of elements
  it("returns false for ['1', '2', '3'], ['1', '2', '3', '4']", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3",  "4"]), false);
  });
});
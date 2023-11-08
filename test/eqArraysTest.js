const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {

  //Test case: equal arrays of numbers
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  //Test case: not equal arrays of numbers
  it("returns false for [1, 2, 3], [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  //Test case: empty arrays
  it("returns true for [], []", () => {
    assert.isTrue(eqArrays([], []));
  });

  //Test case: an empty array and an array with one element
  it("returns false for [], [2]", () => {
    assert.isFalse(eqArrays([], [2]));
  });

  //Test case: arrays with strings
  it("returns true for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });
  
  //Test case: arrays with different types of data
  it("returns false for ['1', '2', '3'], ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

  //Test case: arrays with different number of elements
  it("returns false for ['1', '2', '3', '4'], ['1', '2', 3]", () => {
    assert.isFalse(eqArrays(["1", "2", "3", "4"], ["1", "2", "3"]));
  });

  //Test case: arrays with different number of elements
  it("returns false for ['1', '2', '3'], ['1', '2', '3', '4']", () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", "3",  "4"]));
  });

  //Testing nested arrays:
  
  it("returns true for identical nested arrays", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("returns false for different nested arrays", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
  });

  it("returns false for different nested arrays (values on differents levels)", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });
});
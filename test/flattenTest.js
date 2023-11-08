const flatten = require('../flatten');
const assert = require('chai').assert;

describe("#flatten", () => {

  //Testing with arrays of numbers
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
  
  //Testing with arrays of different data types
  it(`returns ["1", 2, "3", 4, 5, "6"] for ["1", 2, ["3", 4], 5, ["6"]]`, () => {
    assert.deepEqual(flatten(["1", 2, ["3", 4], 5, ["6"]]), ["1", 2, "3", 4, 5, "6"]);
  });

  // //Testing with empty array
  it(`returns ["1", 2, "3", 4, 5]) for ["1", 2, ["3", 4], 5, []]`, () => {
    assert.deepEqual(flatten(["1", 2, ["3", 4], 5, []]), ["1", 2, "3", 4, 5]);
  });
});
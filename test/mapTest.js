const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {

  // Testing the map function with a callback that returns the first character of each word
  it(`"returns ["g","c","t","m"," "] for the first character of each word in ["ground", "control", "to", "major", " "]`, () => {
    assert.deepEqual(map(["ground", "control", "to", "major", " "], word => word[0]), ["g","c","t","m"," "]);
  });
  
  // Testing the map function with a callback that prepends "this is " to each word
  it(`returns ["this is ground", "this is control", "this is to", "this is major", "this is  "] for ["ground", "control", "to", "major", " "] when the callback prepends 'this is' to each word`, () => {
    assert.deepEqual(map(["ground", "control", "to", "major", " "], word => "this is " + word), ["this is ground", "this is control", "this is to", "this is major", "this is  "]);
  });

  // Testing the map function with a callback that multiplies each number by 2
  it(`"returns [2, 4, 6, 8] for [1, 2, 3, 4] whaen the callback multiplies each number by 2`, () => {
    assert.deepEqual(map([1, 2, 3, 4], number => number * 2), [2, 4, 6, 8]);
  });
    
});
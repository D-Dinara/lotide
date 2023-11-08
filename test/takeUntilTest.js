const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe("#takeUntil", () => {

  // Test case: an array of numbers
  it(`"returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] when the callback takes all numbers until it meets a negative number`, () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });
  
  // Test case: an array of strings
  it(`"returns [ 'I've', 'been', 'to', 'Hollywood' ] for ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] when the callback takes all items until it meets a coma`, () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
  
});
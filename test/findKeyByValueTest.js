const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe("#findKeyByValue", () => {

  //Test case: existing value
  it("returns 'drama' for { sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, 'The Wire'", () => {
    assert.strictEqual(findKeyByValue({ sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, "The Wire"), "drama");
  });

  //Test case: the value does not exist
  it("returns undefined for { sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, 'That '70s Show", () => {
    assert.strictEqual(findKeyByValue({ sciFi: 'The Expanse', comedy: 'Brooklyn Nine-Nine', drama:  'The Wire' }, "That '70s Show"), undefined);
  });
});
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  //Test case: two equal objects
  it("returns true for { color: 'red', size: 'medium' }, { size: 'medium', color: 'red' }", () => {
    assert.strictEqual(eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red' }), true);
  });

  //Test case: not equal objects, different number of keys
  it("returns false for { color: 'red', size: 'medium' }, { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.strictEqual(eqObjects({  color: 'red', size: 'medium' }, { size: 'medium', color: 'red', sleeveLength: 'long' }), false);
  });
  
  //Test case: two equal objects, the values are arrays
  it(`returns true for { colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }`, () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }), true);
  });

  //Test case: two not equal objects, different number of keys, values are arrays
  it(`returns false for { colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }`, () => {
    assert.strictEqual(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long"  }), false);
  });

  //Test case: two not equal objects, values are arrays - elements of arrays are not equal
  it(`returns false for { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }, { size: "medium", colors: ["red", "white"], sleeveLength: "long" }`, () => {
    assert.strictEqual(eqObjects({ size: "medium", colors: ["red", "blue"], sleeveLength: "long"  }, { size: "medium", colors: ["red", "white"], sleeveLength: "long" }), false);
  });
});


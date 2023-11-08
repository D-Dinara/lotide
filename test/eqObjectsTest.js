const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {

  //Test case: two equal objects
  it("returns true for { color: 'red', size: 'medium' }, { size: 'medium', color: 'red' }", () => {
    assert.isTrue(eqObjects({ color: 'red', size: 'medium' }, { size: 'medium', color: 'red' }));
  });

  //Test case: not equal objects, different number of keys
  it("returns false for { color: 'red', size: 'medium' }, { size: 'medium', color: 'red', sleeveLength: 'long' }", () => {
    assert.isFalse(eqObjects({  color: 'red', size: 'medium' }, { size: 'medium', color: 'red', sleeveLength: 'long' }));
  });
  
  //Test case: two equal objects, the values are arrays
  it(`returns true for { colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }`, () => {
    assert.isTrue(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"] }));
  });

  //Test case: two not equal objects, different number of keys, values are arrays
  it(`returns false for { colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }`, () => {
    assert.isFalse(eqObjects({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"], sleeveLength: "long"  }));
  });

  //Test case: two not equal objects, values are arrays - elements of arrays are not equal
  it(`returns false for { size: "medium", colors: ["red", "blue"], sleeveLength: "long" }, { size: "medium", colors: ["red", "white"], sleeveLength: "long" }`, () => {
    assert.isFalse(eqObjects({ size: "medium", colors: ["red", "blue"], sleeveLength: "long"  }, { size: "medium", colors: ["red", "white"], sleeveLength: "long" }));
  });

  //Testing nested objects
  it('should return true for nested identical objects', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 2 } };
    assert.isTrue(eqObjects(obj1, obj2));
  });


  it('should return false for different nested values', () => {
    const obj1 = { a: 1, b: { c: 2 } };
    const obj2 = { a: 1, b: { c: 3 } };
    assert.isFalse(eqObjects(obj1, obj2));
  });

  it('should return true for identical nested objects', () => {
    const obj1 = { a: 1, b: { c: { d: 3} } };
    const obj2 = { a: 1, b: { c: { d: 3} } };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it('should return false for different nested values', () => {
    const obj1 = { a: 1, b: { c: { d: 3} } };
    const obj2 = { a: 1, b: { c: { d: 2} } };
    assert.isFalse(eqObjects(obj1, obj2));
  });

});


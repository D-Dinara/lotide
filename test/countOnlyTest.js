const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {

  //Test case: the element exists in the array
  it("returns 1 for existing element 'Jason'", () => {
    assert.strictEqual(result1["Jason"], 1);
  });

  //Test case: the element does not exist in the array
  it("returns undefined for 'Karima' (the element does not exist)", () => {
    assert.strictEqual(result1["Karima"], undefined);
  });

  //Test case: The element occures multiple times in the array
  it("returns 2 for 'Fang' (the element occures 2 times in the array)", () => {
    assert.strictEqual(result1["Fang"], 2);
  });

  //Test case: the element exists in the array, but the value in the object is false
  it("returns undefined for 'Agouhanna' (the element exists in the array, but the value in the object is false)", () => {
    assert.strictEqual(result1["Agouhanna"], undefined);
  });
});
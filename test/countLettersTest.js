const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns 1 for 'l' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["l"], 1);
  });

  it("returns 2 for 'i' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["i"], 2);
  });

  it("returns 4 for 'h' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["h"], 4);
  });
  
  it("returns 3 for 'e' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["e"], 3);
  });
  
  it("returns 1 for 'n' in 'lighthouse in the house'", () => {
    assert.strictEqual(countLetters("lighthouse in the house")["n"], 1);
  });

  //Test case: empty string
  it("returns undefined for an empty string", () => {
    assert.strictEqual(countLetters("")[""], undefined);
  });

  //Test case: a string of spaces
  it("returns undefined for a string of spaces", () => {
    assert.strictEqual(countLetters("   ")[""], undefined);
  });

  //Test case: a string of special characters
  it("returns 2 for '$' in a string of special characters '@#$$'", () => {
    assert.strictEqual(countLetters("@#$$")["$"], 2);
  });

  //Test case: a string with spaces
  it("returns 2 for 't' in a string with spaces ' test '", () => {
    assert.strictEqual(countLetters(" test ")['t'], 2);
  });
});
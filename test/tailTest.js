const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for the length of the tail Of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });

  it("returns 'Lighthouse' for the first element of the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], "Lighthouse");
  });

  it("returns 'Labs' for the second element of the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], "Labs");
  });

  it("doesn't modify the initial array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
  
  it("returns an empty array for ['Hello']", () => {
    assert.strictEqual(tail(['Hello']).length, 0);
  });

  it("returns an empty array for []", () => {
    assert.strictEqual(tail([]).length, 0);
  });
});
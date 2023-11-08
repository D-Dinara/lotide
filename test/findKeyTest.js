const findKey = require('../findKey');
const assert = require('chai').assert;

describe("#findKey", () => {

  //Test case: the value exists
  it(`returns 'noma' for { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 2`, () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2), "noma");
  });

  //Test case: the value does not exist
  it(`returns undefined if the value does not exist: for { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 4`, () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 4), undefined);
  });

  //Test case: the function returns the first key for which the callback returns a truthy value
  it(`returns the first key for which the callback returns a truthy value: 'Akaleri' for { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars > 1`, () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars > 1), "Akaleri");
  });

  //Test case: the value is a number
  it(`returns 'noma' for { "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": 5, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x === 5`, () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      5,
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x === 5), "noma");
  });
});
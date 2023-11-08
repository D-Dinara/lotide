const without = require('../without');
const assertArraysEqual = require('../assertArraysEqual');

//Testing without function

//Test case: two arrays of numbers
assertArraysEqual(without([1, 2, 3, 4], [1, 4]), [2, 3]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

//Test case: two arrays with different data types
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

//Test case: the initial array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

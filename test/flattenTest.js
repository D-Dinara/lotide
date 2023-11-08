const flatten = require('../flatten');
const assertArraysEqual = require('../assertArraysEqual');

//Testing flatten function

//Testing with arrays of numbers
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

//Testing with arrays of different data types
assertArraysEqual(flatten(["1", 2, ["3", 4], 5, ["6"]]), ["1", 2, "3", 4, 5, "6"]);

//Testing with empty array
assertArraysEqual(flatten(["1", 2, ["3", 4], 5, []]), ["1", 2, "3", 4, 5]);
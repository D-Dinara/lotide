const assertArraysEqual = require('../assertArraysEqual');

// Testing arrays for equality

//Test case: two equal arrays of numbers. Expected to pass
assertArraysEqual([1, 2, 3], [1, 2, 3]);

//Test case: two arrays of numbers. Expected to fail
assertArraysEqual([1, 2, 3], [3, 2, 1]);

//Test case: two empty arrays. Expected to pass
assertArraysEqual([], []);

//Test case: two arrays with one elemet. Expected to pass
assertArraysEqual([1], [1]);

//Test case: an empty array and an array with one element. Expected to fail
assertArraysEqual([], [2]);

//Test case: two equal arrays of strings. Expected to pass
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

//Test case: two arrays with different types of data. Expected to fail
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);

//Test case: two arrays with different lengths. Expected to fail
assertArraysEqual(["1", "2", "3", "4"], ["1", "2", "3"]);

//Test case: two arrays with different lengths. Expected to fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3", "4"]);
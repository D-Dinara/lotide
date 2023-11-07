const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//Test if arrays are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

//Test empty arrays
assertEqual(eqArrays([], []), true);

//Test arrays with one element
assertEqual(eqArrays([1], [1]), true);

//Test empty array and an array with one element
assertEqual(eqArrays([], [2]), false);

//Test arrays with strings
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

//Test arrays with different types of data
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

//Test arrays with different number of elements
assertEqual(eqArrays(["1", "2", "3", "4"], ["1", "2", "3"]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3", "4"]), false);
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Testing middle function
//Test case: array's length is an even number
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

//Test case: array's length is an odd number
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);

//Test case: array's length less than 3
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
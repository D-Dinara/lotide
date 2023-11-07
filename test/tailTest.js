const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case: Check the returned array
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case: Check that the original array is not modified after the function is called
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Test case: an array with one element. The function should return an empty array.
const test3 = tail(["Hello"]);
assertEqual(test3.length, 0);

//Test case: empty array. The tail function should return an empty array
const test4 = tail([]);
assertEqual(test4.length, 0);

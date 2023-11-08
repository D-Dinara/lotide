const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual');

//Testing the map function

const words = ["ground", "control", "to", "major", " "];

// Testing the map function with a callback that returns the first character of each word
const results1 = map(words, word => word[0]);

// Testing the map function with a callback that prepends "this is " to each word
const results2 = map(words, word => "this is " + word);

assertArraysEqual(["g","c","t","m"," "], results1);
assertArraysEqual(["this is ground", "this is control", "this is to", "this is major", "this is  "], results2);

// Testing the map function with a callback that multiplies each number by 2
const numbers = [1, 2, 3, 4];
const results3 = map(numbers, number => number * 2);
assertArraysEqual([2, 4, 6, 8], results3);
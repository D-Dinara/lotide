const assertEqual = require('../assertEqual');
const head = require('../head');

//Check if the head function returns the first element of an array
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//Test case: an array with one element
assertEqual(head(["0"]), "0");

//Test case: an empty array. The function should return undefined
assertEqual(head([]), undefined);
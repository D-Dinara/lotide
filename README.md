# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ddinara/lotide`

**Require it:**

`const _ = require('@ddinara/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: The function takes in two values and prints out a message telling if the values match or not
* `head(array)`: The function takes in an array and returns the first element of the array
* `tail(array)`: The function takes in an array and returns everything except for the first item of the provided array.
* `eqArrays(arr1, arr2)`: The function takes in two arrays and returns true or false, based on a perfect match.
* `assertArraysEqual(actual, expected)`: The function takes in two arrays, checks if they are equal and logs an appropriate message to the console
* `without(source, itemsToRemove)`: The function takes in a source array and an "items to remove" array. It returns a new array with only those elements from source that are not present in the "items to remove" array.
* `flatten(array)`: The function takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array (not nested).
* `middle(array)`: The function takes in an array and returns the middle-most element(s) of the given array.
* `countOnly(allItems, itemsToCount)`: The function takes in an array and an object. It returns an object containing counts of everything that the input object listed.
* `countLetters(str)`: The function takes in a string, counts letters in the string and returns an object with characters and their quantity in the string
* `letterPositions(sentence)`: The function takes in a string and returns all the indices in the string where each character is found
* `findKeyByValue(obj,value)`: The function takes in an object and a value and returns a key on an object where its value matches a given value.
* `eqObjects(object1, object2)`: The function takes in two objects as arguments and returns true if they have the same contents, or false if they have any mismatching contents. The function supports both primitives, arrays and objects as property values.
* `assertObjectsEqual(actual, expected)`: The function takes in two objects, checks if they are equal and logs an appropriate message to the console
* `map(array, callback)`: The function takes in an array to map and a callback function. The function returns a new array based on the results of the callback function
* `takeUntil(array, callback)`: The function takes in two arguments: an array and a callback. It keeps collecting items from a provided array until the callback provided returns a truthy value. The function returns a slice of the array with elements taken from the beginning.
* `findKey(obj, callback)`: The function takes in two arguments: an array and a callback. It keeps collecting items from a provided array until the callback provided returns a truthy value. The function returns a slice of the array with elements taken from the beginning.









 
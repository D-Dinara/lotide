// The eqArrays function takes in two arrays as arguments and returns true if all elements of two arrays are equal
const eqArrays = function(arr1, arr2) {

  //Comparing the arrays' lengths first
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    //Comparing each element
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};


//The assertArraysEqual function takes in two arrays to compare to each other and logs a message depending on the result of eqArrays' function output (result).
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual,expected);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// The function takeUntil takes in two parameters: an array and a callback
//It keeps collecting items from a provided array until the callback provided returns a truthy value.

const takeUntil = function(array, callback) {
  // Check that input is an array and callback is a function
  if (!Array.isArray(array) || typeof callback !== 'function') {
    return 'Invalid input';
  }
  const newArr = [];

  for (const item of array) {
    if (!callback(item)) {
      newArr.push(item);
    } else break;
  }

  return newArr;
};


//Testing the takeUntil function
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
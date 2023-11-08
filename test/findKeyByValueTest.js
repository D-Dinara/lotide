const findKeyByValue = require('../findKeyByValue');
const assertEqual = require('../assertEqual');

//Testing the function
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//Test case: existing value
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

//Test case: the value does not exist
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');

const testResult = letterPositions("hello");

assertArraysEqual(testResult["h"],[0]);
assertArraysEqual(testResult["e"],[1]);
assertArraysEqual(testResult["l"],[2,3]);
assertArraysEqual(testResult["o"],[4]);
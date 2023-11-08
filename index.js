const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil');
const map = require('./map');
const letterPositions = require('./letterPositions');
const flatten = require('./flatten');
const findKeyByValue = require('./findKeyByValue');
const findKey = require('./findKey');
const eqObjects = require('./eqObjects');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const assertObjectsEqual = require('./assertObjectsEqual');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions,
  flatten: flatten,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  assertArraysEqual: assertArraysEqual,
  eqArrays: eqArrays,
  assertEqual: assertEqual,
  countOnly: countOnly,
  countLetters: countLetters,
  assertObjectsEqual: assertObjectsEqual,
};
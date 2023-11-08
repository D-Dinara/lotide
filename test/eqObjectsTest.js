const assertEqual = require('../assertEqual');
const eqObjects = require('../eqObjects');

//Testing the function

//Test case: two equal objects
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject),true);

//Test case: not equal objects, different number of keys
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject),false);

//Test case: two equal objects, the values are arrays
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);

//Test case: two not equal objects, different number of keys, values are arrays
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

//Test case: two not equal objects, values are arrays - elements of arrays are not equal
const longSleeveMultiColorShirtObject2 = { size: "medium", colors: ["red", "white"], sleeveLength: "long" };
assertEqual(eqObjects(longSleeveMultiColorShirtObject, longSleeveMultiColorShirtObject2), false);

//Test case: two equal objects, values are arrays - elements of arrays are equal
const longSleeveMultiColorShirtObject3 = { size: "medium", colors: ["red", "white"], sleeveLength: "long" };
assertEqual(eqObjects(longSleeveMultiColorShirtObject3, longSleeveMultiColorShirtObject2), true);
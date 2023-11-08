//The function takes in a source array and a itemsToRemove array.
//It returns a new array with only those elements from source that are not present in the itemsToRemove array.

const without = function(source, itemsToRemove) {
  const newArr = [];

  for (const sourceItem of source) {
    if (!itemsToRemove.includes(sourceItem)) {
      newArr.push(sourceItem);
    }
  }

  return newArr;
};

module.exports = without;
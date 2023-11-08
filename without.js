//Implementing without function
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
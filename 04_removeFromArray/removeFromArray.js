const removeFromArray = (array, ...secondArray) => {
  const newArray = array.filter((element) => {
    let secondElement = "";

    for (let i = 0; i < secondArray.length; i++) {
      secondElement = secondArray[i];
    }

    console.log(element, secondElement);

    if (element !== secondElement) return true;
    else return false;
  });

  return newArray;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;

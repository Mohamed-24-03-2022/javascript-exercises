const reverseString = (string) => {
  // 2 different solutions

  // let reversedName = '';
  // for (let i = string.length - 1; i >= 0; i--) {
  //     let letter = string[i];
  //     reversedName += letter;
  // }
  // return reversedName;

  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

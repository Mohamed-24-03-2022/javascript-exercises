const palindromes = function (string) {
  string = string.toLowerCase().replace(/[,!. ]/g, "");
  // .replaceAll(',', '')
  // .replaceAll(' ', '')
  // .replaceAll('!', '');

  const reversed = string.split("").reverse().join();
  const normal = string.split("").join();
  if (reversed === normal) return true;
  else return false;

  // console.log(string);
  // console.log(normal);
  // console.log(reversed);
};

// Do not edit below this line
module.exports = palindromes;

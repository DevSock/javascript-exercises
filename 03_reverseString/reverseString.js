const reverseString = function (string) {
  let strLength = string.length - 1;
  let result = "";
  while (strLength >= 0) {
    result += string[strLength];
    strLength--;
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;

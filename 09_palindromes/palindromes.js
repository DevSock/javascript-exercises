const palindromes = function (string) {
  const regex = /[\W_]+/g;
  string = string.toLowerCase().replace(regex, "");
  const reverse = string.split("").reverse().join("");

  return string.replace(regex, "") === reverse;
};

//     .match(/^[a-zA-Z0-9]+$/g)

// Do not edit below this line
module.exports = palindromes;

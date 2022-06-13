const fibonacci = function (index) {
  let result = 0;
  let previous = 0;
  if (index < 0) {
    return "OOPS";
  }
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }
  for (let i = 1; i <= index; i++) {
    if (i === 1) {
      result = 1;
    } else {
      result = previous + result;
      previous = result - previous;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;

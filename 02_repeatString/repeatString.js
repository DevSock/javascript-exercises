const repeatString = function (string, reps) {
  // If reps is negative, return "ERROR"
  // If reps === 0, return ""
  // If reps > 0, return string repeated reps times
  return reps < 0 ? "ERROR" : string.repeat(reps);
};

// Do not edit below this line
module.exports = repeatString;

const findTheOldest = function (array) {
  const calcAge = (person) =>
    (person.yearOfDeath ? person.yearOfDeath : new Date().getFullYear()) -
    person.yearOfBirth;

  return array.reduce((acc, curr) =>
    calcAge(curr) > calcAge(acc) ? curr : acc
  );
};

// Do not edit below this line
module.exports = findTheOldest;

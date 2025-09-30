const findTheOldest = function(arrayOfPeople) {
    return arrayOfPeople.reduce((oldestSoFar, nextPerson) => {
        if(!("yearOfDeath" in oldestSoFar)) {
            oldestSoFar.yearOfDeath = new Date().getFullYear()
        }
        const oldestSoFarAge = oldestSoFar.yearOfDeath - oldestSoFar.yearOfBirth
        const nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth
        return oldestSoFarAge > nextPersonAge ? oldestSoFar : nextPerson
    })
};

findTheOldest([
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ])

// Do not edit below this line
module.exports = findTheOldest;

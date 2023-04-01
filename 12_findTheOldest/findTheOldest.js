const findTheOldest = (people) => {
  const currentDate = new Date().getFullYear();

  const oldest = people.reduce(
    (prevPerson, CurrPerson) => {
      const age =
        (CurrPerson.yearOfDeath || currentDate) - CurrPerson.yearOfBirth;
      return age > prevPerson.age ? { CurrPerson, age } : prevPerson;
    },
    { CurrPerson: null, age: 0 }
  );
  return oldest.CurrPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(Persons) {
    let agePersonne = Persons.map((element) => {
        if (element.hasOwnProperty("yearOfDeath")){
            return element.yearOfDeath - element.yearOfBirth
        }
        else{
            const currentTime = new Date()
            return currentTime.getFullYear() - element.yearOfBirth
        } 
    });
    index = agePersonne.findIndex((element) => element == Math.max(...agePersonne));
    return Persons[index];
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
  ]
findTheOldest(people);
// Do not edit below this line
module.exports = findTheOldest;

// const findTheOldest = function(people) {
//    people.sort((a, b) => (findAge(a) > findAge(b)) ? -1 : 1);
//    return people[0];
// };

function findAge(person) {
   currentYear = new Date().getFullYear();
   if (!("yearOfDeath" in person)) {
      return currentYear - person.yearOfBirth;
   }
   return person.yearOfDeath - person.yearOfBirth;
}


// Using reduce()
const findTheOldest = function(people) {
   return people.reduce((oldest, currentPerson) => {
      const oldestAge = findAge(oldest);
      const currentAge = findAge(currentPerson);
      return oldestAge < currentAge ? currentPerson : oldest;
   })
};

// Do not edit below this line
module.exports = findTheOldest;

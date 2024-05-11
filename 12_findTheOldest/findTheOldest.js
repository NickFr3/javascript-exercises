const findTheOldest = function(people) {
    // Get age of person
    function getAge(birth, death) {
        if(!death) {
            death = new Date().getFullYear();
        }

        return death - birth;
    }

    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)

        if (currentAge > oldestAge) {
            return currentPerson;
        } else {
            return oldest;
        }
    })
}

// Do not edit below this line
module.exports = findTheOldest;

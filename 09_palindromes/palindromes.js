const palindromes = function (string) {    
    // Filtered array containing only letters and numbers
    const newString = string
        .toLowerCase()
        .split('')
        .filter((char) => char.match(/[a-z0-9]/))
        .join('');
    
    const reverse = newString.split('').reverse().join('');

    // Join arrays to strings and return comparison
    return reverse == newString;
};

// Do not edit below this line
module.exports = palindromes;

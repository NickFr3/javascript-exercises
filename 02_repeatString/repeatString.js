const repeatString = function(word, num) {
    let result = '';

    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            result += word;
        }
    } else {
        result = 'ERROR';
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;

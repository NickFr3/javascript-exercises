const sumAll = function(num1, num2) {
    let sum = 0;

    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (num1 < num2) {
        let count = num2;

        while (count >= num1) {
            sum += count;
            count -= 1;
        }
    
        return sum;
    } else {
        let count = num1;

        while (count >= num2) {
            sum += count;
            count -= 1;
        }
    
        return sum;
    }
    
};

// Do not edit below this line
module.exports = sumAll;

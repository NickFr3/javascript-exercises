const fibonacci = function(countArg) {
    const numIndex = Number(countArg);

    if (numIndex < 0) {
        return "OOPS";
    } else {
        // Initialize array with starting numbers
        let fib = [0, 1];
    
        for (i = 0; i <= numIndex - 2; i++) {
            let nextNum = fib[fib.length - 1] + fib[fib.length - 2];
            fib.push(nextNum);
        }

        return fib[numIndex];
    }
};

// Do not edit below this line
module.exports = fibonacci;

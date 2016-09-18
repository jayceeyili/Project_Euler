 // The prime factors of 13195 are 5, 7, 13 and 29.
 // What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(num) {
    if (num % 2 === 0) {
        while (num % 2 === 0) {
            num /= 2;
        }
    }
    var factor = 3;
    while (num > 1) {
        if (num % factor === 0) {
            while (num % factor === 0) {
                num /= factor;
            }
        } else {
            factor += 2;
        }
        if ((factor * factor > num) && (num > 1)) {
            return num;
        }
    }
    return factor;
}

console.log(largestPrimeFactor(600851475143));

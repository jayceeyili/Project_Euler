 // The prime factors of 13195 are 5, 7, 13 and 29.
 // What is the largest prime factor of the number 600851475143 ?

function largestPrimeFactor(num) {
    var factor = 2;
    while (num > 1) {
        if (num % factor === 0) {
            while (num % factor === 0) {
                num /= factor;
            }
        } else {
            factor += 1;
        }
        if (factor * factor > num) {
            return num;
        }
    }
}

console.log(largestPrimeFactor(600851475143));

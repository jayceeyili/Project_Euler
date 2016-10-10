// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
//
// What is the 10 001st prime number?

function nthPrime(n) {

    if (n === 1) return 2;

    var i = 3,
        count = 1;

    while (true) {

        if (isPrime(i)) count++;

        if (count === n) return i;

        i += 2;
    }
}

function isPrime(n) {
    if (n < 2) return false;
    if (n < 4) return true;
    if (n % 2 === 0) return false;
    if (n < 9) return true;
    if (n % 3 === 0) return false;

    var i = 5, limit = Math.floor(Math.sqrt(n));

    while (i <= limit) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

console.log(nthPrime(10001));

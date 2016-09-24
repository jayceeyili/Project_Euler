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

function isPrime(num) {

    if (num < 2) return false;

    var i = 2;
    while (i * i <= num) {

        if (num % i === 0) return false;

        i++;
    }

    return true;
}

console.log(nthPrime(10001));

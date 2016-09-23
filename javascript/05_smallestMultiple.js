 // 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 //
 // What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple(num) {

    var p = primes(num),
        count = {};

    for (var i in p) {
        var n = 1;

            while (Math.pow(p[i], n) < num) {

                count[p[i]] = count[p[i]] ? count[p[i]] + 1 : 1;

                n++;
            }
    }

    var product = 1;

    for (var key in count) {
        product *= Math.pow(key, count[key]);
    }

    return product;
}

function primes(num) {

    var primes = [];

    for (var i = 2; i <= num; i++) {

        if (isPrime(i)) primes.push(i);

    }

    return primes;
}

function isPrime(n) {

    if (n < 2) return false;

    var i = 2;

    while (i * i <= n) {

        if (n % i === 0) return false;

        i++;
    }

    return true;
}

console.log(smallestMultiple(20));

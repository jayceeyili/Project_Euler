// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
// Find the sum of all the primes below two million.

var summationOfPrimes = n => {
    var flags = [],
        sum = 2,
        limit = Math.sqrt(n);

    for (var i = 0; i <= n / 2; i++) flags.push(false, true);

    for (var i = 3; i <= limit; i++) {
        if (flags[i]) for (var k = i * i; k <= n; k += i) flags[k] = false;
    }

    for (var i = 3; i <= n; i++) {
        if (flags[i]) sum += i;
    }

    return sum;
}

console.log(summationOfPrimes(2000000));

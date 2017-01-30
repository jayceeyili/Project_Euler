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

function primes(num) {

    var primes = [];

    for (var i = 2; i <= num; i++) {

        if (isPrime(i)) primes.push(i);

    }

    return primes;
}

console.log(smallestMultiple(20));

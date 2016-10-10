# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
#
# What is the 10 001st prime number?

def nthPrime(n)

    return 2 if n == 1

    count, number = 1, 3

    loop do

        if isPrime(number)
            count += 1
        end

        return number if count == n

        number += 2
    end
end

def isPrime(number)
    return false if number < 2
    return true if number < 4
    return false if number % 2 == 0
    return true if number < 9
    return false if number % 3 == 0

    factor = 5
    until factor * factor > number
        return false if number % factor == 0 || number % (factor + 2) == 0
        factor += 6
    end

    true
end

p(nthPrime(10001))

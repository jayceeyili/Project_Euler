# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
#
# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

def smallestMultiple(num)

    primes = primes(num)
    count = Hash.new(0)

    primes.each do |p|
        n = 1
        while p ** n < num
            count[p] += 1
            n += 1
        end
    end

    count.keys.zip(count.values).map { |key, value| key ** value }.inject(:*)
end

def primes(num)

    primes = []

    2.upto(num) { |n| primes << n if isPrime(n) }

    primes
end

def isPrime(n)

    return false if n < 2

    i = 2
    while i * i <= n
        return false if n % i == 0
        i += 1
    end

    true
end

p(smallestMultiple(20))
# p(primes(20))
# p(isPrime(4))

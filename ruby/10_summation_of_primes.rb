# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#
# Find the sum of all the primes below two million.

def summation_of_primes(n)
    sum, flags = 2, []

    0.upto(n / 2) { flags.push(false, true) }

    i = 3
    until i * i > n
        (i * i).step(n, i) { |k| flags[k] = false } if flags[i] == true
        i += 1
    end

    3.upto(n) { |j| sum += j if flags[j] == true }

    sum
end

p(summation_of_primes(2000000))

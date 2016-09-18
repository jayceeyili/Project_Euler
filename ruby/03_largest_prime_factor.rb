# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

def largest_prime_factor(num)
    factor = 2
    while num > 1
        if num % factor == 0
            num /= factor until num % factor != 0
        else
            factor += 1
        end
        return num if factor * factor > num
    end
end

p(largest_prime_factor(600851475143))

#If we list all the natural numbers below 10 that are multiples of 3 or 5,
#we get 3, 5, 6 and 9. The sum of these multiples is 23.
#Find the sum of all the multiples of 3 or 5 below 1000.

# def multiples(num)
#     (1...num).to_a.keep_if { |n| n % 3 == 0 || n % 5 == 0 }.inject(0, :+)
# end

def multiples(num)
    threes = num / 3
    fives = num / 5
    fifteens = num / 15
    (1 + threes) * threes / 2 * 3 + (1 + fives) * fives / 2 * 5 - (1 + fifteens) * fifteens / 2 * 15
end
p(multiples(999))

# Each new term in the Fibonacci sequence is generated by adding the previous two terms.
# By starting with 1 and 2, the first 10 terms will be:
# 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
# By considering the terms in the Fibonacci sequence whose values do not exceed
# four million, find the sum of the even-valued terms.

def even_fib_numbers(num)
    a, b, sum = 1, 1, 0
    while b < num
        a, b = b, a + b
        sum += b if b.even?
    end
    sum
end

p(even_fib_numbers(4000000))

# A palindromic number reads the same both ways. The largest palindrome made
# from the product of two 2-digit numbers is 9009 = 91 × 99.
#
# Find the largest palindrome made from the product of two 3-digit numbers.

def largest_palindrome_product(numberOfDigit)
    result = 1
    (10 ** numberOfDigit - 1).downto(10 ** (numberOfDigit - 1)) do |i|
        (10 ** numberOfDigit - 1).downto(10 ** (numberOfDigit - 1)) do |k|
            result = i * k if is_palindrome?(i * k) && i * k > result
        end
    end
    result
end

def is_palindrome?(num)
    num_s = num.to_s
    num_s == num_s.reverse
end

p(largest_palindrome_product(3))

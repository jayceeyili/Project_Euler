//  A palindromic number reads the same both ways. The largest palindrome made
//  from the product of two 2-digit numbers is 9009 = 91 × 99.
//
//  Find the largest palindrome made from the product of two 3-digit numbers.

function largestPalindromeProduct(numberOfDigit) {
    var result = 1;
    var limit_h = Math.pow(10, numberOfDigit) - 1;
    var limit_l = Math.pow(10, (numberOfDigit -1))
    for (var i = limit_h; i >= limit_l; i--) {
        for (var k = limit_h; k >= limit_l; k--) {
            if (isPalindrome(i * k) && (i * k > result)) {
                result = i * k;
            }
        }
    }
    return result;
}

function isPalindrome(num) {
    var num_s = num.toString();
    var reversed = num_s.split("").reverse().join("");
    return num_s === reversed;
}

console.log(largestPalindromeProduct(3));

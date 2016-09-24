// The sum of the squares of the first ten natural numbers is,
//
// 1**2 + 2**2 + ... + 10**2 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)**2 = 55**2 = 3025
// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

function sumSquareDifference(num) {

    return squareOfSum(num) - sumOfsquare(num);
}

function squareOfSum(num) {

    return Math.pow((num + 1) * num / 2, 2);
}

function sumOfsquare(num) {

    return num * (1 + num) * (1 + 2 * num) / 6;
}

console.log(sumSquareDifference(100));

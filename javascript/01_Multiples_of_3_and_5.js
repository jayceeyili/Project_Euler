// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// function multiples(num) {
//     var sum = 0;
//     for (var i = 0; i < 1000; i++) {
//         if ((i % 3 === 0) || (i % 5 === 0)) {
//             sum += i;
//         }
//     }
//     return sum;
// }

function multiples(num) {
    var threes = Math.floor((num - 1) / 3);
    var fives = Math.floor((num - 1) / 5);
    var fifteens = Math.floor((num - 1) / 15);
    return 3 * threes * (1 + threes) / 2 + 5 * fives * (1 + fives) / 2 - 15 * (1 + fifteens) * fifteens / 2
}

console.log(multiples(1000));

// The sequence of triangle numbers is generated by adding the natural numbers.
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28.
// The first ten terms would be:
//
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
//
// Let us list the factors of the first seven triangle numbers:
//
// 1:   1: 1
// 2:   3: 1,3
// 3:   6: 1,2,3,6
// 4:  10: 1,2,5,10
// 5:  15: 1,3,5,15
// 6:  21: 1,3,7,21
// 7:  28: 1,2,4,7,14,28
// 8:  36: 1,2,3,4,6,9,12,18,36
// 9:  45: 1,3,5,9,15,45
// 10  55: 1,5,11,55
// 11: 66: 1,2,3,6,11,22,33,66
// 12: 78: 1,2,3,6,13,26,39,78
// 13: 91: 1,7,13,91
// 14: 105:1,3,5,7,15,21,35,105
// 15: 120:1,2,3,4,5,6,8,10,12,15,20,24,30,40,60,120
// We can see that 28 is the first triangle number to have over five divisors.
//
// What is the value of the first triangle number to have over five hundred divisors?

let divisorCounter = n => {
  var i = 1,
      count = 0;

  while (i * i <= n) {
    if (n % i === 0) {
      count++;
      if (i * i !== n) {
        count++;
      }
    }
    i++;
  }

  return count;
};

let triangleNumner = nth => nth * (nth + 1) / 2;

let highlyDivisibleTriangleNumber = nfactors => {
  var i = 0,
      n = 1;

  while (n <= nfactors) {
    i++;
    n = divisorCounter(triangleNumner(i));
  }

  return triangleNumner(i);
};

console.log(highlyDivisibleTriangleNumber(500));

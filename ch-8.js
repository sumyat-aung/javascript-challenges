//////////////// Challenge - 8

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [0, 3, 4, 5, 6, 8, 9, 5, 3]; // must be any array

let result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] ** 2);
}

let finalAns = result.reduce((accum, current) => {
  return accum + current;
}, 0);

// console.log(finalAns);

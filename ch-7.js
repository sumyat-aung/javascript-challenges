//////////////// Challenge - 7

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let n = 9; // must be any number

let resultMath = [];

for (let i = 0; i <= n; i++) {
  resultMath.push(2 ** i);
}

// console.log(resultMath);

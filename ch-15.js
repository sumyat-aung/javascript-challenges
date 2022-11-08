// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let inputArray = [3, 6, -2, -5, 7, 3];

let x = 0;
let y = 0;
let p = -Infinity;
for (var i = 0; i < inputArray.length; i++) {
  x = inputArray[i];
  y = inputArray[i + 1];
  if (x * y > p) {
    p = x * y;
  }
}
console.log(p);

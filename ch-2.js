//////////////// Challenge - 2

// Sum all the numbers of a given array  except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let array = [-6, -20, -1, -10, -12];

let compareFunc = (a, b) => {
  return a - b;
};

array.sort(compareFunc);

array.shift();
array.pop();

let result = array.reduce((accum, currentValue) => {
  return accum + currentValue;
}, 0);

console.log(result);

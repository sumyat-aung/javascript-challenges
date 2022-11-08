//////////////// Challenge - 4

// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
//  that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let numbers = [-52, 56, 30, 29, -54, 0, -110];

let smallest = Math.min.apply(Math, numbers);
let largest = Math.max.apply(Math, numbers);

console.log(smallest, largest);

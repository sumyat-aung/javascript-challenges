//////////////// Challenge - 11

// Return a new array consisting of elements which are multiple of their own index in input array

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let array = [
  -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68,
];
let result = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % i === 0) {
    result.push(array[i]);
  }
}
console.log(result);

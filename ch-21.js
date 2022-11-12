// Create a function that takes two arrays and insert the second array in the middle of the first array.
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function tuckIn(arr1, arr2) {
  let firstArr = arr1.splice(0, 1);
  let secondArr = arr1[arr1.length - 1];
  arr1 = [...firstArr, ...arr2, secondArr];
}

tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]);

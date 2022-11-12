// Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function canNest(arr1, arr2) {
  let A = Math.min.apply(Math, arr1);
  let B = Math.min.apply(Math, arr2);

  let C = Math.max.apply(Math, arr1);
  let D = Math.max.apply(Math, arr2);

  if (A > B && C < D) {
    return true;
  } else {
    return false;
  }
}

canNest([1, 2, 3, 4], [0, 6]);

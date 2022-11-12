// The left shift operation is similar to multiplication by powers of two.

// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function shiftToLeft(x, y) {
  let result = x * 2 ** y;
  console.log(result);
}

shiftToLeft(10, 3);

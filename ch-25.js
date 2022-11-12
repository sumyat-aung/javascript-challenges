// Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
// largestSwap(27) ➞ false

// largestSwap(43) ➞ true
// If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 3

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function largestSwap(num) {
  num = num.toString();

  let firstLetter = num[0];
  let secondLetter = num[1];

  let newWord = +[secondLetter, firstLetter].join("");

  if (num > newWord) {
    console.log(true);
  } else {
    console.log(false);
  }
}

largestSwap(27);

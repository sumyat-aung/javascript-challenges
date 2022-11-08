// Given the string, check if it is a palindrome.
// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

//////////////////////////////////////////////////////////////////////////////////////////////////////////

let inputString = "aaba"; // aabaa , jioij = true

let reverseString = inputString.split("").reverse().join("");

if (inputString === reverseString) {
  console.log(true);
} else {
  console.log(false);
}

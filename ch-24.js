// What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

// detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"

//////////////////////////////////////////////////////////////////////////////////////////////////////////

function detectWord(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      arr.push(str[i]);
    }
  }
  console.log(arr.join(""));
}

detectWord("HUSDHcJFHSFJaJFItJFIJcKODFKFh");

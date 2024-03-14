function isPalindrome(word) {
  // Write your algorithm here
  const wordReverse = word.split("").reverse().join("");
  console.log(wordReverse);
  if (wordReverse === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here

  1) convert input string to array
  2) reverse order of elements of array
  3) convert array back to string
  4) check if refersed string equals input string

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

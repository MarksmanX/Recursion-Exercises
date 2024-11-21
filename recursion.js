/** product: calculate the product of an array of numbers. */

function product(nums) {
    // base case
    if (nums.length === 0) return 1;
    // normal case
    return nums[0] * product(nums.slice(1))
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case
  if (words.length === 0) {
      return 0;
  }

  // Find the length of the first word
  const currentWordLength = words[0].length;

  // Recursively find the longest word length in the rest of the array
  const maxLengthOfRest = longest(words.slice(1));

  // Return the maximum of the current word length and the recursive result
  return Math.max(currentWordLength, maxLengthOfRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // Base case
  if (str.length === 0) {
    return;
  }

  
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};

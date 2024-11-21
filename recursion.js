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
  // Base case: if the string is empty or has only one character, return it
  if (str.length <= 1) {
    return str;
}
  // Recursive case: include the first character, skip the next, and call the function on the rest
  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  return revString(str) === str;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base Case: the val is found or it does not exist in the array.
  if (arr.length === 0) {
    return -1;
  }

  if (arr[0] === val) {
    return 0;
  } 

  return findIndex(arr.slice(1), val) === -1 ? -1 : findIndex(arr.slice(1), val) + 1
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  //Base case: The string has one character left at the beginning.
  if (str.length === 0) {
    return str;
  }

  // Recursive case: include the last character, and take it off, then call the function on the rest.
  return str[str.length - 1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (typeof obj === "string") {
    // Base case: if the input is a string, return it as an array
    return [obj];
  } 
  if (Array.isArray(obj)) {
    // If the input is an array, recursively process each element using map and flatten the result
    return obj.map(gatherStrings).flat();
  } 
  if (typeof obj === "object" && obj !== null) {
    // If the input is an object, recursively process its values using Object.entries and flatten the result
    return Object.entries(obj).map(([_, value]) => gatherStrings(value)).flat();
  }
  // If the input is neither a string, array, nor object, return an empty array
  return [];
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  // Base case: if the search space is invalid, the target is not in the array
  if (left > right) {
    return -1;
  }

  // Calculate the middle index
  const mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (arr[mid] === val) {
      return mid;
  } 

  // If the target is smaller, search the left half
  if (arr[mid] > val) {
      return binarySearch(arr, val, left, mid - 1);
  } 

  // If the target is larger, search the right half
  return binarySearch(arr, val, mid + 1, right);
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

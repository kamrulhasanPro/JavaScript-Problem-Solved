// problem - 1: Write a function that takes a string and returns it reversed.

function reversedString(string) {
  const reversed = string.split("").reverse().join("");
  return reversed;
}

const resultReversed = reversedString("monir");
console.log(resultReversed);

// problem - 2: Write a function that counts how many vowels (a, e, i, o, u) are in a given string.

function countVowels(string) {
  const vowels = "aeiou";
  //   const count = string
  //     .split("")
  //     .filter((alphabet) => vowels.includes(alphabet.toLowerCase())).length;

  let count = 0;
  for (let i = 0; i < string.length; i++) {
    const alphabet = string.toLowerCase()[i];
    if (vowels.includes(alphabet)) {
      count++;
    }
  }
  return count;
}
const resultVowelsCount = countVowels("kamrul hasaa");
console.log(resultVowelsCount);

// problem -3: Write a function that checks if a string is a palindrome (reads the same forward and backward).

function palindromeString(string) {
  // use beginner way
  let reverse = "";
  for (let i = string.length; i > 0; i--) {
    reverse += string[i - 1];
  }

  let isPalindrome = false;
  if (reverse.toLowerCase() === string.toLowerCase()) {
    isPalindrome = true;
  }
  return isPalindrome;
}

const resultPalindromeString = palindromeString("makam");
console.log(resultPalindromeString);

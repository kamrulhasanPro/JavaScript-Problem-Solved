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

const resultPalindromeString = palindromeString("mom");
console.log(resultPalindromeString);

// problem 4: Write a function that takes an array of numbers and returns the largest number.

function maxNumber(numbers) {
  //   const max = Math.max(...numbers);
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (max < element) {
      max = element;
    }
  }
  return max;
}

const resultMaxNumber = maxNumber([125, 15, 3, 85]);
console.log(resultMaxNumber);

// problem -5: Write a function that removes all duplicate numbers from an array.

function removeDuplicate(numbers) {
  const unique = [];
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (!unique.includes(element)) {
      unique.push(element);
    }
  }
  return unique;
}

const resultRemoveDuplicate = removeDuplicate([1, 2, 2, 3, 4, 4]);
console.log(resultRemoveDuplicate);

// problem -6: Write a function that returns the sum of all numbers in an array.

function sumTotal(numbers) {
  const sum = numbers.reduce((pre, next) => pre + next, 0);
  return sum;
}

const resultSumTotal = sumTotal([1, 3, 4, 5]);
console.log(resultSumTotal);

// problem -7: Write a function that returns all even numbers from a given array.

function evenNumbers(numbers) {
  const evens = numbers.filter((num) => num % 2 === 0);
  return evens;
}
const resultEvenNumbers = evenNumbers([1, 2, 3, 4, 5, 6, 10]);
console.log(resultEvenNumbers);

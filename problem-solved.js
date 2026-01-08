// problem - 1: reverse a string

function reversedString(string) {
  const reversed = string.split("").reverse().join("");
  return reversed;
}

// const resultReversed = reversedString("kamrul");
// console.log(resultReversed);

// problem - 2: count vowel in a string

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
// const resultVowelsCount = countVowels("kamrul hasaa");
// console.log(resultVowelsCount);

// problem -3: palindrome check

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

// const resultPalindromeString = palindromeString("madam");
// console.log(resultPalindromeString);

// problem 4: find maximum number from an array of number.

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

// const resultMaxNumber = maxNumber([125, 15, 3, 85, 500]);
// console.log(resultMaxNumber);

// problem -5: remove duplicate numbers from an array

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

// const resultRemoveDuplicate = removeDuplicate([1, 2, 2, 3, 4, 4]);
// console.log(resultRemoveDuplicate);

// problem -6: total sum in an array.

function sumTotal(numbers) {
  const sum = numbers.reduce((pre, next) => pre + next, 0);
  return sum;
}

// const resultSumTotal = sumTotal([1, 3, 4, 5]);
// console.log(resultSumTotal);

// problem -7: even number check

function evenNumbers(numbers) {
  const evens = numbers.filter((num) => num % 2 === 0);
  return evens;
}
// const resultEvenNumbers = evenNumbers([1, 2, 3, 4, 5, 6, 10]);
// console.log(resultEvenNumbers);

// problem -8: make fist word first latter a uppercase.

function upperFirstLetter(sentence) {
  const capitalizeWord = sentence
    .split(" ")
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(" ");
  return capitalizeWord;
}
// const resultUpperFirstLetter = upperFirstLetter("hey world hwoe ");
// console.log(resultUpperFirstLetter);

// problem -9: factorial number total.

function factorialNumber(number) {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
// const resultFactorialNumber = factorialNumber(7);
// console.log(resultFactorialNumber);

// problem -10: Write a function that prints numbers from 1 to 20.

function PingPong() {
  for (let number = 1; number <= 20; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("PingPong");
    } else if (number % 3 === 0) {
      console.log("Ping");
    } else if (number % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(number);
    }
  }
}
// PingPong();

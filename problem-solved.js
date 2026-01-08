// problem - 1: Write a function that takes a string and returns it reversed.

function reversedString(string) {
  const reversed = string.split("").reverse().join("");
  console.log(reversed);
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
const resultVowelsCount = countVowels("kamrul hasan");
console.log(resultVowelsCount);

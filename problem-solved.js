// problem - 1: Write a function that takes a string and returns it reversed.

function reversedString(string) {
  const reversed = string.split("").reverse().join("");
  console.log(reversed);
  return reversed;
}

const resultReversed = reversedString("monir");
console.log(resultReversed);


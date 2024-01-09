// toNumber on number, null, undefined

console.log(2- 9); // -7
console.log(2- null); // 2 - 0 => 2
console.log(2- undefined); // 2 - NaN => NaN


// toNumber on strings

console.log(1 - "453"); // -452
console.log(1 - "43rizon"); // 1 - NaN => NaN

// Assignment why its -9?
console.log(1 - "0xa"); // -9

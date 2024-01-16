// toString -> "" + value
console.log("" + 0);   // 0 -> "0"
console.log("" + (-0)); // -0 -> "0"

console.log("" + []); // [] -> ""
console.log("" + {}); // {} -> ""

console.log("" + [1, 2, 3, 4]); // 1, 2, 3
console.log("" + [null, undefined]); // ,
console.log("" + [1, 2, null, 4]); // 1,2,,4


// toNumber
console.log(0 - "010"); // -10
console.log(0 - "o10"); // NaN
console.log(0 - "O10"); // NaN

// console.log(0 - 010); // -8 // octal number
console.log(0 - "0xb"); // -11 //hexadecimal number
console.log(0 - 0xb); // -11

console.log(0 - []); // 0
console.log([] - 1); // -1
console.log([""] - 1); // -1



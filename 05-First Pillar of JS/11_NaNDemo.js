console.log(Number("123")); // 123
console.log(Number("abcd")); // NaN
console.log(Number("0xa")); // 10

let x = NaN;

console.log(x == NaN); // false

console.log(isNaN(x)); // true

// isNaN converts the incoming input to a number
console.log(isNaN("Rizon")); // true

console.log(Number.isNaN("Rizon")); // false

console.log(Number.isNaN(x)); // true

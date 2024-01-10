let x = -0;
console.log(x === 0); // true

console.log(Object.is(x, -0)); // T
console.log(Object.is(x, 0)); // F

console.log(Math.sign(-3)); // -1
console.log(Math.sign(2)); // 1
console.log(Math.sign(-0)); // -0
console.log(Math.sign(0)); // 0

/**
 * Homework : Can we write a custom function that can give us
 *             sign of a number properly ?
 */

function customSign(num) {
  if (num === 0 || num === -0) {
    return Object.is(num, -0) ? -1 : 0;
  }

  return Math.sign(num);
}

// Test the customSign function
console.log(customSign(-3)); // -1
console.log(customSign(2)); // 1
console.log(customSign(-0)); // -1
console.log(customSign(0)); // 0

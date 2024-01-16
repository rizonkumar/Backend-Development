let x = 10;
console.log(!x); // false

let y = undefined;
console.log(!y); // true

if (y) {
  console.log("It is truthy");
} else {
  console.log("It is falsy");
}

// let arr = [1, 10, 1000, 9, 2, 3, 11];

// arr.sort(function cmp(a, b) {
//   return a - b;
// });

// console.log(arr);

// Team A
function doTask(fn, x) {
  // whole implementation is done by A
  fn(x * x); // calling my callback with square of x
} // team A

// here Team B try to use it
doTask(function (num) {
  console.log("Woah num is ", num); // Woah num is  81
}, 9);

/*
  
    arrays are also custom object in JS
    index of the element is the key and the element it self is the value
    ["abc", "def", "ghi"] -> {0: "abc", 1: "def", 2: "ghi"}

*/

/**
 * map function
 *  map is a higher order function available with arrays
 *  it takes a function as a argument -> f
 *  it return an array in which every value is actually populated by calling
 *  function f with original array element as argument
 */

function square(element) {
  return element * element;
}

function isEvenOdd(x) {
  if (x % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const arr = [1, 2, 3, 4, 5];

const result = arr.map(square);
console.log(result); // [ 1, 4, 9, 16, 25 ]

const evenodd = arr.map(isEvenOdd);
console.log(evenodd); // [ 'Odd', 'Even', 'Odd', 'Even', 'Odd' ]

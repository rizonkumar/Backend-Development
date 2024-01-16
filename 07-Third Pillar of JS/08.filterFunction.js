/**
 *   Filter Function
 *      Filter is also HOF.
 *      Filter also loops over the array element
 *      there is one special thing about filter, i.e. the argument function f which
 *      we have to pass inside filter should always return a boolean, otherwise output will
 *      be converted to a boolean
 *
 *  Filter loops over every element, passes that element in the argument function and then if the
 *  output of the this function call is true, then it stores the original element in a new array otherwise
 *  doesn't add this add element to the array.
 */

function oddEven(x) {
  return x % 2 == 0; // returning a boolean
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = arr.filter(oddEven);
console.log(res); // [ 2, 4, 6, 8 ]

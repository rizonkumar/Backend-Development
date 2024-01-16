let arr = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];
arr.sort(); // arr.sort() is going to sort the array in lexicographical order (dictonary order)

/**
 *  0 -> A
 *  1 -> B
 *  2 -> C
 *  ...
 */

console.log(arr);

let b = [1, 10, 9, 100, 1000, 11, 12, 13, 14, 2, 3];

b.sort(function (a, b) {
  // if a < b -> a - b is -ve -> if cmp function gives -ve then a is placed before b (a < b)
  // if a > b -> a - b is +ve -> if cmp function gives +ve then b is placed before a (a > b)
  return a - b;
}); // sort is a HOF, the sort function takes a comparator function as argument

console.log(b);

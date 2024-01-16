/**
 *
 * Reduce:
 *    It's a HOF, available for arrays.
 *    It also takes a function "f" as an argument.
 *    What reduce does is, it one by one goes to every element of the arr,
 *    say the current is arr[0]
 *    reduce will pass the element to the function f, and accumlate the result of further
 *    function calls with this particular result.
 */

const arr = [1, 2, 3, 4, 5, 6];
function sum(prevResult, currValue) {
  console.log(prevResult, currValue);
  return prevResult + currValue;
}

const result = arr.reduce(sum);
console.log(result); // 21

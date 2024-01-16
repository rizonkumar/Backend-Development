const newArr = [9, 8, 7, 6, 5];

/**
 *  if the function that we are passing takes two argument
 *  then first argument will be accesssing the actual value
 *  second argumennt will be accesssing index of the value
 */

function print(element, index) {
  return `Element at index ${index} is ${element}`;
}

/**
 *  here map is looping over every element
 *  and then passing element, index in the function print
 */
const result = newArr.map(print);
console.log(result);

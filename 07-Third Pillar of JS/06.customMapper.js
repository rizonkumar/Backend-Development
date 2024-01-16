const newArr = [9, 8, 7, 6, 5];
function customMapper(arr, func) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i));
  }
  return result;
}

function print(element, index) {
  return `Element at index ${index} is ${element}`;
}

const value = customMapper(newArr, print);
console.log(value);

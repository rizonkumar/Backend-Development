function process() {
  let i = 0;
  function innerProcess() {
    i += 1;
    return i;
  }
  return innerProcess; // we are not calling the function, we are just returning
}

let res = process(); // this line calls the function, which return another function

console.log(res());
console.log(res());
console.log(res());

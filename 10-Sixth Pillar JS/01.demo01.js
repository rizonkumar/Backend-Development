function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise(function executor(resolve, reject) {
    for (let i = 0; i < 10000000000; i++) {}
    let num = getRandomInt(10);
    if (num % 2 == 0) {
      // if the random num is even then fulfill
      resolve(num);
    } else {
      // if the random num is odd then reject
      reject(num);
    }
  });
}

let y = createPromiseWithLoop();
console.log(y);

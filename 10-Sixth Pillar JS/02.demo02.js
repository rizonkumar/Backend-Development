function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromisewithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        // if the random num is even then fulfill
        resolve(num);
      } else {
        // if the random num is odd then reject
        reject(num);
      }
    }, 5000);
  });
}

let y = createPromisewithTimeout();
console.log(y);

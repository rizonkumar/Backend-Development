function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// With return
function createPromisewithTimeout() {
  return new Promise(function executor(resolve, reject) {
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        console.log("Fulfilling");
        resolve(num);
        console.log("Completed Resolving");
        return num;
      } else {
        console.log("Rejecting");
        reject(num);
        console.log("Completed Rejecting");
        return num;
      }
    }, 5000);
  });
}

let y = createPromisewithTimeout();
console.log(y);

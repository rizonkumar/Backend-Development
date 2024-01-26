function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromisewithTimeout() {
  return new Promise(function executor(resolve, reject) {
    console.log("Entering the executor callback in the promise constructor");
    setTimeout(function () {
      let num = getRandomInt(10);
      if (num % 2 == 0) {
        resolve(num);
      } else {
        reject(num);
      }
    }, 10000);
    console.log("Existing the executor callback in the promise constructor");
  });
}

console.log("Starting....");
const p = createPromisewithTimeout();
console.log("We are now waiting for the promise to complete");
console.log("Currently my promise object is like ...", p);
console.log("Going to register my 1st set of handlers");

p.then(
  function fulfillHandler1(value) {
    console.log("Inside the fulfill handler 1 with value", value);
    console.log("Promise after the fullfillment is", p);
    setTimeout(function t() {
      console.log("Ended at 0s timer");
    }, 0);
    console.log("Exitting the full handler 1");
  },
  function rejectionHandler1(value) {
    console.log("Inside the rejection handler 1 with value", value);
    console.log("Promise after the rejection is", p);
    setTimeout(function t() {
      console.log("Ended at 0s timer");
    }, 0);
    console.log("Exitting the reject handler 1");
  }
);

console.log("Going to register my 2nd set of handlers");
p.then(
  function fulfillHandler2(value) {
    console.log("Inside the fulfill handler 2 with value", value);
    console.log("Promise after the fullfillment is", p);
  },
  function rejectionHandler2(value) {
    console.log("Inside the rejection handler 2 with value", value);
    console.log("Promise after the rejection is", p);
  }
);

console.log("Ending");

setTimeout(function () {
  console.log("Global timer of 1s");
}, 1000);

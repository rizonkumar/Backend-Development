function createPromise() {
  return new Promise(function exec(resolve, reject) {
    setTimeout(function () {
      console.log("Rejecting the promise");
      reject("Done");
    }, 1000);
  });
}

let p = createPromise();
p.then(
  function fulfillHandler1(value) {
    console.log("We fulfilled 1 with a value", value);
  },
  function rejectHandler1(value) {
    console.log("We rejected 1 with a value", value);
  }
);
p.then(
  function fulfillHandler2(value) {
    console.log("We fulfilled 2 with a value", value);
  },
  function rejectHandler2(value) {
    console.log("We rejected 2 with a value", value);
  }
);

for (let i = 0; i < 10000000000; i++) {}
console.log("Ending");

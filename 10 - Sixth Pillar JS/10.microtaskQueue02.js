function createPromise() {
  return new Promise(function exec(resolve, reject) {
    console.log("Resolving the promise");
    resolve("Done");
  });
}

setTimeout(function process() {
  console.log("Timer Completed");
}, 0);

let p = createPromise();
p.then(
  function fulfillHandler1(value) {
    console.log("We fulfilled 1 with a value", value);
  },
  function rejectHandler1() {}
);
p.then(
  function fulfillHandler2(value) {
    console.log("We fulfilled 2 with a value", value);
  },
  function rejectHandler2() {}
);
p.then(
  function fulfillHandler3(value) {
    console.log("We fulfilled 3 with a value", value);
  },
  function rejectHandler3() {}
);

for (let i = 0; i < 10000000000; i++) {}
console.log("Ending");

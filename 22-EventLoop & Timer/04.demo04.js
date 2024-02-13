const fs = require("fs");

fs.readFile("./readme.md", "utf8", (err, data) => {
  // I/O queue - Callback queue
  if (err) {
    console.log("Error:" + err);
    return;
  }
  console.log("Data:" + data);
});

process.nextTick(() => console.log("Next tick"));
Promise.resolve.then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timer 1"), 0);
setImmediate(() => console.log("Immediate callback"));

for (let i = 0; i < 10000000; i++) {} // > 5s

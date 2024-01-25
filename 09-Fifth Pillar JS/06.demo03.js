console.log("Hello World");
for (let i = 0; i < 3; i++) {
  // i = 0, 1, 2
  setTimeout(function exec() {
    console.log("Timer Done");
  }, 10);
}
for (let i = 0; i < 10000000000; i++) {
  // some code
}
console.log("End");

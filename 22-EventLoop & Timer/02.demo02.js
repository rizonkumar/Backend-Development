console.log("Start");

setTimeout(() => console.log("Timer 1"), 0); //cb will be waiting in timer queue

Promise.resolve().then(() => console.log("Promise 1")); //cb will be waiting in promise queue

process.nextTick(() => console.log("Next tick 1")); //cb will be waiting in nextTick queue

setTimeout(() => console.log("Timer 2"), 0); //cb will be waiting in timer queue

process.nextTick(() => console.log("Next tick 2")); //cb will be waiting in nextTick queue

for (let i = 0; i < 1000000000; i++) {} // by the time this loop complete all the callbacks are in the respective queue

console.log("End");

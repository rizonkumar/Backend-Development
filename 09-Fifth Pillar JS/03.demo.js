function timeConsumingByLoop() {
  console.log("Loop start");
  for (let i = 0; i < 1000000000; i++) {
    // some task
  }
  console.log("Loop ends");
}

function timeConsumingByRunTimeFeature0() {
  console.log("Started timer 0");
  setTimeout(function exec0() {
    console.log("Completed the timer0");
    for (let i = 0; i < 1000000; i++) {
      // some task
    }
  }, 5000); // 5 sec timer
}
function timeConsumingByRunTimeFeature1() {
  console.log("Started timer 1");
  setTimeout(function exec1() {
    console.log("Completed the timer1");
  }, 0); // 0 sec timer
}
function timeConsumingByRunTimeFeature2() {
  console.log("Started timer 2");
  setTimeout(function exec2() {
    console.log("Completed the timer2");
  }, 200); // 2ms timer
}
console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature0();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByLoop();

console.log("Bye");

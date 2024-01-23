function timeConsumingByLoop() {
  console.log("Loop start");
  for (let i = 0; i < 1000000000; i++) {
    // some task
  }
  console.log("Loop ends");
}

function timeConsumingByRunTimeFeature0() {
  console.log("Started timer 0");
  setTimeout(function exec() {
    console.log("Completed the timer0");
    for (let i = 0; i < 1000000; i++) {
      // some task
    }
  }, 5000); //
}
function timeConsumingByRunTimeFeature1() {
  console.log("Started timer 1");
  setTimeout(function exec() {
    console.log("Completed the timer1");
  }, 0);
}
function timeConsumingByRunTimeFeature2() {
  console.log("Started timer 2");
  setTimeout(function exec() {
    console.log("Completed the timer2");
  }, 200);
}
console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();

console.log("Bye");

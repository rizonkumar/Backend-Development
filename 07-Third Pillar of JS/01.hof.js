// Higher Order Function

function f(x, fn) {
  /**
   * x -> number
   * fn -> function
   */
  console.log(x); // 10
  fn();
}

f(10, function exec() {
  console.log(" I am an expression passed to a HOF");
});

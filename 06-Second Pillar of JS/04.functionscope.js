if (false) {
  var x = 10;
}

console.log(x);

function fun() {
  var y = 10; // not accessible outside
}

function gun() {
  console.log(y);
  var y = 10;
}

gun();

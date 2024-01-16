function fun(x) {
  let i; // var i;  // both same
  if (x % 2 == 0) {
    i = 0;
  } else {
    i = 1;
  }
}

// OR

function gun(x) {
  if (x % 2 == 0) {
    var i = 0;
  } else {
    var i = 1;
  }
  console.log(i); // 0
}

gun(10);

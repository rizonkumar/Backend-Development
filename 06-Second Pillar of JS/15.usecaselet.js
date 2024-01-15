function fun() {
  for (var i = 0; i < 10; i++) {
    // do something
  }
  console.log(i); // you can still access "i"
}

// Doesn't make sense to access "i" after end of for loop
// So we use "let" her

function gun() {
  for (let i = 0; i < 10; i++) {
    // do something
  }
  console.log(i); // you cannot  access "i"
}

fun();
gun();

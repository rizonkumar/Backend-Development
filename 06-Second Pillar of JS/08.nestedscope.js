// fun -> GS
function fun() {
  var x = 10; // x -> fun scope
  function gun() {
    // gun -> fun scope
    var y = 20; // y -> gun scope
    console.log(x); // 10 (one scope outside)
    console.log(y); // 20
  }
  gun();
  console.log(x); // 10
  console.log(y); // error
}

fun();

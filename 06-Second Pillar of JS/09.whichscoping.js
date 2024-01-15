var teacher = "Sanket"; // teacher -> global -> sanket
function ask(question) {
  // ask -> global, question -> ask
  console.log(teacher, question); // sanket why?
}

function fun() {
  // fun -> global
  var teacher = "Pulkit"; // teacher -> fun -> pulkit
  ask("why?");
}
fun();

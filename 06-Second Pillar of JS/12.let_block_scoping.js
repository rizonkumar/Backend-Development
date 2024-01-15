var teacher = "Sanket"; // GS
// GS
function fun() {
  console.log(teacher); // no error will be given (undefined)
  console.log(content); // error (temporary dead zone)
  var teacher = "Pulkit"; // scope of fun
  let content = "JS"; //  content will be access only post declaration
  if (content == "JS") {
    let hours = "120+";
    console.log(hours); //120+
    console.log(content); // JS
  }
  console.log(teacher); // Pulkit
  console.log(content); // JS
  //   console.log(hours); // error
}
fun();
console.log(teacher); // Sanket
console.log(content); // error

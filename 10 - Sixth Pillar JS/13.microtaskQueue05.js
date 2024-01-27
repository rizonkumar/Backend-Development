function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("Started downloading", url);
    setTimeout(function processDownloading() {
      let data = "Dummy data";
      resolve(data);
      console.log("Download completed");
    }, 7000);
  });
}

console.log("Start");
let promiseObj = fetchData("hello");
promiseObj.then(function A(value) {
  console.log("value is ", value);
});
console.log("End");

function download(url) {
  console.log("started downloadin from ", url);
  return new Promise(function exec(res, rej) {
    setTimeout(function p() {
      console.log("Completed downloading data in 5 sec");
      const content = "ABCDF";
      res(content);
    }, 5000);
  });
}

x = download("www.xyx.com");
x.then(
  function fulFillHandler(value) {
    console.log("Content download is ", value);
    return "New Promise String";
  },
  function rejectHandler(value) {
    console.log("rejected with ", value);
  }
).then(function newFullFillHandler(value) {
  console.log("value from chained then promise", value);
});

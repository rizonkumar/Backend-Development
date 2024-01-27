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

download("www.xyx.com").then(function fulFillHandler(value) {
  console.log("Content download is", value);
});

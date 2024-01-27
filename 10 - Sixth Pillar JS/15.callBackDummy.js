function download(url, cb) {
  console.log("Started downloading from url", url);
  setTimeout(function exec() {
    console.log("Completed downloading after 5sec", url);
    const content = "ABCDEF";
    cb(content);
    // cb(content); // two times cb is called IOC issue
  }, 5000);
}

download("www.zyx.com", function processDownload(data) {
  console.log("download data is", data);
});

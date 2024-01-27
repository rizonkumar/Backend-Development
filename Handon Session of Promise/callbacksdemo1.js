// we are mimicing the function
// download the content of URL
// this downloading can take sometime,
// we will download the content from URL,
// and then whatever is the result, we will pass to the callback
function fetchCustom(url, fn) {
  console.log("Starting downloading", url);
  setTimeout(function process() {
    console.log("Download Completed");
    let response = "Dummy data";
    // Call the callback function and pass the response
    fn(response);
  }, 3000);
}

// Tasks:

// 1. Write a function to download data from a URL.
// 2. Write a function to save that downloaded data in a file & return the fileName
// 3. Write a function to upload the file written in previous step in a newURL.


function writeFile(data, fn) {
    // this function writes data in a new file
    console.log("Started writing data", data);
    setTimeout(function process() {
        console.log("Writing Completed");
        let fileName = "output.txt";
        fn(fileName);
    }, 4000)
}

function uploadFile(fileName, newURL, fn) {
    console.log("Upload Started");
    setTimeout(function process() {
        console.log("File" + fileName, +  "uploaded successfully on", newURL);
        let uploadResponse = "SUCCESS";
        fn(uploadResponse);
    }, 2000)
}

// passing the response to the user
fetchCustom("www.google.com", function downloadCallBack(response) {
  console.log("Downloaded response is ", response);
  writeFile(response, function writeCallBack(fileNameResponse) {
    console.log("new file written is", fileNameResponse);
    uploadFile(fileNameResponse, "www.drive.google.com", function uploadCallBack(uploadResponse) {
        console.log("Successfully uploaded", uploadResponse);
    })
  })
});

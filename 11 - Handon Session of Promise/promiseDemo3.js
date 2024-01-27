function fetchData(url){
    return new Promise(function (resolve, reject) {
        console.log("going to start download");
        setTimeout(function process() {
            let data = "Dummy Downloaded Data";
            console.log("Download Completed");
            resolve(data);
        }, 10000);
        console.log("Timer to minic download started")
    });
}

console.log("Starting the program")
console.log("We are trying to minic a downloader")
x = fetchData("www.google.com");
console.log("New promise object created successfully, but downloading still going on")
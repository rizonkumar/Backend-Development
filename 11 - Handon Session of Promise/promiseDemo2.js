// how can we write a function to download some data from URL, and not use callbacks
// instead use promises ?

function fetch(url){
    return new Promise(function (resolve, reject) {
        console.log("Starting fetching from ", url);
        setTimeout(() => {
            let data = "Dummy Data";
            console.log("Completed fetching the data")
            // somehow we need to return the data - TODO
            resolve(data); // return some data on success
        }, 4000);
    });
}

fetch("www.google.com");


function demo2(val) {
    return new Promise(function (resolve, reject) {
        console.log("Start");
        setTimeout(function process() {
            console.log("Completed process");
            if(val % 2 === 0){
                // even number
                resolve("Even");
            } else {
                // odd number
                reject("Odd");
            }
        }, 10000)
        console.log("Somewhere");
    })
}



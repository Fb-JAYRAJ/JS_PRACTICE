// Concepts: Promises, then, catch

// Q1. Create a promise that resolves after 2 seconds.
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});

myPromise
// Q2. Chain .then() calls to print sequential messages.
.then(function(result) {
    console.log(result);
    return "First then executed";
})
.then(function(msg) {
    console.log(msg);
    return "Second then executed";
})
// Q3. Handle rejection with .catch()
.catch(function(error) {
    console.log("Error:", error);
});
// Concepts: Async/Await, Fetch API, Error Handling

// Q1.	Create an async function that waits 3 seconds then logs “Done”.
async function waitThreeSeconds() {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("Done");
}

waitThreeSeconds(); // Logs "Done" after 3 seconds  


// Q2.	Fetch fake data from https://jsonplaceholder.typicode.com/todos/1.
async function fetchData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();
    console.log(data);
}

fetchData(); // Logs the fetched data object


// Q3.	Add try...catch for error handling.
async function fetchDataWithErrorHandling() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Fetch error:', error);
    }
}

fetchDataWithErrorHandling(); // Logs the fetched data object or an error message
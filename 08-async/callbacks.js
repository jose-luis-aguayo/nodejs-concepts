function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { id: 1, name: "John Doe" };
        callback(data); // Call the callback function with the data
    }, 2000); // Simulating a 2-second delay
}

function processData(data) {
    console.log("Processing Data:", data);
}

// Call fetchData and pass processData as a callback
fetchData(processData);
let dataReceived;

function ajaxSimulate(id, callback) {
    const database = ['Aaron', 'Barbara', 'Chris'];
    // Add code here
    setTimeout(() => {
        callback(database[id]);
    }, 0);
}

// Also add code here

function storeData(data) {
    dataReceived = data;
    console.log(dataReceived);
}

ajaxSimulate(1, storeData);
console.log(dataReceived);

function limitedInterval(callback, wait, limit) {
    for (let i = 0; i < limit - wait; i += wait) {
        setTimeout(callback, wait);
    }
}
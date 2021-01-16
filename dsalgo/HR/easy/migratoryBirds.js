
// with hash
function migratoryBirds(arr) {
    const dict = {};
    
    arr.forEach((type, i) => {
        dict[type] = ++dict[type] || 1;
    });
    
    let max = Math.max(...Object.values(dict));
    const maxSightings = Object.keys(dict).filter(key => dict[key] === max);
    return Math.min(...maxSightings);
}

// with array
function migratoryBirds(arr) {
    let tracking = [];
    for (let i = 0; i < arr.length; i++) {
        tracking[arr[i]] = ++tracking[arr[i]] || 1;
    }
    let max = 0;
    let maxPos = 0;
    for (let i = 0; i < tracking.length; i++) {
        if (tracking[i] > max) {
            max = tracking[i];
            maxPos = i;
        }
    }
    return maxPos;
}



console.log(migratoryBirds([1, 5, 5, 3, 3, 2]));
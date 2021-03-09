

const twoSum = (arr, target) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const comp = target - arr[i];
        if (obj[comp] !== undefined) {
            return [arr[i], comp];
        }
        obj[arr[i]] = comp;
    }
    return [];
}

console.log(twoSum([11,5,7,15,2], 9));
// console.log(twoSum());
// console.log(twoSum());
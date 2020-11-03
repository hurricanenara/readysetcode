

function howMany(sentence) {
    // Write your code here
    let arr = sentence.split(' ');
    let validator = /^[A-Za-z-\.\?,\!]+$/;
    let count = 0;
    arr.forEach(word => {
        if (validator.test(word)) {
            // console.log(`counting ${word}`)
            count++
        }
    })
    return count;
}
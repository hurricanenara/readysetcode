// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true

function bonAppetit(bill, k, b) {
    bill[k] = 0;
    const sum = bill.reduce((a, b) => a + b);
    const annaOwed = (sum/2);
    if (b === annaOwed) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaOwed);
    }
}
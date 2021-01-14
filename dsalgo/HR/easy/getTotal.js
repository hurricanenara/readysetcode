
/* 
ultimately boils down to finding the LCM for array a and GCD for array b and only if
lcm % a, lcm % a2, b1 % lcm, b2 % lcm equal 0 AND
gcd % a1, gcd % a2, b1 % gcd, b2 % gcd equal 0, it is a valid value therefore increment count
*/

function getTotalX(a, b) {
    // Write your code here
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (a.every(num => i % num === 0)) {
            if (b.every(num => num % i === 0)) {
                count++;
            }
        }
    }
    return count;
}
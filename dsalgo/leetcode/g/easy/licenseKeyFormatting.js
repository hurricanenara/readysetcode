// Runtime: 192 ms, faster than 18.66% of JavaScript online submissions for License Key Formatting.
// Memory Usage: 42.7 MB, less than 89.80% of JavaScript online submissions for License Key Formatting.

var licenseKeyFormatting = function(S, K) {
    const arr = [];
    const scrubbed = S.replace(/\-/g, "");
    for (let i = scrubbed.length; i >= 0; i--) {
        if ((i - K) >= 0) {
            arr.unshift(scrubbed.slice(i - K, i));
            i = i - K + 1;
        } else {
            if (i > 0) {
                arr.unshift(scrubbed.slice(0, i));
                return arr.join("-").toUpperCase();
            }
        }
    }
    return arr.join("-").toUpperCase();
    
};

// Shorter solution
var licenseKeyFormatting = function(S, K) {
    const newStr = S.replace(/-/g, '').toUpperCase(), // Remove existing dashes and convert any lowercase letters to uppercase
             arr = newStr.split(''); // Convert string to an array so we can manipulate it

    for (let i = arr.length - 1 - K; i >= 0; i-= K) { // Loop through array backwards and decrement by value of K
        arr[i] = arr[i] + '-';
    }

    return arr.join('');
}
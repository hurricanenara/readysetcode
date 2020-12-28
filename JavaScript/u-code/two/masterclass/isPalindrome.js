function reversed(str) {
    if (!str.length) return "";
    return reversed(str.slice(1)) + str[0];
}

function isPalindrome(str){
    return str === reversed(str);
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

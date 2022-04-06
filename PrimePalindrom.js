const prompt = require("prompt-sync")();


var num = prompt("Enter a number : ");
var rnum = 0;

if (checkPrime(num)) {
    console.log("Number is prime");
} else {
    console.log("Number is not prime");
}

if (checkPalindrome(num)) {
    console.log("Number is palindrome");
} else {
    console.log("Number is not palindrome");
}

if (checkPrime(rnum)) {
    console.log("Number is prime palindrom");
} else {
    console.log("Number is not prime palindrom");
}

//Checking for palindrom..
function checkPalindrome(num) {
    const reverseNumber = parseFloat(num.toString().split('').reverse().join(''));
    console.log("Palindrome of the number = " + reverseNumber);
    if (num == reverseNumber) {
        rnum = reverseNumber;
        return true;
    } else {
        return false;
    }
}

//Checking for prime number...
function checkPrime(num) {
    let flag = 0;
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        return false;
    else
        return true;
}
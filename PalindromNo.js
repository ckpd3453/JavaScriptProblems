const prompt = require("prompt-sync")();

var n1 = prompt("Enter 1st no : ");
var n2 = prompt("Enter 2nd no : ");

if (PalindromeChecker(n1) && PalindromeChecker(n2)) {
    console.log("The Given Two Numbers are palindrome");
} else {
    console.log("The Given Numbers are Not palindrome");
}


function PalindromeChecker(number) {
    let reverseNumber = number.split("").reverse();
    if (number == reverseNumber.join("")) {
        return true;
    } else {
        return false;
    }
}
"use strict";

const reader = require("prompt-sync");
const prompt = reader();

var num = prompt("Enter a number to get factorial: ");
var temp = 1;

for (var i = 1; i <= num; i++) {
    temp = temp * i;
}
console.log("Factorial of " + num + " = " + temp);
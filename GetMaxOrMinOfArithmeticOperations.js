"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const a = prompt("Enter 1st no.= ");
const b = prompt("Enter 2nd no.= ");
const c = prompt("Enter 3rd no.= ");

var op1 = (a + (b * c));
var op2 = ((a % b) + c);
var op3 = (c + (a / b));
var op4 = ((a * b) + c);

console.log("i) a+b*c = " + op1);
console.log("ii) a%b+c = " + op2);
console.log("iii) c+a/b = " + op3);
console.log("iv) a*b+c = " + op4);

if (op1 > op2) {
    if (op1 > op3) {
        if (op1 > op4) {
            console.log("Maximum value = " + op1);
        } else {
            console.log("Maximum value = " + op4);
        }
    } else if (op3 > op4) {
        console.log("Maixmum value = " + op3);
    } else {
        console.log("Maixmum value = " + op4);
    }
} else if (op2 > op3) {
    if (op2 > op4) {
        console.log("Maixmum value = " + op2);
    } else {
        console.log("Maixmum value = " + op4);
    }
} else if (op3 > op4) {
    console.log("Maixmum value = " + op3);
} else {
    console.log("Maixmum value = " + op4);
}

console.log("Minimum value = " + Math.min(op1, op2, op3, op4));
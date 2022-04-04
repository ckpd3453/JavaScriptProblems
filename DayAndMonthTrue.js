"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const day = prompt("Enter the date : ");
const month = prompt("Enter the month : ");
if ((day >= 20 && day <= 31 && month == '3') ||
    (day >= 1 && day <= 30 && month == '4') ||
    (day >= 1 && day <= 31 && month == '5') ||
    (day >= 1 && day <= 20 && month == '6')) {
    console.log("True");
} else {
    console.log("False")
}
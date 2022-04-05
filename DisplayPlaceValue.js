"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const num = prompt("Enter Minimum number of every digit should be maximum 4digit : ");

if (num == 0) {
    console.log("Zero");
} else if (num == 1) {
    console.log("Unit");
} else if (num == 10) {
    console.log("Ten");
} else if (num == 100) {
    console.log("Hundred")
} else if (num == 1000) {
    console.log("Thousand");
} else {
    console.log("Not a minimum no of digits or greater than 4 digit");
}
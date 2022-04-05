"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const x = prompt("Enter minimum no of any digit max 4digit = ");

let text;
switch (x) {

    case '10':
        text = "Ten";
        break;
    case '1':
        text = "Unit";
        break;
    case '100':
        text = "Hundred";
        break;
    case '1000':
        text = "Thousand";
        break;
    default:
        text = "Not a minimum no. or greater than 4 digit";
}
console.log(text);
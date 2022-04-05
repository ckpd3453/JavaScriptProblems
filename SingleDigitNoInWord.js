"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const x = prompt("Enter a single digit no.= ");

let text;
switch (x) {
    case '0':
        text = "Zero";
        break;
    case '1':
        text = "One";
        break;
    case '2':
        text = "Two";
        break;
    case '3':
        text = "Three";
        break;
    case '4':
        text = "Four";
        break;
    case '5':
        text = "Five";
        break;
    case '6':
        text = "Six";
        break;
    case '7':
        text = "Seven";
        break;
    case '8':
        text = "Eight";
        break;
    case '9':
        text = "Nine";
        break;
    default:
        text = "Not a single digit no.";
}
console.log(text);
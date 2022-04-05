"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const x = prompt("Enter a Week-Day no.= ");

let text;
switch (x) {

    case '1':
        text = "Monday";
        break;
    case '2':
        text = "Tuesday";
        break;
    case '3':
        text = "Wednesday";
        break;
    case '4':
        text = "Thursday";
        break;
    case '5':
        text = "Friday";
        break;
    case '6':
        text = "Saturday";
        break;
    case '7':
        text = "Sunday";
        break;
    default:
        text = "Not a Weekday no.";
}
console.log(text);
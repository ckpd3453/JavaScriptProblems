"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const year = prompt("Enter the year(yyyy) : ");
var a = year % 4;
var b = year % 400;
var c = year % 100;

if (a == '0' && b == '0' & c !== '0') {
    console.log(year + " is a Leap Year..");
} else {
    console.log(year + " is not a Leap Year..")
}
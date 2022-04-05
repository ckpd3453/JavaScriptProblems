"use strict";

const reader = require("prompt-sync");
const prompt = reader();

var k = parseInt(prompt("Enter the initial number of range : "));
var l = parseInt(prompt("Enter the last number of range : "));

var sum = 0;
for (k; k < l; ++k) {
    var flag = 0;
    for (var i = 2; i <= (k / 2); i++) {
        if (k % i == 0) {
            flag++;
            break;
        }
    }
    if (flag == 0) {
        sum = sum + k;
        flag = 0;
    }
    console.log("Prime no's are: " + sum);
}
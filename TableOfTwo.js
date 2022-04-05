"use strict";

const reader = require("prompt-sync");
const prompt = reader();

const n = prompt("Enter the value of n : ");
for (var i = 1; i <= n; i++) {
    var table = 2 * i;
    console.log("2 * " + i + " = " + table);
}
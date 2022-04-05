"use strict";

const reader = require("prompt-sync");
const prompt = reader();

while (true) {
    const num = prompt("\n Enter the number: ");
    var con1 = (num * 12 + "inch");
    var con2 = (num / 12 + "feet");
    var con3 = (num * 0.30 + "meter");
    var con4 = (num * 3.28 + "feet");
    console.log("i) Feet to Inch");
    console.log("ii) Inch to Feet");
    console.log("iii) Feet to Meter");
    console.log("iv) Meter to Feet");
    const op = prompt("Choose the operations want to perform :")

    switch (op) {
        case '1':
            console.log(con1);
            break;
        case '2':
            console.log(con2);
            break;
        case '3':
            console.log(con3);
            break;
        case '4':
            console.log(con4);
            break;
        default:
            console.log("Please Ente correct input:");
    }
}
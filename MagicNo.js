const prompt = require('prompt-sync')();

//taking user input as constant
const n = prompt("Think a number between 1 to 100 : ");
var a = 100;
var b = 50;
while (b !== n) {
    if (n < b) {
        b = (b / 2);
    } else {
        b = (50 + (b / 2));
    }
}
console.log("Magic No is " + b);
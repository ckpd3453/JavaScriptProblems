const prompt = require('prompt-sync')();

//taking user input as constant
const n = prompt("Enter the value of n : ");
var i = 1;
while (i <= n) {
    var mult = 2 * i;
    if (mult <= 256) {
        console.log("2 * " + i + " =" + " " + mult);
    } else {
        console.log("is Greater than 256");
    }
    i++;
}
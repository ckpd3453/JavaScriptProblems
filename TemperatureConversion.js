const prompt = require("prompt-sync")();

//Asking for choce for coversion
console.log("1-Fahrenheit-Celsius \n2-Celsius-Fahrenheit\n");
var choice = parseInt(prompt());
switch (choice) {

    case 1:
        const fahrenheit = prompt("Enter degree in Fahrenheit: ");
        if (fahrenheit < 32 && fahrenheit > 212) {
            console.log("The Enter degree Should be in range 32 to 212");

        } else {
            var result = (FahrenheitToCelsius(fahrenheit) + " C");
            console.log("Fahrenheit To Celusis Temperature : " + result);
            break;
        }

    case 2:
        let celsius = prompt("Enter degree in Celsius : ");
        if (celsius < 0 && celsius > 100) {
            console.log("The Enter degree Should be in range 0 to 100");

        } else {
            var result = (CelsiusToFahrenheit(celsius) + " F");
            console.log("Celusis To Fahrenheit Temperature : " + result);
            break;
        }
    default:
        console.log("Enter a valid input");
        break;
}

//method to convert celsius to fahrenheit
function CelsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9 / 5) + 32);
}
//method to convert  fahrenheit to celsius
function FahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
}
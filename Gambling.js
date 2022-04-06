var coin = 100;
var nw = 0;
var nl = 0;

while (coin >= 1 && coin <= 200) {
    var bet = Math.random();
    if (bet < 0.5) {
        nw++;
        console.log("Win No = " + nw);
        coin++;
    } else {
        nl++;
        console.log("Looser");
        coin--;
    }
}
var noOfBets = (nw + nl);
console.log("No. of times won = " + nw);
console.log("No. of Bets = " + noOfBets);
var head = 0;
var tail = 0;

while (head < 11 && tail < 11) {
    var toss = Math.random();
    if (toss < 0.5) {
        console.log("Head");
        head++;
    } else {
        console.log("Tail");
        tail++;
    }
}
console.log("Head = " + (head) + "\nTail = " + (tail));
if (head == 11) {
    console.log("Head is winner")
} else {
    console.log("Tail is winner")
}
// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// solution=>
// vers 01!
var alienColor2 = "green";
if (alienColor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alienColor === "yellow") {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
else if (alienColor === "red") {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//  vers #02 !
var $alienColor2 = "yellow";
if ($alienColor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if ($alienColor === "yellow") {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
else if ($alienColor === "red") {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//  version . 03!
var _alienColor = "red";
if (_alienColor === "green") {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (_alienColor === "yellow") {
    console.log("Congratulations! You just earned 10 points for shooting the alien.");
}
else if (_alienColor === "red") {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!
// solution=>
var animalsName = ["Cat", "Dog", "Rabbit"];
console.log("list of animals names");
for (var _i = 0, animalsName_1 = animalsName; _i < animalsName_1.length; _i++) {
    var i = animalsName_1[_i];
    console.log(i);
}
// print a statement about each animals:
for (var _a = 0, animalsName_2 = animalsName; _a < animalsName_2.length; _a++) {
    var i = animalsName_2[_a];
    console.log("A ".concat(i, " wo would make greet pet!"));
}
//print a statemetnt about what these animale have in  commen :
console.log("Any of these animals would make greet pet");

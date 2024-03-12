// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
// solution=>
var favorite_fruits = ["banana", "apple", "orange"];
favorite_fruits.map(function (i) {
    console.log(i);
});
if ("banana" === favorite_fruits[0] || "banana" === favorite_fruits[1] || "banana" === favorite_fruits[2]) {
    console.log("you Realy Like bananas");
}
if ("apple" === favorite_fruits[0] || "apple" === favorite_fruits[1] || "apple" === favorite_fruits[2]) {
    console.log("you Realy Like apples");
}
if ("orange" === favorite_fruits[0] || "orange" === favorite_fruits[1] || "orange" === favorite_fruits[2]) {
    console.log("you Realy Like oranges");
}
if ("grapes" === favorite_fruits[0] || "grapes" === favorite_fruits[1] || "grapes" === favorite_fruits[2]) {
    console.log("You really like grapes!");
}
else {
    console.log("Grapes are not in your favorite fruits list.");
}
if ("strwberry" === favorite_fruits[0] || "strwberry" === favorite_fruits[1] || "strwberry" === favorite_fruits[2]) {
    console.log("You really like strwberry!");
}
else {
    console.log("strwberry are not in your favorite fruits list.");
}

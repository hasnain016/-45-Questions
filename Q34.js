// 34. Pizzas:
// Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and then use a for loop to print the name of each pizza.
// • Modify your loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza, you like and then an additional sentence, such as I really love pizza!
// solution=>
console.log("my faverate pizzas ");
var favoritePizzas = ["pepperoni", "Margherita", "BBQ chiken"];
for (var _i = 0, favoritePizzas_1 = favoritePizzas; _i < favoritePizzas_1.length; _i++) {
    var i = favoritePizzas_1[_i];
    console.log(i);
}
// print a sentence using the name of each pizza!
for (var _a = 0, favoritePizzas_2 = favoritePizzas; _a < favoritePizzas_2.length; _a++) {
    var i = favoritePizzas_2[_a];
    console.log("I Like ".concat(i, " pizza !"));
}

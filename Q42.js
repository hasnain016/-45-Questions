// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.
// solution=>
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
var magician_names1 = ["Hasnain Abass", "Naveed Ahmad", "Nadeem Akhtar", "Akmal Khan"];
var great_magicians = make_great(magician_names);
show_magicians(great_magicians);

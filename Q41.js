// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.
// solution=>
function show_magicians(i) {
    i.forEach(function (i) { return console.log(i); });
}
var magician_names = ["Naveed", "Ali", "Zashan", "Irshad", "Afzal"];
// call function:
show_magicians(magician_names);

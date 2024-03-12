
// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.


// solution=>

function show_magicians1(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great1(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magician_names1: string[] = ["Hasnain Abass","Naveed Ahmad","Nadeem Akhtar","Akmal Khan"];
let great_magicians = make_great(magician_names);
show_magicians(great_magicians);

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.


// solution=>

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

let magician_names2: string[] = ["Hasnain Abass","Naveed Ahmad","Nadeem Akhtar","Akmal Khan"];
let great_magicians2 = make_great([...magician_names]); // Creating a copy using the spread operator

// Show the original magician names
console.log("Original Magicians:");
show_magicians(magician_names);

// Show the modified magician names
console.log("\nGreat Magicians:");
show_magicians(great_magicians);

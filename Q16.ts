// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list.
// • Print a new set of invitation messages, one for each person in your list.

// solution =>


let guests3:string[] = ["Muhammad Khalid","Muhammad Kamran Khan","Anser Abass","Muhammad Imran Khan"];
for(let idx = 0;idx < guests.length;idx++){
    console.log(`Dear ${guests[idx]} ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) `)};
    // good news:
    console.log("Good news! we found bigger dinner table.");
    
    
// • Add one new guest to the beginning of your array.
guests.unshift("Sheraz Ahmad");


// • Use append() to add one new guest to the end of your list.
guests.push("Muhammad Wajid")

// • Add one new guest to the middle of your array.
guests.splice(3,0,"Naveed Ahmad");

for(let idx = 0;idx < guests.length;idx++){
    console.log(`Dear ${guests[idx]} ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) `)};
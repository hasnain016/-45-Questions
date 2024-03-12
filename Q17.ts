// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

// solution=>


let guests4:string[] = ["Muhammad Khalid","Muhammad Kamran Khan","Anser Abass","Muhammad Imran Khan"];
for(let idx = 0;idx < guests.length;idx++){
    console.log(`Dear ${guests[idx]} ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch)`)}
console.log("Unfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest: string = guests.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

for(let idx = 0;idx < guests.length;idx++){
    console.log(`Dear ${guests[idx]} ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch)`)}

guests.pop();
guests.pop();
console.log("Guest list after dinner:", guests);
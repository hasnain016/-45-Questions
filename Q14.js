// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
// invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guests = ["Muhammad Khalid", "Muhammad Kamran Khan", "Anser Abass", "Muhammad Imran Khan"];
for (var idx = 0; idx < guests.length; idx++) {
    console.log("Dear ".concat(guests[idx], " ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) "));
}

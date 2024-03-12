// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// solution=>
var guests1 = ["Muhammad Khalid", "Muhammad Kamran Khan", "Anser Abass", "Muhammad Imran Khan"];
for (var idx = 0; idx < guests.length; idx++) {
    console.log("Dear ".concat(guests[idx], " ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) "));
}
console.log("unfotunately,".concat(guests[2], " Can't Make it to dinner ."));
guests[2] = "Naveed Ahmed";
for (var idx = 0; idx < guests.length; idx++) {
    console.log("Dear ".concat(guests[idx], " ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) "));
}

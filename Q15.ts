// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// solution=>

let guests1:string[] = ["Muhammad Khalid","Muhammad Kamran Khan","Anser Abass","Muhammad Imran Khan"];

for(let idx = 0;idx < guests.length;idx++){
console.log(`Dear ${guests[idx]} ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) `);
}
console.log(`unfotunately,${guests[2]} Can't Make it to dinner .`);

guests[2] = "Naveed Ahmed";

for(let idx = 0;idx < guests.length;idx++){
console.log(`Dear ${guests[idx]} ! \n You are cordially invited at my Home .It would be an honor to have you join us.\n Sincerley,(Hasnain Khan Rind Bloch) `);

}
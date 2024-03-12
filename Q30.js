// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
// solution=>
var userNames = ["admin", "Eric", "Hasnain", "imran", "Naveed",];
for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
    var i = userNames_1[_i];
    if (i === "admin") {
        console.log("Hello admin , would you Like to see a status report ?");
    }
    else {
        console.log("Hello ".concat(i, " , THank you for logging in again. "));
    }
}

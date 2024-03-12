// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// solution=>
var userNames1 = ["admin", "Eric", "Hasnain", "imran", "Naveed",];
if (userNames.length > 0) {
    for (var _i = 0, userNames_1 = userNames; _i < userNames_1.length; _i++) {
        var i = userNames_1[_i];
        if (i === "admin") {
            console.log("Hello admin , would you Like to see a status report ?");
        }
        else {
            console.log("Hello ".concat(i, " , THank you for logging in again. "));
        }
    }
}
else {
    console.log("We need to find some users !");
}
//   remove all usernames in the array
userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users !");
}

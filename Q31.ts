// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


// solution=>

let userNames1:string[] = ["admin","Eric","Hasnain","imran","Naveed",];

if(userNames.length > 0){
for(let i of userNames){
if(i === "admin"){
console.log(`Hello admin , would you Like to see a status report ?`);
}else{
    console.log(`Hello ${i} , THank you for logging in again. `);
}
   }

      }else{
        console.log("We need to find some users !");
        
      }
    //   remove all usernames in the array
    userNames = [];
    if(userNames.length === 0){
        console.log("We need to find some users !");
        
    }
    

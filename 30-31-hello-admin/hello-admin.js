"use strict";
//Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
//a code that will print a greeting to each user after they log in to a website. Loop through the array, and 
//print a greeting to each user:
//If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status 
//report?Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["eric", "john", "fatima", "sarah", "admin"];
for (let user of usernames) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
console.log("===================================================");
console.log("Question 31 output");
console.log("===================================================");
//Task#31:
//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
//If the list is empty, print the message We need to find some users!
//Remove all of the usernames from your array, and make sure the correct message is printed
//if (usernames.length === 0){
//  console.log("We need to find some users!");
//for (let user of usernames){
//  if (user === "admin"){
//    console.log("Hello admin, would you like to see a status report?");
//}
//else{
//  console.log(`Hello ${user}, thank you for logging in again.`);
//}
//}
//}
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

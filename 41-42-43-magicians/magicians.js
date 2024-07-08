"use strict";
//Magicians:Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["Ahmed", "David", "Hassan"];
show_magicians(magician);
console.log("***************");
//Task#42
//Great Magicians:Start with a copy of your program from Exercise 39. Write a function called make_great() 
//that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
//Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ` the Great`;
    }
}
const magician1 = ["Ahmed", "David", "Hassan"];
make_great(magician1);
show_magicians(magician1);
console.log("*****************");
console.log("Question#43");
//Task#43
//Unchanged Magicians:Start with your work from Exercise 40. Call the function make_great() with a copy of the
//array of magicians’ names. Because the original array will be unchanged, return the new array and store it
//in a separate array. Call show_magicians() with each array to show that you have one array of the original 
//names and one array with the Great added to each magician’s name.
function make_great1(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ` the Great`);
    }
    return greatMagicians;
}
const magician2 = ["Ahmed", "David", "Hassan"];
const greatMagicians = make_great1(magician2);
show_magicians(magician2);
show_magicians(greatMagicians);

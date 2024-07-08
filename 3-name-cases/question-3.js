"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in
// lowercase, uppercase, and titlecase.
let personName = ("Ruba");
// lowercase:
console.log(personName.toLowerCase());
//uppercase:
console.log(personName.toUpperCase());
//titlecase:
console.log(personName.replace(/\b\w/g, (char) => char.toUpperCase()));

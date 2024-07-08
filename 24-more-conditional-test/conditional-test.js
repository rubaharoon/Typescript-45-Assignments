"use strict";
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
//more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings.Tests using the lower case function.Numerical tests involving 
//equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
//Tests using "and" and "or" operators.Test whether an item is in a array.Test whether an item is not
//in a array
const string1 = "Hello";
const string2 = "World";
console.log(string1 === string2);
console.log(string1 !== string2);
const upperCase = "HELLO";
const lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase);
const number1 = 10;
const number2 = 20;
console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);
const x = 10;
const y = 20;
const z = 30;
console.log(x < y && y < z);
console.log(x < y || y < z);
const array1 = [1, 2, 3, 4, 5, 6];
const itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1);
console.log(array1.indexOf(10) === -1);

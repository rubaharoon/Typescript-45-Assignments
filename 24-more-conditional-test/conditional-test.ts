//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try
//more comparisons, write more tests. Have at least one True and one False result for each of the following:
//Tests for equality and inequality with strings.Tests using the lower case function.Numerical tests involving 
//equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
//Tests using "and" and "or" operators.Test whether an item is in a array.Test whether an item is not
//in a array

//Tests for equality and inequality with strings

const string1: string = "Hello";
const string2: string = "World";

console.log(string1 === string2);
console.log(string1 !== string2);

//Tests using the lower case function

const upperCase: string = "HELLO";
const lowerCase: string = "hello";

console.log(upperCase.toLowerCase() === lowerCase);

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and
//less than or equal to

const number1: number = 10;
const number2: number = 20;

console.log(number1 === number2);
console.log(number1 !== number2);
console.log(number1 > number2);
console.log(number1 < number2);
console.log(number1 >= number2);
console.log(number1 <= number2);

//Tests using "and" and "or" operators

const x: number = 10;
const y: number = 20;
const z: number = 30;

console.log(x < y && y < z);
console.log(x < y || y < z);

//Test whether an item is in a array

 const array1: number[] = [1, 2, 3, 4, 5,6];
 const itemToFind: number = 3;

 console.log(array1.indexOf(itemToFind) !== -1);

//Test whether an item is not in a array

console.log(array1.indexOf(10) === -1);

 
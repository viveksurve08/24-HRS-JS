//* Modern Javascript - Ecmascript 2015

// * LET AND CONST - Ecmascript 2015

//? let Keyword: The let keyword is used to declare variable with block scope. Variable declared with let are mutable, meaning their values can be reassigned.

// var myFavPerson = "Nobita";
// myFavPerson = "Redux";
// console.log(myFavPerson);  // Redux

// let myFavPerson = "Nobita";
// myFavPerson = "Redux";
// console.log(myFavPerson); // Redux

//? const Keyword: The const Keyword is used to declare variables with bloack scope, but once a value is assigned to a const variable, it cannot be reassigned. const variable are immutable.

// const myFavPerson = "Nobita";
// myFavPerson = "Redux";
// console.log(myFavPerson); //TypeError: Assignment to constant variable.

//? 1st show what var can do

// var name = "Nobita";
// if (true) {
//   var name = "Redux";
//   console.log(name);
// }
// name = "Thunk";
// console.log(name); //Redux Thunk

// ex2: With the help of let keyword
// let name = "Nobita";
// if (true) {
//   let name = "Redux";
//   console.log(name);
// }
// name = "Thunk";
// console.log(name); // Redux Thunk

// ex3: With the help of const keyword
// const name = "Nobita";
// if (true) {
//   const name = "Redux";
//   console.log(name);
// }
// name = "Thunk";
// console.log(name); // TypeError: Assignment to constant variable.

// ====================================================

// var
// if (true) {
//   var name = "Redux";
//   console.log(name);
// }
// name = "Thunk";
// console.log(name);

// let
// if (true) {
//   let name = "Redux";
//   console.log(name);
// }
// // name = "Thunk";
// console.log(name); // ReferenceError: name is not defined

//* TEMPLATE STRINGS - EcmaScript 2015

//? In EcmaScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create strings in Javascript. Template strings are enclosed in backticks (``) rather than single or double quotes.

// let firstName = "Redux ";
// let lastName = "Thunk";

// // // Using template string for  string interpalation
// // let fullName = firstName + lastName;
// let fullName = `${firstName}${lastName}`;
// console.log(fullName);

//? String Interpolation: Template strings support string interpolation, allowing you to embed expressions directly within the string. Interpolated expressions are enclosed in ${}

// let age = 25;
// // String interpolation with variable
// let message = `I am ${age} years old.`;
// console.log(message);

// Multi-line Strings: Template strings make it easy to create multi-line strings without the need for concatenation or escape characters.

// let multiLineString = `This is a multi-line
// string using template literals.
// It's much cleaner and easier to read.`;
// console.log(multiLineString);

//? Expression Evaluation: Template expressions can include any valid Javascript expression.

//! Practice Time
// var num = 5;
// console.log("5 * " + num + " = " + 5 * num); // 25
// console.log(`5 * ${num} = ${5 * num}`); // 25

//? Advantages:

//? Readability: Tamplate strings make the code more readable, especially for complex string constructions.

//? Conciseness: They eliminate the need for explicit string concatenation and reduce the use of escape characters.

//? Expression Flexibility: Any Javascript expression can be embedded within ${}.

//? Multi-line Support: Creating multi-line strings is more straightforward.

//* DEFAULT Parameters

//? In ECMAScript 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameters defaults. Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.

//?  Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.

//! Write a function to find sum of two numbers? What if during function call user only passed one argument?

// function sum(a, b = 10) {
//   return a + b;
// }
// console.log(sum(5, 15)); //20

//* FAT ARROW FUNCTION

//? In ECMAScript 6 (ES6), arrow functions, also known as fat arrow functions, were introduced as a concise way to wrtie anonymous functions.

// Traditional function
// const sum = function (a, b) {
//   let result = `The sum of ${a} and ${b} is ${a + b}`;
//   console.log(result);
// };
// sum(5, 10);

// using fat arrow funtion
// const sum = (a, b) => {
//   let result = `The sum of ${a} and ${b} is ${a + b}`;
//   console.log(result);
// };
// sum(5, 10);

// using oneline code
// const sum = (a, b) => console.log(`The sum of ${a} and ${b} is ${a + b}`);
// sum(5, 10);

//! How to convert the same in fat arrow function
//Syntax:
// const functionName = (param1, param2) => {
//   //Function body
//   return result; //Optional
// };

//todo NOTES

//? 1: If the function body consists of a single expression, the braces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(5, 10));  //The sum of 5 and 10 is 15

//? 2: If there is only parameter, the parentheses () around the parameter list can be omitted.
// const square = (a) => `The square of ${a} is ${a * a}`;
// console.log(square(5)); // The square of 5 is 25

//? 3: If  there are no parameters, use an empty set of parentheses().
// const greet = () => console.log("Hey Developer");
// greet(); //Hey Developer

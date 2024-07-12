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

//!================================
//! Part 2 of Modern JavaScript
//!================================

//* =======================================
//* Object Properties - Modern JavaScript
//* =======================================

// const name = "Vivek";
// const age = 25;

// Traditional way
// const person = { name: name, age: age };
//? Using shorhand notation for object property
// const person = { name, age };
// console.log(person); // { name: 'vivek', age: 25 }

// Instead of specifying name: name age: age, you can simply use name and age directly within the object literal, thanks to ES6 shorthand property notation.

//* =======================================
//* Destructuring -Modern JavaScript
//* =======================================

//? Destructuring in JavaScript is a way to extract values from  arrays pr objects and assign them to variables in a concise and readable manner.
//? Use Case: Makes code cleaner and avoids repetitive copying of values.

//* Destructuring Arrays:
//? 1: Extracting specific elements:
// const numbers = [10, 20, 30];
// // const first = numbers[0]; // Traditional way
// const [first, second, third] = numbers;
// console.log(first); //10

//? 2: Ignoring elements
// const [, , third] = numbers;
// console.log(third); //30

//! Interview Questions
//! Write a program to swap two variables without using 3rd variable?
// let a = 10;
// let b = 30;
// //a=30, b=10
// //? Mostly will do using 3rd var
// // let c = b; //c=30
// // b = a; // b=10
// // a = c; // a=30

// //? without using 3rd variable
// [a, b] = [b, a];
// console.log(a, b); //30 10

//* Destructureing Objects:

// const user = { name: "Vivek", age: 25 };

// We will see the real life use ofit in our main project of weather app

//? Extracting Properties:
// console.log(user.name);
// const myName = user.name; // Traditional way

// const { name, age } = user;
// console.log(name, age);

//? Renaming Properties:
// const { name: fullName, age } = user; //Rename "name" to "fullName";
// console.log(fullName);

//* =======================================
//* SpreadOperator - Modern JavaScript
//* =======================================

// JavaScript ES6 (ECMAScript 6) introduced the spread operator. The Syntax is three dots (...) followed by the array (or iterable*).

//? 1: Copying an array
// let fruits = ["Apple", "Orange", "Mango", "Banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

//? 2: Concatenating arrays / Combining arrays
// const numbers1 = [1, 2, 4];
// const numbers2 = [4, 5, 6];

// const newNumbers = [...numbers1, ...numbers2];
// console.log(newNumbers);

//? 3: Adding Elements to existing array
// let fruits = ["Apple", "Orange", "Mango", "Banana"];
// // fruits.push("Guava", "Grapes");
// fruits.push(...["Guava", "Grapes"]);
// console.log(fruits);

//! One more useCases
//?  IN Javascript, when you spread a string using the spread Syntax (...), it converts the string into an array of its individual characters.

//? Traditional way
// const country = "INDIA";
// console.log(country.split(""));

//? New way of doing it
// const country = "INDIA";
// console.log([...country]);

//* =======================================
//* Rest Operator - Modern JavaScript
//* =======================================

//? The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a more flexible way to work with functions that can accept varying numbers of arguments.

//? traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };
// console.log(sum(1, 2, 3, 4));

//? with rest parameters
// const sum = (...numbers) => {
//   // console.log(typeof numbers); // object
//   return numbers.reduce((accum, curVal) => (accum = accum + curVal), 0);
// };

// console.log(sum(1, 2, 3, 4, 213, 11, 231, 314, 213, 142, 12, 11, 3) + 109246); // 110406

// TODO NOTE: A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.

// function wrong1(... one,...wrong) {}
// function wrong2(... wrong,arg2,arg3) {}

//* ==========================
//* Object in JavaScript
//* ==========================

//? Objects are a fundamental part of Javascript, providing a way to group related data and functions together. In Javascript an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other Objects. Objectscan have properties and methods making them versatile for various use cases.

// Syntax: obj = {}

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most comon one is using object literals:

// Ex-1:
// const product = {
//   id: 1,
//   pName: "Laptop",
// };

// Ex-2:
// let person = {
//   name: "Radha",
//   age: 20,
//   isStudent: false,
//   greet: function () {
//     console.log("Welcome to world Best JavaScript Course");
//   },
// };

// Ex-3:
// let person = {
//   name: "Krishna",
//   age: 22,
//   "is'Student": false,
//   greet: function () {
//     console.log("Welcome to world Best JavaScript Course");
//   },
// };

//* =========================
//* Accessing Properties:
//* =========================
//? You can access object properties using dot motation or squre bracket notation:
// console.log(person.name);
// console.log(person.age);
// // console.log(person.isStudent);
// console.log(person["is'Student"]);

//* ==================================
//* Adding and Modifying Properties:
//* ==================================
//? You can add new properties or modify existinf ones:
// person.job = "Web Dev";
// // person.age = 18;
// person["age"] = 20;
// console.log(person);

//* =========================
//* Methos:
//* =========================
//? Methods in objects are function associated with the object. They can be invoked using the same notation as properties:
// person.greet();

//* =======================================
//* We can add dynamic keys in an object
//* =======================================

// let idType = "studentId";

// let student = {
//   [idType]: "A123456", //Dynamic key based on idType
//   sName: "Krishna",
//   sAge: 25,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
//     );
//   },
// };

// student.greet();

//? useCase: When we want to get the user name and value in react

//*===================================
//* Data Modeling:
//*===================================

//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the type of data used and stored witthin the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

// let car = {
//   brand: "Thar",
//   model: "Earth Edition AT",
//   year: 2024,
//   start: function () {
//     console.log("Engine Start");
//   },
// };

//*===================================
//*Interview Question
//*===================================

//! Explain the difference between passing objects by reference and by value in Javascript. Provide an example to demonstrate each scenario.

//? sol: In Javascript, primitive data types like numbers and strings are passed by value, while objects are passed by references.
//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

let a = 10;
const modifyValue = (x) => (x = 20);
console.log(modifyValue(a));
console.log(a);

// 4:29:19

//* ===========================================
//* Math Object in Javascript
//* ===========================================

//* Math: The namespace object contains static properties and methods for mathematical constants and functions.
//* Math works with the number type. It doesn't work with BigInt.

//? 1: Constants:
//* - Math.PI: Represnts the mathematical constant Pi (n).
// const piValue = Math.PI;
// console.log(piValue); // 3.141592653589793

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive

// console.log(Math.abs(5)); //5
// console.log(Math.abs(-3)); //3

//? Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(3.7);
// console.log(roundedValue); //4

//? Math.ceil(x): Returns the value of x rounded up to its nearest integer:
// const ceilValue = Math.ceil(3.7);
// console.log(ceilValue); //4

//? Math.floor(x): Returns the value of x rounded down to its nearest integer:
// const floorValue = Math.floor(3.7);
// console.log(floorValue); // 3

//? Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(3.7);
// console.log(truncValue);

// todo Math.trunc() and Math.sign() were added to Javascript 2015 - ES6.

// const truncValue = Math.trunc(-3.7);
// console.log(truncValue); //-3
// const floorValue = Math.floor(-3.1);
// console.log(floorValue); //-4

// todo Notes:
// No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down.
// ceil always rounds up.

//* ===========================================
//* 3. Exponential and Logarithmic Functions:
//* ===========================================

//? Math.pow(x, y): Returns the value of x to the power of y.
// console.log(Math.pow(2, 3)); //8
// console.log(2 ** 3); // 8

//? Math.sqrt(): Math.sqrt(x) returns the square root of x:
// let squareRoot = Math.sqrt(25);
// console.log(squareRoot); // 5

//? Math.log(x) returns the natural logarithm of x.
// let logResult = Math.log(1); //0
// let logResult = Math.log(2);
// console.log(logResult);

//? Math.log2(x) returns the base 2 logarithm of x.
// let logResult = Math.log2(32);
// console.log(logResult); // 5

//* ===========================================
//* Interview Question
//* ===========================================

//! Generate Random Number

//? Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)

console.log(Math.round(Math.random() * 100).toFixed(3));

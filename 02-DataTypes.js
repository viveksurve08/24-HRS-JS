// Data Types Section: Part - 1
// There are 2 types of Data Types: Primitive and non-Primitive Data Type

// => Data types define the type of values that a variable can hold.

//? Types of primitive Data types.

//? Number: Represents numberic values, including integers and floating-point numbers.
// Example:
// var MyFavNum = 1129;
// console.log(MyFavNum);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
// var myName = "Vivek";
// console.log(myName);

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
// var isRaining = false;
// var areYouAwesome = true;
// console.log(isRaining); // Output: false

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
// var vivek;
// console.log(vivek); //Output: undefined

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
// var badMemories = null;
// console.log(badMemories); //Output: null

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;
// console.log(bigNumber);

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
//const mySymbol: Symbol("Description");

// ! Data types Interview Questions

//? 1: What is the difference between null and undefined in javascript?
// => null: Imagin an Empty Box
//* Explanation: Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.

//? Example: You have a toy box, but if it's null, it means there are no toys inside. It's not that the box is broken; it just doesn't have anything intersting in it right now.

// => undefined: Imagine a Box that wasn't Opened yet
//* Explanation: Now, if we talk about undefined, it's like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or looked to see what's in it.

//? Example: You have a gift box, and until you open it, you don't know what's inside. Right now, it's undefined because you haven't checked or filled it with anything yet.

// Putting It Together
// Summary: So, null is like having an empty box on purpose, and undefined is like having a box you haven't opened yet. Both tell us that there's nothing meaningful or known inside, but they imply different reasons why.

// todo Real-time Comparison: If you have an empty lunchbox (null), it means you decided not to put any food in it. If you have a closed lunchbox (undefined), it means you haven't checked or filled it yet.

//? 2: What is the purpose of typeof operator in Javascript?

// var myName = "Vivek";
// console.log(myName); // Vivek
// console.log(typeof myName); // string

//? 3: What is the result of  `typeof null` in Javascript?
// var badMemories = null;
// console.log(badMemories); //null
// console.log(typeof badMemories); //Object Javascipt bug

//? 4: What are primitive data types in Javascript?
// => 1- String, 2- Number, 3- Boolean, 4- Null, 5- undefined, 6-Symbol, 7-Bigint.

//? 5: Convert a string to a number?
// => We just need to add the "+" sign before the string
// Example:
// var myFavNum = "11";
// console.log(typeof myFavNum); //string
// console.log(typeof +myFavNum); //number using + symbol
// console.log(typeof Number(myFavNum)); //number using Number keyword

//? 6: Convert a number to a string?
// =>  We just need to add an empty string after the number.
//Example:
// let str = 5;
// console.log(typeof str); //number
// console.log(typeof String(str)); //String (using  string constractor)
// console.log(typeof (str + "")); //using +  symbol

//? 7: Explain the concept of truthy and falsy values in Javascript. Provide examples?
//* In Javascript, value are either considered "truthy" or "falsy" when evaluted in a boolean context.

// Truthy values are treated as true when used in conditions. Examples include:
// true
// Any non-empty string ("hello")
// Any non-zero Number(42)
// Arrays and objects, even if they're not empty.

// Falsy values are treated as false in boolean contexts. Examples include:
// false
// 0 (zero)
// "" (an empty string)
// null
// undefined
// NaN (Not a Number)

//? 8: To check if a non-empty string is truthy or falsy in javascript, we can directly use if statement.

// var myName = "Vivek";
// if (myName) {
//   console.log("This is truthy value");
// } else {
//   console.log(" Its a falsy Value");
// }

//===================== Data Types Section End =====================

// todo ===================== todo Bonus =====================

//* ===================== parseInt & parseFloat Section =====================
//? parseInt and parseFloat are both functions in javascript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString);
// console.log(myNumber); //Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); //Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).

// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); //Output: 42.5

//TODO key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encounterd.

//! Here are more examples
// console.log(parseInt("123"));
// // 123 (default base-10)
// console.log(parseInt("123", 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt("  123 "));
// // 123 (whitespace is ignored)
// console.log(parseInt("077"));
// // 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// // 1 (decimal part is truncated)

//! When we will not get an Output
// console.log(parseInt("&123")); //Output: NaN
// console.log(parseInt("-123")); //Output: -123
// console.log(parseInt("xyz")); //Output: NaN
//NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in Javascript?
// => NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function.
// console.log(isNaN("Vivek")); //Output: true
// console.log(isNaN("123")); //Output: false

//! NaN == NaN, why is it false ?
// if (NaN == NaN) {
//   console.log("Both are equal");
// } else {
//   console.log("not equal");
// }

//* ===================== parseInt & parseFloat Section End =====================

// =========================================================>>>>> Data Types Section Part - 2 <<<<<====================================

//* Concatenation in Javascript
//? In Javascript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together.
//? It's important to note that if any operand of the + operator is a string, Javascript will treat the other operands as strings as wll, resulting in string concatenation. Id both operands are numbers, the + operator performs numeric addition

// const str = "Hello " + "World";
// console.log(str); //Output: Hello World

//* Type coercion is the automatic conversion of "values" from one data type to another.
//? It is a fundamental part of Javascript and can be used to make code more readable and efficient.
//? There are two types of coercion in Javascript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.

//! It's worth nathing that type coercion can lead to unexpected results, so it's essential to be aware of how Javascript handles these situations.

//* Tricky Interview Questions
// console.log(10 + "20"); //Output: 1020
// console.log(9 - "5"); //Output: 4
// console.log("Java" + "Script"); //Output: JavaScript
// console.log(" " + " "); //Output:
// console.log(" " + 0); //Output: 0
// console.log("Vivek" - "Surve"); //Output: NaN
// console.log(true + true); //Output: 2
// console.log(true + false); //Output: 1
// console.log(false + true); //Output: 1
// console.log(false - true); //Output: -1

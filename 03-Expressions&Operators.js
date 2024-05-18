//====================>>>>>> Expressions & Operators <<<<<<===================
// =>
//? Expressions: Expression is a combination of values, variables, and operators that computes to a value.
//? In simple word expression is combination of operand and operand its called expression.

// Types of Operators
// 1: Assignment Operators
// 2: Arithemetic Operators
// 3: Comparison Operators
// 4: Logical Operators
// 5: String Operators
// 6: Unary Operators
// 7: Ternary (Conditional) Operators
// 8: Type  Operators
// -------------------------------------------------------------------------------->>>

//* 1: Assignment Operators
// =>  Assignment Operators in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.

// Example:
// var myFavNum = 15;
// Assigns the value 15 to the variable myFavNum

// var myName = "Vivek";

// -------------------------------------------------------------------------------->>>

//* 2: Arithemetic Operators
// => Arithemetic Operators in programming perform basic mathematical operations on variables or values. They include addition, subtraction, multiplication, division, and modulus.

//? Addition (+): Adds two values or variables.
// Example:
// var x = 5;
// var y = 10;
// var sum = x + y;
// console.log(sum); //Output: 15

//? Subtraction (-): Subtracts the right operand drom the left operand.
// Example:
// var p = 10;
// var q = 5;
// var difference = p - q;
// console.log(difference); //Output: 5

//? Multiplication (*): Multiple two values or variables.
// Example:
// var a = 4;
// var b = 6;
// var product = a * b;
// console.log(product); //Output: 24

//? Division (/): Divides the left operand by the right operand.
// Example:
// var m = 15;
// var n = 3;
// var quotient = m / n;
// console.log(quotient); //Output: 5

//? Modulus (%): Returns the remainder when the left operand is divided by the right operand.

// var c = 17;
// var d = 5;
// var remainder = c % d;
// console.log(remainder); //Output: 2

// ! What will be the output ?
// var result = "hello" / 2;
// console.log(result); //Output: NaN

//* Interview Question

//! var result = 0.1 + 0.2; ?
// var result = 0.1 + 0.2;
// console.log(result); //Output: 0.30000000000000004
// console.log(result.toFixed(2)); //Output: 0.30

// When working with floating-point numbers in Javascript, consider using methods like toFixed() when precise decimal representation is necessary.

// var result = 55 * "hello"; ?
// var result = 55 * "hello";
// console.log(result); //Output: NaN

// -------------------------------------------------------------------------------->>>

//* 3: String Operators

//? There are a few waus to concatenate strings in Javascript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

// var str1 = "Hello";
// var str2 = "World";
// var str3 = str1 + str2;
// console.log(str3); //Output: HelloWorld

// console.log("5" + 3); //Output: 53
// console.log("5" - 3); //Output: 2
// console.log("5" * 3); //Output: 15
// console.log("5" / 3); //Output: 1.6666666666666667

// -------------------------------------------------------------------------------->>>

//* 4: Comparison Operators

//? Comparison Operators in Javascript are used to compare values and return a Boolean result (true or false).

//? Equal (==): Checks if two values are equal, performing type coercion if necessary.
// (==) check the value only
// console.log(5 == 5); //Output: ture

// ? Strict Equal (===): Check if two are equal without performing type coercion.
// (===) check the value and data type
// console.log(5 === "5"); //Output: false

// ? Not Equal (!=): Check if two values are not equal, performing type coercion if necessary.
// console.log(5 != 5); //Output: false
// console.log(5 != 6); //Output: true

//? Greater then (>): Checks if the value on the left is greater than the value on the right.
//Example: 10 > 5 evaluates to true.
// console.log(5 > 2); //Output: true

//? Less then (<): Check if the value on the left is less than the valer on the right.
// Example: 5 < 10 evaluates to true.
// console.log(5 < 10); //Output: true
// console.log(5 < "fsfd"); //Output: false

//? Greater then or Equal to (>=): Check if the value on the left is greater than or equal to the value on the right.
// Example: 10 >= 10 evaluates to true.
// console.log(10 >= 10); //Output: true
// console.log(10 >= 12); //Output: false
// console.log(10 <= 10); //Output: ture

//? Less than or Equal to (<=): Checks if the value on the left is less than or equal to the value on the right.
// Example: 5 <= 10 evaluates to true.
// console.log(5 >= 10); //Output: false

//* Interview Question --------------

//! What is the difference between == and === operators in Javascript ?
//? The equality == operator is a comparison operator that compares two values and returns true if they are equal.
//? The strict equality === operator is also a comparison operator, but it compares two values and returns true only if they are equal and of the same type.

// Ex:
// let num1 = 1;
// let num2 = "1";
// if (num1 == num2) {
//   console.log("equal");
// } else {
//   console.log("not equal");
// }
//=> equal

// -------------------------------------------------------------------------------->>>

//* 5: Logical Operators

//* There are three main logical operators: && (logical AND), || (logical OR), and ! (logical NOT).

//? Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
// Example:
// var x = 5;
// var y = 10;
// console.log(x > 0 && y > 0); // true
// console.log(x > 0 && y < 0); // false

// -----------------------------------------------------

//? Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
// Example:
// var a = 15;
// var b = 0;
// console.log(a > 10 || b > 10); //true
// true and true is result ture
// false and true is result ture
// true and false is result ture
// false and false is result false

// -----------------------------------------------------

//? Logical NOT (!): Returns true if the operand is false, and false if the operand is true.
// Example:
// var isOpen = false;
// console.log(!isOpen); //true

//* Inteview Question

//? Combining logical operators allows you to create complex conditions:

//! Q: Write a program that determines if a person is eligible to drive on their age being greater than or equal to 18 and having a valid driver's license?

// var age = 18;
// var hadDrivingLicense = true;

// // age > 18;
// // age == 18;
// console.log(age >= 18 && hadDrivingLicense); //true

//! How would the result change if hadDrivingLicense was set to false?

// var age = 18;
// var hadDrivingLicense = false;

// // age > 18;
// // age == 18;
// console.log(age >= 18 && hadDrivingLicense); // false

// -------------------------------------------------------------------------------->>>

//* 6: Conditional (Ternary) Operators
//* Syntax:     condition ? expressionIfTrue : expressionIfFalse;
// expressionIfTrue : We get the output, If condition is true
// expressionIfFalse : We get the output, If condition is false

// ! Write a program to check if the conditions IsEligibleForDrive or not? Age must be equal to or greater then 18.

// var age = 19;
// var result = age >= 18 ? "Yes " : "No";
// console.log(result); //Yes

//! Q: Let say you have a variable score representing a student's exam score. If the score is greater than or eqaul to 60, the student passes; otherwise, they fail. Use the conditional (ternary) operator to determine the result and store it in a variable called result. Log the result to the console?

// var score = 99;
// var result = score >= 60 ? "Pass" : "Fail";
// console.log(result); //Pass

//* Combined Interview Questions

// console.log("5" - 3); // 2
// console.log(2 < 12 < 5); // ture
// console.log("20" + 10 + 10); // 201010
// console.log("20" - 10 + 10); // 20

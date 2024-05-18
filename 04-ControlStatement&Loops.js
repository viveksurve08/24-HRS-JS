//====================>>>>>> Control Statement & Loops <<<<<<===================

// 1 - If..Else Statement
// 2 - Swich Statement
// 3 - While Loop
// 4 - Do While Loop
// 5 - For Loop
// 6 - For In /For Of Loop (Later in Arrays)

// -------------------------------------------------------------------------------->>> Conditional statement Section

// 1 - If..Else Statement

//? If Else: The if..else statement executes a statement if a specifies condition is truthy. It the condition is falsy, another statement in the opetional else clause will be executed.

// Syntax - If Else
// if (condition) {
//   //Code to be executed if the condition is true
// } else {
//   //Code to be executed if the condition is false
// }

// Example:
// var temp = 40;
// if (temp > 30) {
//   console.log("Let's go to Beach");
// } else {
//   console.log("Watch TV at Home");
// }

//? We can also use an else if clause to check additional conditions:
// var temp = 25;
// if (temp >= 30) {
//   console.log("Let's go to Beach");
// } else if (temp >= 20 && temp > 10) {
//   console.log("Watch TV at Home");
// } else {
//   console.log("Sleep Mood ");
// }

//* Interview Question

//! Requirements:
//? If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote.
//? If the person is younger than 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.
//? If the person is 18 or older but not a citizen, display a message saying they are not eligible due to citizenship status.
//? If the person is 18 or older, a citizen, but not registered to vote, display a message saying they are not eligible due to registration status.
//? Extended voting eligibility checker with additional conditions.

// Assume the user's age, citizenship status, and registration status as inputs

// var userAge = 22;
// var isCitizen = true; //Assume true for citizen, false for non-citizen
// var isRegistered = true; //Assume false for not registered, true for registered

//! Check eligibility using if...else statements with multiple conditions

// if (userAge >= 18) {
//   if (isCitizen) {
//     if (isRegistered) {
//       console.log("You are eligible to vote");
//     } else {
//       console.log("You are not eligible due to registration status");
//     }
//   } else {
//     console.log("You are not eligible due to citizenship status");
//   }
// } else {
//   console.log("You are not eligible to vote");
// }

//* Interview Question
//! 1: Write a program to check if a number is even or odd.
// var num = "6";
// if (num % 2 === 0) {
//   console.log("Num is even");
// } else {
//   console.log("Num is odd");
// }

//! 2: Write a program to check if a number is prime.
//to do Prime numbers are numbers that have only 2 factors: 1 and themselves.
//? All prime numbers greater than 2 are odd.
//? However, not all add numbers are prime.

// var num = 13;
// var isPrime = true;
// for (var i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log("Num is Prime");
// } else {
//   console.log("Num is not Prime");
// }

//! 3: Write a program to check if a number is positive, negative, or zero.
// var num = 12;

// if (num === 0) {
//   console.log("Num is zero");
// } else if (num > 0) {
//   console.log("Num is positive");
// } else {
//   console.log("Num is negative");
// }

// -------------------------------------------------------------------------------->>>

// 2 - Swich Statement
//? Switch Statement: The swich statement is used to perform different actions based on different conditions.
//? Syntax:
// switch (expression) {
//   case value1:
//     // Code  to be executed if expression === value1
//     break;

//   case value2:
//     // Code  to be executed if expression === value2
//     break;

//   //  More cases can be added as needed

//   default:
//   // Code to be executed if none of the cases match
// }

// Toto let's see the example
//! Explain how the switch statement works and what will be the output when the variable day is set to different values.

// var day = "Friday";
// switch (day) {
//   case "Monday":
//     console.log("Today is monday");
//     break;
//   case "Friday":
//     console.log("omg let have party today");
//     break;
//   case "Sunday":
//     console.log("Lets go to movie");
//     break;
//   default:
//     console.log("No Condition match");
// }

//* Challenge time

//! Write a Javascript switch statement that takes a varibale areaOfShapes representing different shapes, and based on its value, calculates and logs the area of the corresponding shape. Consider three shapes: "Rectangle", "Circle", and "Squre". For "Rectangle", use variables a and b as the sides; for "Circle", use a variable r as the radius; and for "Squre", use variable a as the side length. IF the provided shape is not recognized, log a message saying, "Sorry the shape is not available." Test Your switch statement with areaOfShapes set to "Squre" and sides a and b set to 5 and 10, respectively. Ensure that the correct area (25 in this case) is logged to the console.

// var areaOfShapes = "squre";
// var a = 5;
// var b = 10;
// var result;
// switch (areaOfShapes) {
//   case "squre":
//     result = a * a;
//     console.log(result);
//     break;

//   case "rectangle":
//     result = a * b;
//     console.log(result);
//     break;

//   case "circle":
//     var r = 2;
//     result = 3.142 * (r * r);
//     console.log(result);
//     break;
//   default:
//     console.log("No shape matches");
// }

// ! Question: Explain the purpose of the code. What is it calculating based on the values of areaOfShapes, a and b?
//=> The code calculates and logs the area of different shapes (rectangle, circle, squre) bases on the value of the areaOfShapes variable.

//! Question: What will be the output if areaOfShapes is set to "Square" and why?
//=> The Output will be the square of the variable a (25) since the case matches "Square".

//! Question: Why is there a break statement after each case in the switch statement?
// => The break statement is used to exit the switch statement after the corresponding case is executed, preventing fall-through to subsequent cases.

//! Question: If areaOfShapes is set to "Circle". What will be logged to the console, and why is the variable r defined witthin the case block?
// => The output will be the area of a circle with radius r (28.26) since the case matches "Circle," and r is defined within the case block.

//! Question: What will happen if areaOfShapes is set to a shape that is not covered by any of the existing case statements?
// => The default case logs "Sorry, the shape is not available" if areaOfShapes is set to a shape not covered by any existing case.

//! Question: How does the switch statement handle the flow of control based on the value of areaOfShapes?
// => The switch statement evaluates the value of areaOfShapes and executes the code block corresponding to the matching case. The break statements ensure that only the relevant code block is executed.

// -------------------------------------------------------------------------------->>>

// 3 - While Loop

//? While Loop: A while loop in Javascript is a control structure that repeatedly executes a block of code as long as a specified condition remains true. The loop continues iterating while the condition is true, and it terminated when the condition becomes false.

// Syntax
// while (condition) {
//   // Code to be executed as long as the condition is true
// }

//* Simple while loop to count from 1 to 10
// var num = 1;
// while (num <= 10) {
//   console.log(num);
//   num++;
// }

//! Practice
//? Let's create a table of 5

// var num = 1;
// while (num <= 10) {
//   console.log("5* " + num + " = " + 5 * num);
//   num++;
// }

// -------------------------------------------------------------------------------->>>

// 4 - Do While Loop

//? Do...While Loop: A do...while loop in Javascript is simila to a while loop, but it grarantees thet the loop body will be executed at least one before checking the loop condition. The loop continues to execute while the specifies condition is true, and it terminates when the condition becodes false.

// Syntax:
// do {
//   //Code to be executed at least once
// } while (condition);

//* Simple do...while loop to count from 1 to 10

// var num = 1;
// do {
//   console.log(num);
//   num++;
// } while (num <= 10);

//? Common Use Cases:
// When you want to guarantee the execution of the loop body at least once.
// When the number of iterations is not known beforehand, and you want to variable the condition after the first iteration.

//? Example: Validating User Input with a Do...While Loop (user need to write a valid number) 🧑‍💻

// let userInput;
// let positiveNumber;
// do {
//   userInput = prompt("Enter  any positive number");
//   positiveNumber = parseFloat(userInput);
// } while (isNaN(positiveNumber) || positiveNumber < 0);

// console.log("You entered a valid positive number:", positiveNumber);

// -------------------------------------------------------------------------------->>>

// 5 - For Loop

//? For Loop: A for loop in Javascript is a control flow statement that allows you to repeatedly execute a block of code a specified number of times. If's particularly useful when you know the exact number of iterations needed.

// Syntax:
// for (initialization; condition; iteration) {
//   // Code to be executed in each iteration
// }

// Initialization: Executed before the loop starts. Often used to initialize a counter variable.

// Condition: Evaluated before each iteration. If false, the loop terminates.

// Iteration: Executed after each iteration. Typically used to update the loop control variable.

//* Simple for loop to count from 1 to 10

// for (var num = 1; num <= 10; num++) {
//   console.log(num);
// }

//? Kye Point:
// The initialization, condition, and iteration expressions are optional. You can omit any or all of them, but you must include the semicolons.
//* The code for (;;) {} represents an infinite loop in Javascript. This construct is commonly used when you want a loop to run indefinitely or until a break statement is encountered within the loop. It's equivalent to while (true) {}.

//* use case: Game Development:
//? In game development, an infinite loop can be used to continuously update and render game frames until s specific condition (e.g., game over) is met.

// for (;;) {
//   // Update game logic and render frames
// }

// ? Common Use Cases:
// When you know the exact number of iterations needed.
// Iterating over elements in an array.
// Performing a task a specific number of time.

// ! Practice:
//! Calculate the sum of numbers from 1 to 10 using a for loop 🧑‍💻

// var sum = 0;
// for (var num = 1; num <= 10; num++) {
//   var sum = sum + num;
// }
// console.log(sum);

//! Generating a times Table: 🧑‍💻
//! Example 3: Generating a times table of 5 with a for loop.

// for (var num = 1; num <= 10; num++) {
//   console.log("5 * " + num + " = " + 5 * num);
// }

//? More Practice
//! 1: Program to check if a year is a leap year.
// If a year is divisible by 4 and not divisible by 100, or
// If a year is divisible by 400,
// Then if is a leap year. Otherwise, it is not a leap year.

// var year = 2022;
// if ((year % 3 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   console.log(year, "It's a Leap Year");
// } else {
//   console.log(year, "It's not a Leap Year");
// }

//! 2: Drawing Patterns with Asterisks:

for (var i = 1; i <= 5; i++) {
  var pattern = "";
  for (var j = 1; j <= i; j++) {
    pattern = pattern + " *";
  }
  console.log(pattern);
}
// Output:
// *
// * *
// * * *
// * * * *
// * * * * *

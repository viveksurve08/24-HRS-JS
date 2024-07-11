//*============================
//* Scope in Javascript
//*============================

//? Scope in Javascript refers to the context in which variables are declared and accessed. It defines the visibility and lifetime of variables. When a variable is declared, it is bound to a specific scope, and its accessibility is determind by that scope.

//todo We have a Global Scope, Function Scope and Block Scope

//* ==========================
//* Lexical Scoping:
//* ==========================

//? Lexical scoping is a way of managing variable access in Javascript based on the physical structure of the code.

//? Key Concept: The scope of a variable is determind by its position in the source code, specifically where it is declared.

//? Lexical scoping in Javascript is like a set of rules that determines where a variable can be used in your code. It follows the physical structure of your code, so if a variable is declared inside a function or block, it can usually be used only within that function or block.

// var a = 5;
// var b = 10;
// // what will be the value of a?

//* ==========================
//* Scope Chaining:
//* ==========================

//? Definition: Scope chaining is the process by which Javascript, when looking for the value of a variable, checks the current scope and then looks in the outer (enclosing) scopes until it finds the variable or reaches the global scope.

//todo Key Concept: variables in inner scopes have access to variables in their outer scopes, creating a chain of accessible scopes.

//* Global Scope:
//? Variables: Variables declared outside of any function or block have global scope.
//? Access: Global variables are accessible from any part of the code, including inside functions and bloacks.

// var globalVariable = "I am a global variable";

// function exampleFunction() {
//   console.log(globalVariable); //Accessible within the function
// }
// console.log(globalVariable); // Accessible globally

//* Function Scope:
// Variables: Variables declared inside a function have function scope.
// Access: Function-scoped variables are only accessible within the function where they are declared.

function exampleFunction() {
  var functionScopeVar = "I'm a function-scoped variable";
  console.log(functionScopeVar); //Accesible within the function
} 

// ===============================================================================================

//! Global Variable vs. Local Variable:
//? Global Variable: A variable declared in the global scope is referred to as a global variable. It has global visibility and can be accessed from anywhere in the code.

//? Local Variable: A variable declared within a function (function scope) or a block (block scope) is often referred to as a local variable. It has local visibility, limited to the function or block where it's declared.

// const globalVariable = "I'm a global variable";

// function myFunction() {
//   // Function Scope
//   const functionVariable = "I'm a function variable";

//   if (true) {
//     // Block scope
//     const blockVariable = "I'm a block variable";
//     console.log(blockVariable); // I'm a block variable
//     console.log(functionVariable); // I'm a function variable
//     console.log(globalVariable); // I'm a global variable
//   }
//   console.log(blockVariable); // ReferenceError: blockVariable is not defined
// }

// myFunction();

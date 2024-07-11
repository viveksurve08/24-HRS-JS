//? Hoisting is a Javascript mechanism where variable and function declarations are moved to the top of their scope before code execution. This means that no matter where functions and variables are declared, they are moved to the top of thier scope regarless of whether thier scope is global or local.

// todo When a function declaration is hoisted, its entire definition (including the boby) is moved to the top of its containing scope during the creation phase. This means that you can calll the function before it's actually declared in the code, and it will still work as expected.

console.log(myVar);
greet();

var myVar = 10;
function greet() {
  console.log("Welcome, If you are reading this, Don't forget you are awesome");
}

//* ========================================================
//* LocalStorage
//* ========================================================

//? The localStorage object allows you to save key/value pairs in the browser.

// How to add the data from localStorage
// localStorage.setItem("jsCourseTest", "addingData");

// How to get the data from localStorage
// localStorage.getItem("Radha Krishna");

// How to remove the data from localStorage
// localStorage.removeItem("Radha Krishna");

// Todo Local Storage can only store strings, so when you want to store a complex data structure like an array or an object, you need to convert it to a string using JSON.stringfy:

//* JSON.stringfy: Converts a Javascript object into a JSON string.
// Useful when you want to send data to a server or store it in a text file, as JSON is a common data interchange format.
// const data = { name: "Vivek", age: 25, city: "pune" };
// const jsonString = JSON.stringify(data);
// console.log(jsonString); // {"name":"Vivek","age":25,"city":"pune"}

//* JSON.parse: Converts a JSON string into a Javascript Object.
// Useful when you receive JSON data from a server or read it a file, and you want to work with it as a Javascript object.

const jsonString = '{"name": "Vivek", "age": 25, "city": "Pune"}';
const parseData = JSON.parse(jsonString);
console.log(parseData); // { name: 'Vivek', age: 25, city: 'Pune' }

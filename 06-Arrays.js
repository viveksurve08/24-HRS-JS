//* ===========================================
//* ARRAYS IN JAVASCRIPT
//* ===========================================
//! Iterable - object where you can use the for-of loop

//! Array-like object -  Any object length property and use indexes to access items

//! Arryas as Objects: Arrays in Javascript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.

//! typeof Operator: The typeof operator in Javascript returns "object" for both arrays and regular objets.

//* Javascript Array is a data structure that aloows you to store  and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in javascript are zero-indexed i.e the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ===========================================
//* Creating Arrays:
//* ===========================================
//? Arrays in Javascipt can be created using the Arrays constructor or with array literals (square brackets []).

//? Using Array constructor
// let fruits = new Array("Apple", "orange", "banana");
// console.log(fruits);

//? Using array literal
// let fruits = ["Apple", "orange", "banana"];
// console.log(fruits);

//? We can also create an empty array
// let arr = [];
// console.log(typeof arr); //object

//* ===========================================
//* Accessing Elements:
//* ===========================================

//? Accessing Elements: Array elements are accessed using zero-based indices.
// let fruits = ["Apple", "Orange", "Banana", 1];
// console.log(fruits[1]);

//* ===========================================
//* Modifying Elements:
//* ===========================================

//? Modifying Elements: You can modify array elements by assigning new values to specific indices.

// let fruits = ["Apple", "orange", "banana"];
// fruits[2] = "Mango";
// console.log(fruits);

//* ===========================================
//* Array Traversal / Iterating Over Arrays
//* ===========================================

//? Array Traversal / Iterating Over Arrays

// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"];

//? 1: for of loop, also known as iterable
//* for...of loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// Using for...of loop
// for (let item of fruits) {
//   console.log(item);
// }

// Using for loop
// for (let item = 0; item < fruits.length; item++) {
//   console.log(fruits[item]);
// }

//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// for (let item in fruits) {
//   console.log(item);
// }

//? 3: forEach Method
// => The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// 1st Ex:
// fruits.forEach((curElem, index, arr) => {
//   console.log(`${curElem} ${index}`);
//   // console.log(arr);
// });

// 2nd Ex:
// const myForEachArr = fruits.forEach((curElem, index, arr) => {
//   return `${curElem} ${index}`;
//   // console.log(arr);
// });
// console.log(myForEachArr);

//? 4: map Function
// => map() creates a new array from calling a function for every array element. map() does not change the original array.

// 1st Ex:
// fruits.map((curElem, index, arr) => {
//   // console.log(`${curElem} ${index}`);
//   console.log(arr);
// });

// 2nd Ex:
// const myMapArr = fruits.map((curElem, index, arr) => {
//   return `My fav fruit is ${curElem}`;
//   // console.log(arr);
// });
// console.log(myMapArr);
// console.log(fruits); //[ 'Apple', 'Orange', 'Mango', 'Grapes', 'Banana' ]

//todo Practice Time
//! Write a program to Multiply each element with 2

// const numbers = [1, 2, 3, 4, 5];
// forEach - Performs an action on each element //return undefined
// numbers.forEach((curElem) => {
//   console.log(curElem * 2);
// });

// map - Creates a new array with transformes elements // return new array
// const doubleValue = numbers.map((curElem) => {
//   return curElem * 2;
// });
// console.log(doubleValue); //[ 2, 4, 6, 8, 10 ]

//* Key Differences

//! Return Value:

//? forEach: It doesn't return a value. The forEach method is used for iterating over the elements of an array and performing a side effect, such as modifying the array or performing a task for each element.

//? map: It returns a new array containing the results of applying a function to each element in the original array. The original array remains unchanged.

//! Chaining:

//? forEach: It doesn't return a value, so it cannot be directly chained with other array methods.

//? Map: Since it returns a new array, you can chain other array methods after using map.

//* Use Case:
//? forEach: Used when you want to iterate over the array elements and perform an action on each element, but you don't need a new array.

//? map: used when you want to create a new array based on the transformation of each element in the original array.

//* =======================================================================
//* How to Insert, Add, Replace and Delete Elements in Array (CRUD) - P1
//* =======================================================================

//? How to Insert, Add, Replace and Delete Elements in Array (CRUD)
// let fruits = ["Apple", "Orange", "Mango", "Grapes", "Banana"];

//? 1: push(): Method that adds one or more elements to the end of an array.
// console.log(fruits.push("Gauva")); // 6 //👉🏻 return the arr new length
// console.log(fruits); //[ 'Apple', 'Orange', 'Mango', 'Grapes', 'Banana', 'Gauva' ]

//? 2: pop(): Method that removes thelast element from an array.
// console.log(fruits.pop()); //Gauva //👉🏻 Return the deleted element
// console.log(fruits); //[ 'Apple', 'Orange', 'Mango', 'Grapes', 'Banana' ]

//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// console.log(fruits.unshift("Guava")); // 6 //👉🏻 return the arr new length
// console.log(fruits); // [ 'Guava', 'Apple', 'Orange', 'Mango', 'Grapes', 'Banana' ]

//? 4: shift(): Method that removes the first element from an array.
// console.log(fruits.shift()); //Gauva //👉🏻 Return the deleted element
// console.log(fruits); //[ 'Apple', 'Orange', 'Mango', 'Grapes', 'Banana' ]

//* ===============================================================
//* What if, we want to add or remove anywhere in an elements - P2
//* ===============================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* Syntax:
//? splice(start, deleteCount, item1, item2, /* ..., */ itemN);
// let fruits = ["Apple", "Orange", "Mango", "Banana"];
// console.log(fruits.splice(1, 1, "Grapes")); //[ 'Orange' ]
// console.log(fruits); // [ 'Apple', 'Grapes', 'Mango', 'Banana' ]

//! What if you want to add the element at the end
// fruits.splice(-1, 0, "Grapes");
// fruits.splice(fruits.length, 0, "Grapes");
// console.log(fruits); // [ 'Apple', 'Orange', 'Mango', 'Banana', 'Grapes' ]

//* ===============================================================
//* Searching in an Array
//* ===============================================================

//?👉🏻 Searching and filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? 1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);
// console.log(numbers.indexOf(4)); //3
// console.log(numbers.indexOf(4, 5)); //-1

//? 2: lastIndexOf Method: ThelastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it in not present. The array is searched beackwards, starting at fromIndex.

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// // const result = numbers.indexOf(6);
// // console.log(result); // 3
// // const result1 = numbers.lastIndexOf(6);
// // console.log(result1); // 6
// const result = numbers.lastIndexOf(7, 4);
// console.log(result); // -1

//? 3: include Method: The includes method check wherher an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement);
// includes(searchElement, fromIndex);

// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];
// const result = numbers.includes(6);
// console.log(result); //true

// todo Challenge time
// const months = ["Jan", "march", "April", "June", "July"];
//? 1: Add Dec at the end of the array?

// months.splice(months.length, 0, "Dec");
// console.log(months);  // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]

//? 2: What is the return value of splice method?
// When used to add elements, the splice method returns an empty array ([]).

//? 3: Update march to March (update)?
// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate, 1, "March");
// console.log(indexToUpdate); // 1
// console.log(months); //  [ 'Jan', 'March', 'April', 'June', 'July' ]

//? 4: Delete June from an array?

// const indexToDelete = months.indexOf("June");
// months.splice(indexToDelete, 1);
// console.log(months); // [ 'Jan', 'march', 'April', 'July' ]

//* ===============================================================
//*  Filter in an Array
//* ===============================================================

//? Search + Filter

//? 1: find Method: The find method is used to find the first elemenet in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// const result = numbers.find((curElem) => {
//   return curElem > 5;
// });
// console.log(typeof result);

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// const result1 = numbers.map((curElem) => curElem * 5);
// console.log(result1);
// const result = result1.findIndex((curElem) => {
//   return curElem > 15;
// });
// console.log(result);

//? 3: filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// Syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const result = numbers.filter((curElem) => {
//   return curElem > 4;
// });
// console.log(result);

// UseCase: In E-Commerce website when we want to Remove or delete any product from addToCart page.
//! Ex: Let's say user wants to delete value 6.
// let value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let updatedCart = numbers.filter((curElem) => {
//   return curElem !== value;
// });
// console.log(updatedCart);

// Practice time
//! Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

//Filter products with a proce less than or equal to 500

// const filterProducts = products.filter((curElem) => {
//   //   console.log(curElem.price <= 500);
//   return curElem.price <= 500;
// });

// console.log(filterProducts);

//! Filter unique values
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let uniqueValues = numbers.filter((curElem, index, arr) => {
//   //   console.log(index);
//   //   console.log(arr.indexOf(curElem));
//   return arr.indexOf(curElem) === index;
// });
// console.log(uniqueValues);
// new Method
// console.log([...new Set(numbers)]);

//* ===========================================
//* How to Sort and Compare an Array
//* ===========================================

//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in placeand returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Mango', 'Orange' ]

// const numbers = [1, 2, 4, 3, 6, 5, 6, 7, 4, 8, 9];

//? Compare callback function
// Synatx:
// const sortedNumbers = numbers.sort((a, b) => a - b);
// if (a > b) return 1; //=> switch the order
// if (b > a) return -1; //=> keep the order

// numbers.sort((a, b) => {
//   // For ascending order
//   //   if (a > b) return 1;
//   //   if (b > a) return -1;
//   // For Descending order
//   if (a > b) return -1;
//   if (b > a) return 1;
// });
// console.log(numbers);

//? For ascending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (b > a) {
//     return -1;
//   }
// });
// console.log(sortedNumbers);

//? For Descending order
// const sortedNumbers = numbers.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   } else if (b > a) {
//     return 1;
//   }
// });
// console.log(sortedNumbers);

//* ===========================================
//* Very Important Array Methods
//* ===========================================

//? Map(), filter(), reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// Using map to squre each number and create a new array
// const numbers = [1, 2, 3, 4, 5];
// let result = numbers.map((curElem) => curElem * curElem);
// console.log(result);

//? 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// original array of strings
// const words = ["apple", "banana", "cherry", "date"];
// const result = words.map((curElem) => {
//   return curElem.toUpperCase();
// });
// console.log(result); // [ 'APPLE', 'BANANA', 'CHERRY', 'DATE' ]

//? 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's even number.

//Original array of numbers
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers
//   .map((curElem) => {
//     if (curElem % 2 === 0) {
//       return curElem * curElem;
//     }
//   })
//   .filter((curElem) => curElem !== undefined);
// console.log(result);

// const evenSquare = numbers
//   .map((curNum) => (curNum % 2 === 0 ? curNum * curNum : undefined))
//   .filter((curElem) => curElem !== undefined);
// console.log(evenSquare);

//? 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
// const names = ["Krishna", "Ram", "Laxman"];
// const prefixName = names.map((curName) => `Mr.${curName}`);
// console.log(prefixName); //[ 'Mr.Krishna', 'Mr.Ram', 'Mr.Laxman' ]

//? Reduce Method
// The reduce method in Javascript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// Syntax:
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your Logic here
//   //   Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index(optional): The index of the current element being processed.
// array(optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.

const productPrice = [100, 200, 300, 400, 500];
const totalPrice = productPrice.reduce((accum, curElem) => {
  return accum + curElem;
}, 0);
console.log(totalPrice); // 1500

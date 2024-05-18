//* ===========================================
//* String in Javascript
//* ===========================================

//? String in Javascript are a fundamental data type that represents a sequence of characters.

// Note:
// Strings created with single and double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Properties that returns the length of the string (numbers of characters).

// const str = "Radha Krishna";
// console.log(str.length);
// including space n all

//* ===========================================
//* Escape Character
//* ===========================================

//? Escape Character: In JavaScript, the backslach \ is used as an escape character. It allows you to include special characters in a string.

// Code      Result      Description
// \'          '        Single quote
// \"          "        Double quote
// \\          \        Backslash

// let text = "My name is "VivEk" & I am a Full Stack Developer.";
// let text = "My name is 'VivEk' & I am a Full Stack Developer.";
// let text = "My name is 'VivEk' & \n I am a \"Full Stack\" Developer.";
// console.log(text);

//* ===========================================
//* String Search Methods
//* ===========================================

//? 2: String Search Methods

//? a: indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.
// Syntax:
// indexOf(searchString)
// indexOf(searchString, position)

// let text = "Radha Krishn";
// // console.log(text.indexOf("r")); //7

// let strArr = Array.from(text);
// // console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

//? b: lastIndexOf(): The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// Syntax:
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello Javascript, Welcome to our world best Javascript course";
// let index = text.lastIndexOf("Javascript");
// console.log(index); // 44
// let index = text.lastIndexOf("Javascript", 40);
// console.log(index); // 6

//? c: search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.

//* Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";
// let result = text.search(/Javascript/g); //globally
// let result = text.search(/JavaScript/i);
// console.log(result);

//*👉🏻 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value

//? match(): Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";
// let result = text.match("Javascript");
// console.log(result); //null
// let result = text.match("JavaScript");
// console.log(result);
//todo here the js converts the normal the text into regular expression text.match(/JavaScript/); without the g flag
// let result = text.match(/Javascript/gi);
// console.log(result); // [ 'JavaScript', 'JavaScript' ]

//? matchAll(): Returns an interator of all matches, providing detailed information about each match. Returns an empty interator if no match is found.

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";

// let matchResult = text.matchAll("Javascript");

// console.log(matchResult); // Object [RegExp String Iterator] {}
// let matchResult = text.matchAll("JavaScript");
// todo here the js converts the normal text into regular expression text.matchAll(/JavaScript/g); also adds the g flag at the end

// console.log(...matchResult);

// for (let item of matchResult) {
//   console.log(item[0]);
// }

// for (let index of matchResult) {
//   console.log(index.index);
// }

// for (let { index } of matchResult) {
//   console.log(index);
// }

//? includes(): Returns true if the string contains the specified value, and false otherwise.

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";

// let includeResult = text.includes(/java/i); // TypeError: First argument to String.prototype.includes must not be a regular expression
// let includeResult = text.includes("Java"); //true
// let includeResult = text.includes("Javac"); // false
// console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startWith(): The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";

// let result = text.startsWith("Welcome"); // false
// let result = text.startsWith("Hello"); // true
// console.log(result);

//* Start position for the search can be specified
// let result = text.startsWith("Welcome", 18); // true
// let result = text.startsWith("Welcome", 17); // false
// console.log(result);

//? endsWith(): The endsWith() returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";
// // let result = text.endsWith("welcome"); //false
// let result = text.endsWith("course"); //true
// console.log(result);

//* ===========================================
//* Extracting String Parts:
//* ===========================================

//! Extracting String Parts:

//? String.prototype.substr() it is deprecated ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// Syntax:
// slice(start, end)

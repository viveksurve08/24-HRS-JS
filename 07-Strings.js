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

// 1: Javascript count positions from zero.
// 2: slice() extracts up to but not including indexEnd.

// Syntax:
// slice(start, end);

// Todo Javascript counts positions from zero.
//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";

// let result = text.slice(6); // JavaScript, Welcome to our world best JavaScript course
// let result = text.slice(6, 15); // JavaScrip
// let result = text.slice(-6); // course
// console.log(result);

//? a: substring: Extracts a portion of the string based on starting and ending indices.

//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// Syntax:
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd);

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";

// let result = text.substring(12); // ript, Welcome to our world best JavaScript course
// let result = text.substring(1, 4); // ell
// let result = text.substring(-6); // Hello JavaScript, Welcome to our world best JavaScript course
// console.log(result);

//! Similarities

// todo: In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.

//* ===========================================
//* Interview Question
//* ===========================================

//! What is the output for the following code?

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);

//? Optional
// let result = text.replace("JavaScript", "VS");
// let result = text.replaceAll("JavaScript", "VS");
// console.log(result);

//* ===========================================
//* Extracting String Characters
//* ===========================================

//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? chartAt(): The charAt() method returns the character at a specified index (position) in a string
// 1: Javascript counts positions from zero.

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";
// // let result = text.charAt(6); // J
// let result = text.charAt(-6);
// console.log(result);

//? charCodeAt(): The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";
// // let result = text.charCodeAt(6); // 74
// let result = text.charCodeAt(-6); //NaN
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as charAt().

// let text = "Hello JavaScript, Welcome to our world best JavaScript course";
// // let result = text.at(-6); // c
// let result = text.at(8); // v
// console.log(result);

// Note
// The at() method is a new addition to Javascript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

//* ===========================================
//* Replacing String Content:
//* ===========================================

//! Replacing String Content:
// replace(): The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/i, "VS");
// console.log(replacedString);

//* ===========================================
//* Other Useful Methods:
//* ===========================================

//! Other Useful Methods:

//? toupperCase and toLowerCase: Converts the string to uppercase or lowercase.

// const str = "JavaScript";
// console.log(str.toUpperCase()); // JAVASCRIPT
// console.log(str.toLowerCase()); // javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "    Hello, World!  ";
// console.log(str.length); //19
// console.log(str.trim()); // Hello, World!
// let trimstr = str.trim();
// console.log(trimstr.length); // 13

//? split: Splits the string into an array of substrings based on a specified delimiter.
// const str = "apple,orange,banana";
// // let strArr = str.split(",");
// // console.log(strArr); // [ 'apple', 'orange', 'banana' ]

// let strArr = str.split(",").reverse().join();
// console.log(strArr);

//* ===========================================
//* //! Interview Questions
//* ===========================================

//! 1: Write a Javascript function that prints the letters "a" through "z" in the console. You should use a loop to iterate through the letters and print each one on a new line.
// console.log("a".charCodeAt(0)); // 97
// console.log("z".charCodeAt(0)); // 122
// console.log(String.fromCharCode(122));

// for (let char = 97; char <= 122; char++) {
//   console.log(`${String.fromCharCode(char)} CharCode: ${char}`);
// }

//! 2: Write a function to count the number of vowels in a string?

// console.log(countVowels("Hello world"));

//! 3: Write a function to check if all the vowels presents in a string or not?

const checkAllVowelPresentOrNot = (str) => {
  const vowels = "aeiou";
  for (let char of vowels) {
    // console.log(char);
    // console.log(str.includes(char));

    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
};

console.log(checkAllVowelPresentOrNot("My name is vivek @ surve"));

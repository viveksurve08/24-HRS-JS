//* =====================================
//* ECMAScript Features (2021) / ES12
//* =====================================

//? List of new useful features added in ES8 👇🏻

// String.prototype.replaceAll()
// Logical Assignment Operators (||=, &&=, ??=)
// Numeric Separators
// Promise.any()

//* =====================================
//* String.prototype.replaceAll()
//* =====================================
//? replaceAll in Javascript is a function that replaces all occurrences of specified value with another value in a given string.

//? Replacing all occurrences of a word:
// const originalString = "Hello, world! Hello again.";
// const newString = originalString.replaceAll("Hello", "Hi");
// console.log(newString);

//? Replacing multiple spaces with a single space:
// const text = "This    has   extra   spaces.";
// const normalizedText = text.replaceAll(/\s+/g, " ");
// console.log(normalizedText);

//* ==============================================
//* Logical Assignment Operators (||=, &&=, ??=)
//* ==============================================

//? Logical OR-Assignment (||=): This Operators assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a falsy value (false, null, undefined, 0, '', NaN). Otherwise, it leaves the left-hand operand unchanged.

// let x = false;
// x ||= true; // equivalent to: x=x || true;
// console.log(x); // true

// let y = 10;
// y ||= 20; // equivalent to: y=y || 20;
// console.log(y); // 10 (unchanged)

//? Logical AND-Assignment (&&=): The Operators assigns the value of its right-hand operand to its left-hand operand if the left-hand operand evaluates to a truthy value. Otherwis, it leaves the left-hand operand unchanged.

// let x = true;
// x &&= false; // equivalent to: x=x &&|| false;
// console.log(x); // false

// let y = 10;
// y &&= 20; // equivalent to: y=y && 20;
// console.log(y); // 20 (unchanged)

//* ====================
//* Numeric Separators
//* ====================

//? This feature allows underscores (_) to be used as Separators within numeric literals to improve readability.

const bigNumber = 1_000_000;
console.log(bigNumber); // 1000000

//* ====================
//* Promise.any()
//* ====================

//? Promise.any(): 

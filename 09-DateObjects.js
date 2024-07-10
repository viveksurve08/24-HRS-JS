//* ========================================================
//* DateObjects
//* ========================================================

//? Date() constructor: The Date() constructor creates Date Objects. When called as a function, it returns a string representing the current time.

// Create a Date Object:

// Syntax
// new Date()
// new Date(date string)

//? You can create a new Date object using the new keyword. It can be done in several ways:
// 9 ways to create a new Date Objects
// new Date()
// new Date(date string)
// new Date(year, month)
// new Date(year, month, day)
// new Date(year, month, day, hours)
// new Date(year, month, day, hours, minutes)
// new Date(year, month, day, hours, minutes, seconds)
// new Date(year, month, day, hours, minutes, seconds, ms)
// new Date(year, month, day, hours, minutes, seconds, ms)
// new Date(milliseconds)

//? Current date and time
//? new Date(): Create a Date object representing the current date and time.
// const currentDate = new Date();
// console.log(currentDate);
//? Output: 2022-07-24T14:30:00.000Z
// todo This is the ISO 8601 format, which is a standard for representing dates and times. In this format, the date time are represented together, separated by the letter "T". The "Z" at the end indicates that the time is in UTC (Coordinated Universal Time).

// But same when you run on brower it will return more human-readable format.

//? 2: new Date(dataString):  Create a Date object based on the provided date string.
// const dateString = "2024-06-08T19:28:08.706Z";
// const dateFromString = new Date(dateString);
// console.log(dateFromString);

//? 3: new Date(year, month): Create a Date onject with the specified year and month.
// const date1 = new Date(2024, 6);
// console.log(date1);

//? 4: new Date(year, month, day): Create a Date object with the specified year, month, and day.
// const date2 = new Date(2024, 1, 19);
// console.log(date2);

//? 5: new Date(year, month, day, hours): Create a Date object with the specified year, month, say, and hours.
// const date3 = new Date(2024, 1, 19, 10);
// console.log(date3);

//? 6: new Date(year, month, day, hours, minutes): Create a Date object with the specified year, month, day, hours, and minutes.
// const date4 = new Date(2024, 1, 19, 10, 44);
// console.log(date4);

//? 7: new Date(year, month, day, hours, minutes, seconds): Create a Date object with the specified year, month, day, hours, minutes, and seconds.
// const date5 = new Date(2024, 1, 19, 10, 44, 9)
// console.log(date5);

//? 8: new Date(year, month, day, hours, minutes, seconds, ms): Create a Date object with the specified year, month, day, hours, minutes, seconds, and milliseconds.
// const date6 = new Date(2024, 1, 19, 10, 44, 9, 274);
// console.log(date6);

//? 9: new Date(milliseconds): Creates a Date object representing the number of milliseconds since the unixepoch (January 1, 1970, 00:00:00  UTC).
// const curMilliSeconds = new Date().getDate();
// const mulliSeocnds = 16320690883;
// const dateFromMilliSeconds = new Date(curMilliSeconds);
// console.log(dateFromMilliSeconds);

//todo Note:
//? 1: Javascript counts months from 0 to 11:
//? January = 0, December = 11

//? 2: Javascript Stores Dates as Milliseconds: Javascript stores dates as number of milliseconds since January 01, 1970.

//* Date String Format: If the dateString is in a recognizable format, the Date object will be created accordingly.
//? new Date(date string) create a date object from a date string
// const date1 = new Date('2024-01-05'); //Year-Month-Day
// const date2 = new Date('January 5,2024'); //Month Day, Year
// console.log(date1);
// console.log(date2);

//* ========================================================
//* Javascript Get Date Methods / Getting Components:
//* ========================================================

// You can get various components of a date using the methods of the Date objects
// const currentDate = new Date();
// console.log(currentDate);
// In a date object, the time is static.
// const year = currentDate.getFullYear();
// console.log(year);
// const month = currentDate.getMonth(); // 0-based index
// console.log(month);
// const date = currentDate.getDate();
// console.log(date);
// const day = currentDate.getDay();
// console.log(day);
// In Javascript, the first day of the week (day 0) is Sunday.
// Day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)

//* ========================================================
//* Javascript Set Date Methods / Setting Components:
//* ========================================================

// const date = new Date();
// console.log(date);
// //? setFullYear(yearValue[ , monthValue[ , dayValue]]);
// // Set the full year for a specified date according to local time.
// date.setFullYear(2025);
// console.log(date); // Date object with the year set to 2025

//? setMonth(monthValue[ , dayValue]): Sets the month for a specified date according to local time.
// date.setMonth(5); // June (Months are zero-based)
// console.log(date); //Date object with the month set to June

//? setDate(dayValue): Sets the day of the month for a specified date accourding to local time.
// date.setDate(16);
// console.log(date); // Date object with the day of the month set to 15

//* ========================================================
//* JavaScript Get Time Methods / Getting Components:
//* ========================================================
// const currentTime = new Date();

// const hours = currentTime.getHours();
// console.log(hours);
// const minutes = currentTime.getMinutes();
// console.log(minutes);
// const seconds = currentTime.getSeconds();
// console.log(seconds);
// const time = currentTime.getTime();
// console.log(time);

//* ========================================================
//* Javascript Set Time Methods / Getting Components:
//* ========================================================

// const date = new Date();

//? setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]): Set the hours for a specified date according to local time.
// date.setHours(10);
// console.log(date); // Date object with the hours set to 10

//? setMinutes(minuteValue[, secondValue[, millisecondValue]]): Set the minutes for a specified date according to local time.
// date.setMinutes(30);
// console.log(date); // Date object with the minutes set to 30

//? setSeconds( secondValue[, millisecondValue]): Set the seconds for a specified date according to local time.
// date.setSeconds(45);
// console.log(date); // Date object with the seconds set to 45

//? setMilliseconds(millisecondValue): Set the milliseconds for a specified date according to local time.
// date.setMilliseconds(500);
// console.log(date); // Date object with the milliseconds set to 500

//? setTime(timeValue): Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
// date.setTime(1632090690883);
// console.log(date); // Date object representing the specified time.

//* ========================================================
//* A few useful method of the Date object in Javascript
//* ========================================================

//? 1: toLocalString(); Returns a string representing the date and time portion of a Date object using the current locale's conventions.
// const date = new Date();
// const localString = date.toLocaleString();
// console.log(localString); // Example output: "17/6/2024, 1:15:50 am" (depending on the locale)

//? 2: toLocaleDateString(): Returns a string representing the date portion of a Date object using the current locale's conventions.
// const date =new Date();
// const localDateString=date.toLocaleDateString();
// console.log(localDateString); // Example Output: "17/6/2024" (depending on the locale)

//? 3: toLocaleTimeString(): Returns a string representing the time portion of a Date object using the current locale's conventions.
// const date = new Date();
// const localTimeString = date.toLocaleTimeString();
// console.log(localTimeString); // Example output: "1:24:55 am" (depending on the locale)

//? 4: parse(): Parses a  string representation of a date and time, and returns the number of milliseconds since January 1,  1970, 00:00:00 UTC. (Note: This method is static, so it's called on the Date object itself, not on an instance of Date.)
// const dateString = "2024-02-19T16:30:00Z";
// const parseDate = Date.parse(dateString);
// console.log(parseDate); // Example output: 1708360200000 (milliseconds)

//* ==================
//* //* Bonus
//* ==================
// let newDate = new Date();
// console.log(Date.now());

// Date.now() is a static method of the Date Object.
// Use Date.now() if you want the timestamp right this second.
// If returns the current timestamp (number of milliseconds) representing the current moment.
// Use new Date().getTime() if you have an existing Date object from elsewhere and want its timestamp.

// ! ================================
// ! Interview Questions
// ! ================================

// ! 1: Write a function to add a specified number of days to a given date.
// const addDaysToDate = (date, extraDay) => {
//   //   console.log(date);
//   //   console.log(date.setDate(date.getDate() + extraDay));
//   //   console.log(new Date(1719705600000));

//   let updatedDate = date.setDate(date.getDate() + extraDay);
//   return new Date(updatedDate);
// };

// // Example usage:
// const date = new Date("2024-06-23");
// const newDate = addDaysToDate(date, 7);
// // console.log(newDate);
// console.log(newDate.toLocaleDateString()); //30/6/2024

//! Question: Write a function to calculate the difference in days between two given dates.

// const getDaysDifference = (d1, d2) => {
//   let oneDay = 24 * 60 * 60 * 1000;
//   let diff = Math.abs(d2 - d1);
//   return Math.round(diff / oneDay);
// };

// // Example usage:
// const date1 = new Date("2024-02-19");
// const date2 = new Date("2024-03-01");
// console.log(getDaysDifference(date1, date2)); //Output: 11 (difference in days)

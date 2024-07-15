let dt = 1721023753;
const curDate = new Date(dt * 1000); //convert seconds to milliseconds
console.log(curDate);

// const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  //   second: "numeric",
};

const formatter = new Intl.DateTimeFormat("en-US", options);
console.log(formatter);
const formattedDate = formatter.format(curDate);
console.log(formattedDate);

return formattedDate;

// let num = 3232.552;
// console.log(num.toFixed());
// console.log(Math.round(num));

// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
let x = 12;
let y = 13;

console.log(typeof x.toString());
console.log(typeof y.toString());

document.getElementById("result").innerHTML = typeof x.toString();

// Write a JavaScript program to convert a string to the number.

let a = parseInt("1.00");
let b = parseInt("100");

console.log(typeof a);
console.log(typeof b);
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String

if (typeof a === "boolean") {
  console.log("Boolean");
} else if (typeof a === "number") {
  console.log("Number");
} else if (typeof a === "null") {
  console.log("Null");
} else if (typeof a === "undefined") {
  console.log("Undefined");
} else if (typeof a === "NaN") {
  console.log("NaN");
} else {
  console.log("String");
}

// Write a JavaScript program that adds 2 numbers together.
function add() {
  let result = a + b;
  return result;
}
console.log(add());

// Write a JavaScript program that runs only when 2 things are true.

// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a JavaScript program that runs when both things are not true.

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
function noRefresh() {
  event.preventDefault();
}

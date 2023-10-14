// console.log("Js function");
// //code block

// function run() {
//   let x = 4; //statement
//   let y = 10;
//   console.log(x + y);
// }
// run();

// function stars() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   return "this is stars";
//   console.log("* * * *");//not working
// }

// stars(); //if return not include result undefined

// function helo(text = "*") //parameter{
//
//   console.log(`${text}`);
//   console.log(`${text} ${text}`);
//   console.log(`${text} ${text} ${text}`);
// }
// helo("-"); //arguments
// helo("$");
// helo("%");
// helo();

// //tax calculation 5% amount
// //(amount/100)*5  //5% tax
// //(amount/100)*10 //10% tax

// function calcTax(amount, taxpercentage = 5) {
//   let tax = (amount / 100) * taxpercentage;
//   return tax;
// }
// console.log(calcTax(10000));
// console.log(calcTax(10000,10));

// const results = [];
// let resultIndex = 0;

// function calcArea(w, b) {
//   // return `${w} * ${b} = ${w * b} sqft`;
//   let area = w * b;
//   const result = {
//     width: w + "ft",
//     breadth: b + "ft",
//     area: area + "sqft",
//   };
//   results[resultIndex++] = result;
//   return result;
// }

// console.log(calcArea(2, 3));
// console.log(calcArea(4, 3));
// console.log(calcArea(10, 3));

// console.table(results);

const rates = {
  USD: 2100,
  SGD: 1579,
  EUR: 2335,
};
// console.log(rates.USD);
// console.log(rates["EUR"]);
function toMMK(amount, currency) {
  let exchangeRate = rates[currency];
  return `${amount * exchangeRate} MMK`;
}
console.log(toMMK(100, "USD"));

function tocurrency(amount, currency) {
  let exchangeRate = rates[currency];
  return `${(amount / exchangeRate).toFixed(2)} ${currency}`;
}
console.log(tocurrency(100000, "USD"));

//function declaration or function statement

function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

//function expression

const adding = function (a, b) {
  return a + b;
};
console.log(adding(2, 3));

//IIFE
console.log(
  `I'm ${(function () {
    let birthYear = 1994;
    let currentYear = 2023;
    return currentYear - birthYear;
  })()} years old`
);

//NOT using IIFE (should use this)
// console.log(function(){
//   return `I'm not IIFE`
// })

//Function declaration Hoisting
console.log(multiply(2, 3));
function multiply(a, b) {
  return a * b;
}
//hoisting can cause ERROR with function expression
const minus = (function (aa, bb) {
  return aa - bb;
})(3, 2);
console.log(minus);

//var Hoisting
console.log(hoist1);
var hoist1 = 3;

//Memory Managment
//stack
let x = 5;
let y = x;
console.log(x);
console.log(y);
x = 7;
console.log(y);
//heap
let arr = ["a", "b", "c"];
let arr2 = arr;
console.log(arr);
console.log(arr2);
arr[0] = "aaa";
console.log(arr);
console.log(arr2);

//logical Operators
function canIVote(age, nationality) {
  if (age >= 18 && nationality == "Myanmar") {
    return "You can vote";
  }
  return "You are not allowed to vote";
}
console.log(canIVote(18, "Myanmar"));

function hungry(food) {
  if (food === "hot pot" || food === "mala xiang guo") {
    return "I am full";
  }
  return "I am still hungry ";
}
console.log(hungry("hot pot"));

//writing style
if (true) {
  console.log("It is true");
}

true && console.log("It is true"); //same as above//expression style
false && console.log("It is false"); //if false doesn't work

if (true) {
  console.log("It is true ");
} else {
  console.log("It is false");
}

false ? console.log("It is true") : console.log("It is false"); //same as above

function addition(x, y) {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  }
  return "incorrect argument";
}
console.log(addition(5, 4));
console.log(addition(5, "5"));

//IIFE
(function add(a, b) {
  console.log(a + b);
})(2, 3);

console.log(
  (function () {
    let now = 2023;
    let birth = 1999;
    return now - birth;
  })()
);

console.log(
  `I'm ${(function () {
    let name = "than thar";
    return name;
  })()} and I'm student`
);

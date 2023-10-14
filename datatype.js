// console.log(16 / 2);
// console.log(0o16 / 2);
// console.log(0b110 / 2);
// console.log(0xd / 2);

// const fruits = ["apple", "orange", "strawberry", "banana", "mango"];
// console.log(fruits);
// fruits[2] = "lime"; //overwrite
// console.log(fruits);

// //array construction
// const arr = [];
// arr[0] = "aaa";
// arr[1] = "bbb";
// arr[2] = "ccc";
// console.log(arr);

// const obj = {
//   apple: 500,
//   orange: 300,
//   mango: 700,
//   banana: 400,
// };
// console.log(obj);

// const myself = {
//   name: "than thar",
//   age: 23,
//   weight: 100,
//   weightunit: "lb",
//   skill: ["html", "css", "js", "php"],
//   relationshipstatus: false,
// };
// console.log(myself);
// console.log(`My name is ${myself.age}`);
// console.log(`My name is ${myself["age"]}`);
// myself.relationshipstatus = true;
// myself.name = "Phyo";
// console.log(myself);

// const obj1 = {};
// obj1.a = "aaa";
// obj1.b = "ccc";
// console.log(obj1);

let name = "mg mg";
let age = 15;
let township = "kyauk myaung";
let pocketMoney = 200;
let orange = 50;
let leftMoney = pocketMoney - orange;
console.log(leftMoney);
let bag = ["myan", "eng", "bio"];
let pen = null;
let canMgmgFriSmoke = true;
let canMgmgSmoke = false;

let student1 = {
  name,
  age,
  township,
};
// console.log(student1);

let student2 = {
  name: "kyaw kyaw",
  age: 16,
  township: "san chaung",
};

let student3 = {
  name: "mya mya",
  age: 15,
  township: "bahan",
};
let student4 = {
  name: "su su",
  age: 14,
  township: "kyauk myaung",
};

let students = [student1, student2, student3, student4];

console.log(students);
console.log(students[3].age);
console.log(students[3]["age"]);
console.log(student3["age"]);
console.log(students[3]);

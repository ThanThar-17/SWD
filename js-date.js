// console.log(Date());

const d = new Date();
// console.log(d);

//Can see all method of date object
// console.dir(d);

//to methods
console.log(typeof d.toString());
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toTimeString());

//get methods
console.log(d.getFullYear(), d.getMonth(), d.getDate(), d.getDay());
console.log(d.getHours(), d.getMinutes(), d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());

//set methods
// d.setHours(d.getHours() + 300);
// console.log(d);

// d.setMonth(d.getMonth() + 4);
// console.log(d)

// let courseHours = 50;
// let learningHoursPerDay = 2;
// let learningDays = courseHours / learningHoursPerDay;

// d.setDate(d.getDate() + learningDays);
// console.log(d);
// console.log("You will be finished your course at " + d.toDateString());

//String
// const date = new Date("Dec 31 2019");
// const date = new Date(2019, 11, 31);
// console.log(typeof date);
// console.log(date.getDate());
// console.log(date.getFullYear());

console.log(typeof Date());
// console.dir(Date()); //Date() is string dir won't work

const date = new Date();
console.log(typeof date);
console.dir(date);

// const date = new Date(new Date().setFullYear(2019));
// console.log(date);

console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds(1)}`);

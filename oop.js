class Student {
  //properties
  //   name = "mg mg";
  //   age = 15;

  //constructor
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    // console.log("this is a student construct");
  }
  //method
  learn() {
    return this.name + " can learn";
  }
}
//instantiate
const st1 = new Student("mg mg", 14, "male");
// st1.name = "mg mg";
// st1.age = 14;
console.log(st1);
// console.log(st1.name);
// console.log(st1.age);
console.log(st1.learn());

const st2 = new Student("su su", 14, "female");
console.log(st2);
console.log(st2.learn());

// const obj = {};

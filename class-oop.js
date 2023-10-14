class Student {
  //Public Property
  f = "fff";
  constructor(name, age, gender) {
    //data intialize
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.namePrefix = this.gender === "male" ? "Mr" : "Ms";
    this.fullName = this.namePrefix + " " + this.name;
    this.birthYear = 2023 - this.age;
  }
  introduction() {
    return `My name is ${this.fullName} and I was born in ${this.birthYear}`;
  }
  learn() {
    return this.name + " can learn";
  }
  //static property intialize
  static a = "aaa";

  //static method
  static who() {
    return `I'm a student`;
  }

  //Access Modifier(Public,Private,Protected)
  //Private Property & Method
  #y() {
    return "this is private method";
  }
  #x = "xxx";
  run() {
    return "this is a private property " + this.#y();
  }
}
const st1 = new Student("mg mg", 26, "male");

//overwrite Property
st1.name = "kyaw kyaw";

//add property
st1.pocketMoney = 500;

//Property,Method Access
console.log(st1.name);
console.log(st1.gender);

console.log(st1);

//accessing unintialize property
console.log(st1.address);

//accessing static method & static property
console.log(Student.who());
console.log(Student.a);

//Private Property and Method
// console.log(st1.#x);//error
console.log(st1.run());

//Public Property
console.log(st1.f);

//oop inheritance
class One {
  a = "aaa";
  b = "bbb";
  c = "ccc";
}
class Two extends One {
  d = "ddd";
  e = "eee";
}
const two = new Two();
console.log(two);

//OOP concept Encapsulation
class En {
  #x = "xxx";

  getX() {
    return "this is " + this.#x;
  }
  setX(newValue) {
    this.#x = newValue;
  }
}
const en = new En();
en.setX("yyy");
console.log(en.getX());

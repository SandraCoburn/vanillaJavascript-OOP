class Person {
  name = 'Max';

  constructor() {
    this.age = 30;
  }
  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

const person = new Person();
person.greet();

//function constructor
function Person2() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  };
}
const person2 = new Person2();
person2.greet();

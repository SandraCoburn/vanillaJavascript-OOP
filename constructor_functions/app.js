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

//constructor
class Fruit {
  name = 'Apples';
  constructor(color) {
    this.color = color;
  }
  printApple() {
    console.log(`This ${this.name} is a ${this.color} fruit`);
  }
}

const newApple = new Fruit('red');
newApple.printApple();

function Fruits(fruit) {
  this.name = fruit;
  this.printFruit = function () {
    console.dir(this.name);
  };
}
const secondFruit = new Fruits('pear');
secondFruit.printFruit();
console.log(secondFruit.__proto__);

//We can create our functions in the Object's prototype to save in resources. function will be created only once
Fruits.prototype.describe = function () {
  console.log(` Hi, I am a ${this.name}`);
};
secondFruit.describe();

//Add a button that uses an instance of a class and the method
const button = document.getElementById('btn');
button.addEventListener('click', secondFruit.describe.bind(secondFruit));

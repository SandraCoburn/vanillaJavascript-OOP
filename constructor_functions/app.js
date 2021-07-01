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

//Setting and getting Prototypes
const course = {
  // new Object()
  tittle: 'Javascript',
  rating: 4,
};
//This set the prototype as a new object
Object.setPrototypeOf(course, {
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
//This leaves the previous functionality of the course object and adds the printing method
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printTitle: function () {
    console.log(this.tittle);
  },
});

//To ad new properties to an empty object:
const student = Object.create({
  printProgress: function () {
    console.log(this.progress);
  },
});
student.name = 'Max';

Object.defineProperties(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  witable: false,
});

course.printRating();
course.printTitle();

'use strict';

const aboutUser = {
  name: 'Shubham',
  age: 24,
  isEmployed: false,

  // inside an object, this keyword refers to that particular object
  // inside a class, this keyword refers to the object on which the class is instansiated
  // to access properties and methods inside an object or class, use this keyword

  // inside function expressions, this keyword refers to the current object i.e. aboutUser
  summary: function () {
    console.log(this);
    return `${this.name} is ${this.age} years old and currently ${this.isEmployed ? '' : 'not'} employed`;
  },

  // inside arrow functions, this keyword refers to the global window or node object
  // can't access methods and properties using this
  summary2: () => {
    console.log(this);
    return `${this.name} is ${this.age} years old and currently ${this.isEmployed ? '' : 'not'} employed`;
  },
};

console.log(aboutUser.summary());
console.log(aboutUser.summary2());

// numbers, booleans and strings are primitive types
// arrays and objects are reference types

// when arrays are objects are stored inside variables, variables don't actually store the value
// of that particular array or object instead they store the
// reference(or pointer) that refers(or points) to the memory location
// where the value of array or object is stored
// and because of that a const array or object can be modified because
// value is being modified not the reference

const numbers = [12, 456, 90];

// modifying const array
numbers.push(100);
numbers.push(900);
console.log(numbers);
numbers.pop();
console.log(numbers);

const aboutMe = {
  name: 'shubham',
  age: 24,
  isMarried: false,
};

// modifying const object

aboutMe.degree = ['BCA', 'MCA'];
aboutMe.parents = {
  mother: 'sangeeta',
};

console.log(aboutMe);

aboutMe.degree.push('MS');
aboutMe.parents.father = 'sandeep';

console.log(aboutMe);

aboutMe.summary = function () {
  console.log(`${this.name} is ${this.age} years old`);
};

aboutMe.summary();

// when a new value is reassigned to a const array or object, reference is modified
// hence JS will throw type error

// reassignment to an array
numbers = [200, 0, 90];
console.log(numbers);

// reassignment to an object
aboutMe = {
  hobbies: ['reading', 'swimming'],
};

console.log(aboutMe);

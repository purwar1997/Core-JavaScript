'use strict';

// ways of creating objects

// whenever an object is created, JS attaches __proto__ property to it

// using an object literal
const obj1 = { a: 12, b: 34, c: 67, d: 100 };

// using Object.create() method
const obj2 = Object.create({}, { a: { value: 200 }, b: { value: 10 }, c: { value: 23 } });

// using Object() constructor function
const obj5 = new Object({ p: 1, q: 2, r: 3 });
const obj6 = new Object({ name: 'Shubham', isOnline: true });

// using Object.assign() method, multiple properties can be added to an object at once
const obj3 = {};
Object.assign(obj3, { a: 12, b: 45 }, { c: 123, d: 90, e: 12 }, { f: 11 });

const obj4 = { a: 2 };
Object.assign(obj4, { b: 67, c: 76 }, { x: 1, y: 2 });

// spread operator
function sumOne(a, b, c, d) {
  return a + b + c + d;
}

console.log(sumOne(...[12, 4, 7, 9]));

// also works on objects
let obj7 = { name: 'Paras', ...obj1, ...obj5 };
console.log(obj7);

// rest operator packs all the values inside an array
function sumTwo(...values) {
  return values.reduce((sum, num) => sum + num, 0);
}

console.log(sumTwo(12, 8));
console.log(sumTwo(12, 10, 9, 0));
console.log(sumTwo(1, 100, 90, 10, 2, 3));

// rest operator in destructuring
const [a, , , b, ...rest] = [12, 9, 7, 4, 1, 80, 23];
console.log(a, b, rest);

const user = {
  firstName: 'Paras',
  age: 24,
  isEmployed: true,
  login() {
    this.isLogged = true;
    return `${this.firstName} ${this.lastName} has logged in`;
  },
  logout() {
    this.isLogged = false;
    return `${this.firstName} ${this.lastName} has logged out`;
  },
};

// adding properties to an object
user.lastName = 'Purwar';
user.college = 'IGNOU';
user['degrees'] = ['BCA', 'MCA', 'MS']; // array inside an object
user.parents = { mother: 'Sangeeta', father: 'Sandeep' }; // object inside an object
user.experience = new Set(['Cred', 'Ola', 'Oyo']); // set inside an object

// adding method to an object
user.signup = function () {
  this.isRegistered = true;
  return `${this.firstName} ${this.lastName} has signed in`;
};

// accessing properties
console.log(user.age);
console.log(user.lastName);
console.log(user['college']); // keys are always of string datatype
console.log(user['experience']);

// . notation only accepts final property names
// [] notation can accept variables and expressions
let prop = 'degrees';
console.log(user[prop]);

prop = 'isEmployed';
console.log(user[prop]);

// accessing methods
console.log(user.login());
console.log(user.logout());
console.log(user['signup']());

// prints a table of index and values to a console
console.table(user);
console.table([12, 89, 0, 13]);

// console is also an object on which log() and table() methods are being invoked

"use strict";

// spread operator

const num = [12, 90, 65, 20];

// unpacks all the elements of an array
const copyNum = [...num];
console.log(copyNum);

const newNum1 = [...num, 9000, 1001];
console.log(newNum1);

const newNum2 = [...newNum1, 1, 0];
console.log(newNum2);

const sum = (a, b, c, d) => a + b + c + d;
console.log(sum(...[3, 8, 0, 9]));

const obj = {
  a: 12,
  b: 90,
  bool: true,
  str: "great",
};

// unpacks all the properties/fields of an object
const objCopy = { ...obj };
console.log(objCopy);

const newObj = {
  ...obj,
  str2: "again great",
  c: 100,
};

console.log(newObj);

const newObj1 = { ...newObj, d: 200, bool2: false };
console.log(newObj1);

const newObj2 = {
  ...newObj1,
  getData() {
    console.log(`A function is invoked`);
  },
};

newObj2.getData();

// rest operator packs all the elements into an array
const toArray = (...args) => args;
console.log(toArray(10, 89, true, "pop", 12.9));

// destructuring of arrays
const [a, , b, ...rest] = [12, 90, 900, 12, 0];
console.log(a, b, rest);

// destructuring of objects
const aboutMe = {
  name: "shubham",
  age: 24,
  profession: "coder",

  summary() {
    console.log(`${name} is ${age} years old ${occupation}`);
  },
};

// variable names should be same as property names
const { name, age } = aboutMe;
console.log(name, age);

// for variable names to be different from property names
const { profession: occupation, summary: bio } = aboutMe;
console.log(occupation, bio());

// to set default values of variables in case property is not found
const { college = "IGNOU" } = aboutMe;
console.log(college);

// destructuring while invoking a function
const printName = ({ name, profession }) => `${name} is a ${profession}`;
console.log(printName(aboutMe));

const brothers = ["Elon", "Kimbal"];

const print = ([bro1, bro2]) => console.log(`${bro1} and ${bro2} are two brothers`);
print(brothers);

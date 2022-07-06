'use strict';

// Array.from() method
// converts iterables into an array

// Syntax => Array.from(iterable, mapFn, thisArg) => returns an array
// iterable =>  string, array, set, map
// mapFn receives two args => element, index
// this keyword inside mapFn will refer to thisArg

// on strings
console.log(Array.from('Shubham'));

// on arrays
let numbers = [12, 90, 6, 10, 35, 20];
console.log(Array.from(numbers, num => num * 2));
console.log(Array.from(numbers, (num, index) => `Item ${index + 1}: ${num}`));

// on sets
let mySet1 = new Set(['C', 'C++', 'Assembly', 'C', 'C++']);
console.log(mySet1);

console.log(Array.from(mySet1));
console.log(Array.from(mySet1, (lang, index) => `language ${index + 1}: ${lang}`));

const student1 = {
  name: 'Shubham',
  age: 24,
};

const student2 = {
  name: 'Akshay',
  age: 26,
};

let mySet2 = new Set(['Python', 'JavaScript', 'Rust', 'Dart']);

console.log(
  Array.from(
    mySet1,
    function (lang) {
      // this will refer to student1
      return `${this.name} has learnt ${lang}`;
    },
    student1
  )
);

console.log(
  Array.from(
    mySet2,
    function (lang, index) {
      // this will refer to student2
      return `${this.name}, ${this.age} years old has learnt language ${index + 1}: ${lang}`;
    },
    student2
  )
);

// on maps
let map1 = new Map([
  [1, 2],
  [3, 4],
  [5, 6],
  [9, 10],
]);

console.log(map1);
console.log(Array.from(map1));

console.log(Array.from(map1, ([key, value], index) => `Item ${index + 1} => ${key} : ${value}`));

console.log(
  Array.from(
    new Map([
      [1, 'A'],
      [2, 'B'],
      [3, 'C'],
    ]).values()
  )
);

console.log(
  Array.from(
    new Map([
      [1, 'A'],
      [2, 'B'],
      [3, 'C'],
    ]).keys()
  )
);

const users = [
  { name: 'Shubham', college: 'DTU' },
  { name: 'Paras', college: 'IIT Delhi' },
  { name: 'Prakhar', college: 'BITS Pilani' },
];

const userData = Array.from(
  users,
  function (user, index) {
    return `${index + 1}: ${user.name} has completed his ${this.duration} year ${this.course} program from ${
      user.college
    }`;
  },
  { course: 'Btech', duration: 4 }
);

userData.forEach(data => console.log(data));

// Array.isArray(item) checks whether the item is an array or not
// returns either true or false

console.log(Array.isArray(numbers));
console.log(Array.isArray(users));

let item = new Map([
  [1, 2],
  [3, 4, 5],
  [10, 11],
]);

console.log(Array.isArray(item));

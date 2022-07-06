'use strict';

// some() => Syntax: array.some((item, index, array) => {  ...code...  })
// returns either true or false
// true if atleast one item satisfies the condition otherwise false

let numbers = [121, 8, 4, 34, 50];

console.log(numbers.some(item => item % 3 === 0));
console.log(numbers.some(item => item < 40));

const persons = [
  { name: 'Shubham', age: 24, course: 'Full stack' },
  { name: 'Kapil', age: 18 },
  { name: 'Joe', age: 17 },
  { name: 'Suyash', surname: 'purwar', age: 40 },
];

console.log(persons.some(person => person.age > 20));

// every() => syntax: array.every((item, index, array) => {   ...code...   })
// returns true if every element satisfies the condition otherwise false

console.log(numbers.every(item => item > 0));
console.log(numbers.every(item => item > 100));
console.log(persons.every(person => person.age > 18));
console.log(persons.some(person => person.course !== undefined));

const res = persons.every(hasProperty);

function hasProperty(person) {
  return person.name ? true : false;
}

console.log(res);

console.log(persons.some(person => (person.surname ? true : false)));

let arrays = [[1, 2, 3], [4, 5, 6], [9, 10], [100], 'Array'];
console.log(arrays.every(arr => Array.isArray(arr)));

arrays = [[12, 0], [2, 5, 6], [0]];
console.log(arrays.every(item => Array.isArray(item)));

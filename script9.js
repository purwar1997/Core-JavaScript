'use strict';

// split() converts a string into an array
let name = 'Shubham Purwar Roy';
let nameArr = name.split(' ');
console.log(nameArr);

console.log('12+34+56+78+90'.split('+'));

let languages = 'CandC++andPythonandJavaandRustandDartandJavaScript';
console.log(languages.split('and'));

// join() converts an array into a string
let numbers = [12, 8, 10, 2];
console.log(numbers.join('--'));
console.log(`${numbers.join(' + ')} = ${numbers.reduce((sum, num) => sum + num, 0)}`);

let names = ['Aman', 'Paras', 'Shubham'];
console.log(names.join(' & '));

console.log(Array.from('JavaScript'));

// fill()
// syntax: array.fill(filler, start, end)
// start and end args are optional

let num = [12, 9, 7, 8, 67, 45];
console.log(num.fill('empty', 2, 5));
console.log(num.fill(null));

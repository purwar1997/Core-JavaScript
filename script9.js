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

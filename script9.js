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

// fill()
// syntax: array.fill(filler, start, end)
// start and end arguments are optional
// modifies the original array and returns it

let num = [12, 9, 7, 8, 67, 45];
console.log(num.fill('empty', 2, 5));
console.log(num.fill(null));

// in a range, startIndex is always inclusive and endIndex is always exclusive

// slice() => slices an array and returns it
// syntax: array.slice(start, end)
// slice() doesn't modifies the original array

num = [12, 9, 7, 8, 67, 45, 100, 210];

console.log(num.slice(0, 4));
console.log(num.slice(2));
console.log(num.slice(-5, -1));
console.log(num.slice(1, -2));
console.log(num.slice(-3));

// splice() => syntax: array.splice(start, count, placeholders)
// start -> start index
// count -> no of elements to be deleted
// placeholders -> values to be placed after deletion of elements
// splice() modifies the original array

console.log(num.splice(0, 3));
console.log(num);

// splice() can be used to delete any value
console.log(num.splice(2, 1));
console.log(num);

num.splice(-1, 1);
console.log(num);

// splice() can be used to replace a value with another value
num.splice(1, 1, 200);
console.log(num);

num.splice(0, 1, 300);
console.log(num);

num.reverse();
num.push(400);
num.push(500);

console.log(num);
num.splice(1, 3, 'Deleted');
console.log(num);

num.splice(1);
console.log(num);

num.splice(0);
console.log(num);

num = [12, 9, 7, 8, 67, 45, 100, 210];

num.splice(3, 3, 0, 0);
console.log(num);

num.splice(num.indexOf(0), 2);
console.log(num);

// splice() can be used to replace multiple values of an array with another set of values
num.splice(2, 3, 'a', 'b', 'c');
console.log(num);

num.splice(0, 2, 'x', 'y');
console.log(num);

num.splice(2, 1, 'z');
num.splice(-2);
console.log(num);

num.unshift('w');
num.unshift('v');

num.splice(0, 2, 'Letters');
console.log(num);

num.splice(0, 1);
console.log(num);

// flat() method => unnests a nested array
// flat array doesn't have any nesting inside it

let num2 = [1, [2, [3, [4, [5, [6, [7]]]]]]];

console.log(num2.flat());
console.log(num2.flat(2));
console.log(num2.flat(4));

// to completely unnest an array or to remove all nestings, pass Infinity
console.log(num2.flat(Infinity));

let num3 = [1, [2, 3], [4, [5, [6, 7]]], [12, [90, [100]]]];

console.log(num3.flat(2));
console.log(num3.flat(3));
console.log(num3.flat(Infinity));

// concat() => used to merge two arrays
// Syntax: arr1.concat(arr2)

let num4 = [23, 9],
  num5 = [true, false, 'OOP'],
  num6 = ['Shubham'];

console.log(num4.concat(num5));
console.log(num4, num5);

console.log(num4.concat(num6));
console.log(num5.concat(num6).concat(['Purwar', 120]));

// Syntax: arr.toString()
// toString() => converts an array into a string
// converts all the array values into strings first and then joins them by comma(,)

let arr1 = [12, 89, 0, 23];
console.log(arr1.toString());

let arr2 = ['VIT', 100, 90.23, true, [true, false]];
console.log(arr2.toString());

let arr3 = ['shubham', 'purwar', 34, 100, false];
console.log(arr3.toString());

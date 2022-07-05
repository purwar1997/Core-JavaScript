'use strict';

// for-of is mainly used for arrays (iterables)
// can't be used on objects because object is not an iterable
const sites = ['facebook', 'youtube', 'instagram'];

for (const site of sites) {
  console.log(site);
}

// for-in is mainly used for objects

const user = {
  name: 'Shubham',
  age: 24,
  sex: 'male',
  college: 'IGNOU',
};

// for-in loop returns keys of an object
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}

// for-in loop returns indices of an array
for (const index in sites) {
  console.log(`Index ${index}: ${sites[index]}`);
}

// fill() => used to fill an array with a specific value
// syntax: array.fill(value, start, end) => modifies and returns an array on which fill() is applied

const numbers = [90, 87, 12, 7, 8, 99];
console.log(numbers.fill('empty', 2, 5));
console.log(numbers.fill(0, 1, 4));

// filter() => can be used to delete or filter values of an array
const numbers2 = [12, 45, 34, 6, 89, 100, 9, 10];

// callback inside filter() has to return true or false
console.log(numbers2.filter(value => value !== 100)); // delete number 100 from an array
console.log(numbers2.filter(value => value > 9 && value < 100)); // only two digit numbers

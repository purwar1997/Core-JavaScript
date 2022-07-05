'use strict';

// array declared using an array literal
var states = ['Karnataka', 'UP', 'Assam', 'Sikkim', 'Rajasthan'];

// array declared using a constructor function
var cities = new Array('Mumbai', 'Delhi', 'Bangalore', 'Etawah');

// accessing values of an array
console.log(states[1]);
console.log(cities[3]);

// size of an array
console.log(states.length);
console.log(cities.length);

// changing values of an array
states[1] = 'Uttar Pradesh';
cities[3] = 'Noida';

console.log(states, cities);

// adding new values to an array
states[5] = 'MP';
cities[4] = 'Etawah';
cities[5] = 'Pune';

console.log(states, cities);

// an array can have values of different datatypes
let user = ['Shubham', 'shubham05@dev.com', 24, true, ['BCA', 'MS']];

// array methods

// pop() and shift() removes elements from the end and start
// push() and unshift() adds elements to the end and start
// shift() and unshift() causes other elements to shift inside an array

user.pop();
console.log(user);

user.shift();
console.log(user);

user.push('BCA');
user.unshift('Shubham Purwar');
console.log(user);

// includes() returns true or false
console.log(user.includes(24));
console.log(user.includes('MS'));

// changes the order of elements of an array
console.log(user.reverse());
console.log(user.reverse());

// returns index if the element is found
console.log(user.indexOf(true));
console.log(user.indexOf('BCA'));

user.push(true);
console.log(user.lastIndexOf(true));

user.push(24);
console.log(user.lastIndexOf(24));

// returns -1 if an element is not found
console.log(user.indexOf(100));
console.log(user.indexOf('Hitesh'));

user.push('Hitesh');
console.log(user.indexOf('Hitesh'));

console.log(user);

user[user.indexOf(true)] = false;
user[user.lastIndexOf(24)] = 25;
console.log(user);

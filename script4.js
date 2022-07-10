'use strict';

// try-catch-finally blocks
const convertToRs = dollar => {
  if (typeof dollar === 'number') {
    return dollar * 65;
  } else {
    throw Error('Amount should be a number');
  }
};

try {
  const valueInRs = convertToRs('ten dollar');
  console.log(valueInRs);
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Will be executed anyway whether an error is thrown or not');
}

// maps in JS
const myMap = new Map();

// keys and values inside a map can be of any type
myMap.set('name', 'shubham').set('age', 24).set(0, 'mother').set(true, 12);
console.log(myMap);

console.log(myMap.get('name'));
console.log(myMap.get('age'));
console.log(myMap.get(true));

// values(), keys() and entries() returns an array
console.log(myMap.values());
console.log(myMap.keys());
console.log(myMap.entries());

console.log(myMap.size);

// has() returns either true or false
console.log(myMap.has('name'));
console.log(myMap.has(0));
console.log(myMap.has(12));

// delete() => deletes only one property at a time
myMap.delete(true);
console.log(myMap);

myMap.delete(0);
console.log(myMap);

// clear() => deletes all the properties at once to create an empty map
myMap.clear();
console.log(myMap);

myMap.set('name', 'shubham').set('age', 24).set(0, 'mother').set(true, 12).set(false, 0);

for (const [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}

console.log('------------');

// with each iteration, value will be passed first
myMap.forEach(prop => console.log(prop));

// syntax: map.forEach((value, key , map) => {  ...code...  })
myMap.forEach((value, key) => console.log(`${key}: ${value}`));

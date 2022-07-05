"use strict";

console.log("Hello!");
console.log("Hello again!");

const fetchData = callback => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

setTimeout(() => {
  console.log("Time is over!");
  fetchData(text => console.log(text));
}, 2000);

console.log("Hello!");
console.log("Hello again!");

// using promises
const fetchData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
};

setTimeout(() => {
  console.log("Time is over!");
  fetchData1()
    .then(text => {
      console.log(text);
      return fetchData1();
    })
    .then(text => console.log(text));
}, 2000);

console.log("Hello!");
console.log("Hello again!");

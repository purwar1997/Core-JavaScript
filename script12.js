'use strict';

const myToDos = [
  { title: 'Build an app', isDone: false },
  { title: 'Read a book', isDone: true },
  { title: 'Go to gym', isDone: true },
  { title: 'Cook pasta', isDone: false },
];

const index = myToDos.findIndex(toDo => toDo.title === 'Read a book');
console.log(index);

// findIndex() returns the index of found item
let findToDo = (toDoList, title) => toDoList.findIndex(toDo => toDo.title.toLowerCase() === title.toLowerCase());

console.log(findToDo(myToDos, 'Cook Pasta'));
console.log(findToDo(myToDos, 'Build an APP'));
console.log(findToDo(myToDos, 'Build webapp')); // -1 if the item is not found

// find() returns the found item itself
findToDo = (toDoList, title) => {
  const toDoItem = toDoList.find(toDo => toDo.title.toLowerCase() === title.toLowerCase());
  return toDoItem ? toDoItem : 'Todo not found';
};

console.log(findToDo(myToDos, 'go to GYM'));
console.log(findToDo(myToDos, 'Clean ROOM'));

// returning todos which are completed

// filter() returns an array
const completedToDos = toDos => toDos.filter(todo => todo.isDone);
console.log(completedToDos(myToDos));

// callbacks inside find(), findIndex() anf filter() methods always returns a boolean value (true or false)

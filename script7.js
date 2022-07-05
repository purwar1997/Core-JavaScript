'use strict';

const user1 = {
  firstName: 'Kunal',
  isGraduated: true,
  loginCount: 0,
  courseList: [],

  login: function () {
    this.isLogged = true;
    this.loginCount++;
  },
  logout: function () {
    this.isLogged = false;
  },
  getCourse: function (course) {
    this.courseList.push(course);
    return this.courseList;
  },
  getCourseCount: function () {
    return `${this.firstName} is now enrolled in total of ${this.courseList.length} courses`;
  },
};

user1.login();
user1.logout();
user1.login();
console.log(user1.loginCount);

console.log(user1.getCourse('Full stack'));
console.log(user1.getCourse('DevOps'));
console.log(user1.getCourse('DSA'));

console.log(user1.getCourseCount());
user1.getCourse('ReactJS');
console.log(user1.getCourseCount());

// for-of loop only works on iterables. So it can't work on JS objects
// for-in loop can work on JS objects

// for-of => values
// for-in => keys

for (const key in user1) {
  console.log(key);
}

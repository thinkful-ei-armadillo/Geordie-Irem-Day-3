'use strict'; 
// function createMyObject() {
//   const myObject = {
//     foo: 'bar',
//     answerToUniverse: 42,
//     olly_olly: 'oxen free',
//     hello: function() {
//       return 'hello!';
//     }
//   };
//   return myObject;
// }

// function updateObject(obj) {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;   
// }

// // const myObj = createMyObject();
// // console.log(myObj);
// // console.log(updateObject(myObj));

// function personMaker() {
//     const person = {
//         firstName: 'Paul',
//         lastName: 'Jones',
//         // replace `null` with a function that uses self reference to return
//         // full name
//         fullName: function () {
//             return `${this.firstName} ${this.lastName}`;
//         },
//     };
//     return person;
// }
// // const person =personMaker();
// // console.log(person.fullName());

// function modifyKeyDeletor(obj) {
//     delete obj.foo;
//     delete obj.bar;
//     return obj;
// }
// // console.log(modifyKeyDeletor(myObj));

// function makeStudentsReport(data) {
//     let report = [];
//     for (let i = 0; i < data.length; i++) {
//         report[i] = `${data[i].name}: ${data[i].grade}`;
//     }
//     return report;
// }

// const studentData = [
//     {
//         name: 'Tim',
//         status: 'Current student',
//         course: 'Biology',
//     },
//     {
//         name: 'Sue',
//         status: 'Withdrawn',
//         course: 'Mathematics',
//     },
//     {
//         name: 'Liz',
//         status: 'On leave',
//         course: 'Computer science',
//     },
// ];

// function enrollInSummerSchool(students) {
//     for (let i = 0; i < students.length; i++) {
//         students[i].status = 'In Summer school';
//     }
//     return students;
// }

// }function findById(items, idNum) {
//   for (let i=0; i<items.length; i++){
//     if(items[i].id === idNum){
//       return items[i];
//     }
//   }
// }
// function validateKeys(object, expectedKeys) {
//   const newArray = Object.keys(object);
//   if (newArray.length !== expectedKeys.length) {
//     return false;
//   }
//   for (let i=0; i<newArray.length; i++) {
//     if (newArray[i] === expectedKeys[i]){
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
// }

// const loaf = {
//     flour: 300,
//     water: 210,
//     hydration: function() {
//         return this.flour / this.water * 100
//     }
// }
// console.log(loaf.flour, loaf.water)
// console.log(loaf.hydration())

const obj = {
  foo: 'foo', 
  bar: 'bar', 
  fum: 'fum', 
  quux: 'quux', 
  spam: 'spam',
}
for (const key in obj){
  const value = obj[key];
  console.log(key+' ' + value);
}
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

// const obj = {
//   foo: 'foo', 
//   bar: 'bar', 
//   fum: 'fum', 
//   quux: 'quux', 
//   spam: 'spam',
// }
// for (const key in obj){
//   const value = obj[key];
//   console.log(key+' ' + value);
// }

// const hobbit = {
//     meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }
// console.log(hobbit.meals[3]);
// function createPerson(name, jobTitle, boss) { 
// return {
//    name, 
//    jobTitle,
//    boss
//  }
// }
// const first = createPerson('secil' ,'dev', 'Rich');
// const sec = createPerson('geor','dev', 'Rich');
// const thir = createPerson ('joe', 'paint');
// let newArray = [first,sec, thir];
// for(let i = 0; i < newArray.length; i++){
//     if(!newArray[i].boss) {
//         console.log(`${newArray[i].jobTitle} ${newArray[i].name} does not report to anyone.`)
//     } else {
//         console.log(`${newArray[i].jobTitle} ${newArray[i].name} reports to ${newArray[i].boss}`)
//     }

function decode(string) {
  const words=string.split(' ');
  let resultArray = ''; 
  let step = '';
  for (let i=0; i<words.length; i++){
    if (words[i].slice(0,1) === 'a'){
      // step=words[i].slice(1,2);
      // step += words[i][decipher.a-1]
    }
    else if (words[i].slice(0,1) === 'b'){
      step=words[i].slice(2,3);
    }
    else if (words[i].slice(0,1) === 'c'){
      step=words[i].slice(3,4);
    }
    else if (words[i].slice(0,1) === 'd'){
      step=words[i].slice(4,5);
    } 
    else {
      step=' ';
    } 
    resultArray += step;
  }
  return resultArray; 
}

function decodedWords(obj){
  let str2 ='';
  for(const key in obj){
    console.log(decode(key)); 
    str2 =+ decode(key);
  }
  return str2;
}
const decipher ={a:2, b:3, c:4, d:5}
decipher(a-1);
const myObj ={craft: 'block', argon: 'meter', bells: 'brown', croon: 'droop'}
console.log(decodedWords(myObj));
console.log(decode('craft block argon meter bells brown croon droop'));
'use strict'; 
function createMyObject() {
  const myObject = {
    foo: 'bar',
    answerToUniverse: 42,
    olly_olly: 'oxen free',
    hello: function() {
      return 'hello!';
    }
  };
  return myObject;
}

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;   
}

// const myObj = createMyObject();
// console.log(myObj);
// console.log(updateObject(myObj));

function personMaker() {
  const person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function(){
      return `${this.firstName} ${this.lastName}`;
    },
  };
  return person;
}
// const person =personMaker();
// console.log(person.fullName());

function modifyKeyDeletor(obj){
  delete obj.foo;
  delete obj.bar;
  return obj;
}
// console.log(modifyKeyDeletor(myObj));
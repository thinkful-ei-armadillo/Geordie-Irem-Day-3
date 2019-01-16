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

const myObj = createMyObject();
console.log(myObj);
console.log(updateObject(myObj));
# var - let - const

## var

- var is function scoped. We can have access of any var within window scope.
- We can re-declare same named variable multiple times.

## let

- let is block scoped. Only available inside a curly brace
- Can't re-declare/define same named variable.
- Can modify after define.

## const

- const is also block scoped.
- Can't re-declare/define same named variable.
- Also can't modify after defined (only valid for string or number type)
- But we can modify any property of object not re-assign.

```js

if(true) {
    var varVariable = '5';
}

console.log(varVariable);
// Valid

function myFunc() {
    var a = '10'
}
myFunc();
console.log(a);
// Invalid, caues var is function scoped.

if(true) {
    let letVariable = '6';
}

console.log(letVariable);
//Invalid -> Reference error

if(true) {
    const constVariable = '7';
}

console.log(constVariable);
// Invalid -> Reference error

const myObj = {
    name : 'Sabbir',
    age : '25'
};

myObj = {
    name : 'Talha',
    age : '18'
}
// Invalid operation

myObj.name = 'Talha'
// Valid operation
```

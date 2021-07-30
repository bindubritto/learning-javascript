# Hoisting

At first, we need to understand about scope, then hoisting.

Here is 2 case, first for 'var' then 'let & const'

## Hoisting for var

There is 2 things in general. One is variable declare, another is variable assignment or definition. So, when we declare a variable with definition then it will split in these 2 steps. Fistly, it will declare then assignment. And in case of var keyword, variable declare will hoist top in it's scope. That's it.

```js
console.log(a); // undefined
var a = 'hi';
```

Why undefined, cause of hoisting. It will work like this way

```js
console.log(a); // undefined
var a;
a = 'hi';
```

Then

```js
var a = undefined; // hoisted
console.log(a); // undefined
a = 'hi';
```

Whenever we declare a var type variable, JS automatically assign 'undefined' value.

## Hoisting for let & const

But in let and const, hoisting is also applicable, but assign undefined value is not instant. undefined will assing in which line it declared.

```js
console.log(a); // Reference error.
let a = 'hi';
```

It works in this way, we can think at least

```js
let a; // hoisted but not assign undefined
console.log(a); // Reference error.
a = undefined; // Here, undefined is assigned because we declare let a, in this line.
a = 'hi';
```

// ex-4

```js
var LANG = "Java";
var lang = "JavaScript";

function getLang() {
    if (!lang) {
        var lang = LANG;
    }
    return lang;
}

console.log(`I love ${getLang()}`); // I love Java
 
```

- It will happen because of var. Cause var is a function scoped variable type. So, var lang will hoist top in it's function scope and it is undefined as well. So, if block will excute. But if we use let instead of var, it will return our expected behavior. Cause let is blocked scope.

```js
myFunc();
function myFunc() {
    console.log('I love JavaScript');
}
```

- Here, we can call a function before it's definition. So, in reallity, JS hoist function definition too. So, whenever JS finds any function definition, it hoist that defintion. That's why, we can call before it's definition.

```js
myFunc();
function myFunc() {
    console.log('I love JavaScript');
}
```

But if we declare funtion in this way, then it will throw reference error.

```js
myFunc();
const myFunc = function () {
    console.log('I love JavaScript');
}

// Throw reference error
```

Here some, important notes, JS run a code in 2 steps.

- Compilation
- Excusion

So, in compilation step, every declaration will hoist at first. In var, an undefined value will assign but in let & const undefined value will set in that line, where let and const declare. So, if we excute before it's declaration, it will throw reference error. That's it.

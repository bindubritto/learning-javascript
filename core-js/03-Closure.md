# Closure

- Below function is working perfectly.

```js
var sum = function (num1, num2) {
    return num1 + num2;
}

console.log(sum(2, 3));
```

- Below function will work perfectly, cause child scope has access to parent scope. But how things happen internally? Answer is "Closure"

```js
var num1 = 2;
var num2 = 3;

var sum = function () {
    return num1 + num2;
}

console.log(sum());
```

But if we did like this

```js

console.dir(sum);
```

It will return something like this.

![Closure-Scope](../images/closure.png?raw=true "Closure Example 01")

- Here, num1 and num2 comes from Global Scope.

But if we see this example with output, we will understand what is closure.

```js
var num1 = 2;

var sum = function () {
    var num2 = 3;
    return function() {
        return num1 + num2;
    }
}

var myFunc = sum();

console.dir(myFunc);
```

The output will something like this

// Image

So, there are 2 scopes. num2 comes from sum scope. and num1 comes from Global scope. Here, myFunc enclosue num2. It seems like something remembered value. So, in simple term Closure is nothing but a function with some remembered value. That's it.

Another example - 03

```js
var num1 = 2;

var sum = function () {
    var num2 = 3;
    var num3 = 4;
    return function() {
        return num1 + num2;
    }
}

var myFunc = sum();

console.dir(myFunc);
```

- Here, num3 is not inside in closure. So, which varible or value is required, closure enclosue only those variable. Not all. And if something is already in Global Scope, then new Closure scope will not create.

- According to Mozilla (2016) Doc - Closures are functions that refer to independent variables (variables that are used locally but defined in an enclosing scope).

So, defined in enclosing scope but used in locally. This is important. In our example, num2 is that kind of candidate.

- So, closure gives us access to an outer function's scope from inner function. From Ex-03, num2 is accessing from inner function but defined is outer function's scope.

- Closure always enclose variable reference's not value. This is important.

## Example - 04

But if we change var to let, then output will change.

```js
let num1 = 2;
let num2 = 3;

var sum = function () {
    return num1 + num2;
}

console.dir(sum);
```

- Output image

// image

- Here, instead of clouse, script comes. Reason is simple, let is blocked scope, var is function scope. let will not stay in Global function or scope. That's it.







// function first() {
//     var greet = 'HI';
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

// var newFunc = first();
// newFunc();

const first = () =>  {
    const greet = 'HI';
    const second = () => {
        console.log(greet);
    }
    return second;
}


const newFunc = first();
newFunc();

// Here is a problem, second function doesn't have an access on greet. 
// But the solution is child scope always has access to the parents scope. 

// Closures

// A function ran, the function excuted, it's never gonna executed agian
// BUT it's going remember that there are references to that variables. So child
// scope always has access to the parent's scope. 

// But parent's scope don't have access to child scope.


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

![Closure-Scope](../images/closure.png?raw=true "Service to Service Architecture")


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


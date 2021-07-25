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


// Reference type

// Number, boolean, string, symbol, null, undefined all are primitive types and defined by programming languages. 

// Reference type which is a non-primitive type are not defined by the programming language. So they created by programmer. 

var object1 = { value: 10 };
var object2 = object1;  // Object2 is just reffering object1. Nothing more than that.
var object3 = { value: 10 }

// Example of box. When we use curly brace, that means we're refering to a new box.
// Array are object end of the day. 


// Context vs scope

// Scope
// function b() {
//     let a = 5;
// }
// console.log(a); 
// reference error because of scope. cause when we see curly brace, we create scope. 

// Context -- Tells us where we are, within the object. 
// "this" means, what is the object environment we're right now.
// easy to remember, see the left side of dot. 

function a() {
    console.log('within just function a',this);
}

// window.a();
a();
// Not gonna work, cause window is a browser object. 

// different area of this. 

const object4 = {
    a: function() {
        console.log('within object 4',this);
    }
}

object4.a();


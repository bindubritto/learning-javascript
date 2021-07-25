// ----- Step - 01 ------

// function add(x, y) {
//     return x + y;
// }

// add(3, 4);

// const me = add;
// me(4, 5);

// const you = add;
// you(5, 6);

// In js, we can create as many reference as we want of a function. Whenever we press/invoke/run the
// reference, then the original function will call. 

// ----- Step - 02 -----

function add(x, y) {
    return x + y;
}

// fn 1
function addFive(x, addReference) {
    return addReference(5, x);
}

// fn 2
function higherOrderFunction(x, callback) {
    return callback(5, x);
}

higherOrderFunction(10, add);
addFive(10, add);

// Any function that takes another function as it's input, it's called higher order function. Here
// fn1 and fn2 is exactly same. and step 1 and 2 is almost same. 


[1, 2, 3].map((i) => i + 5);
// map is a higer order function. it receive another function. 

_.filter([1, 2, 3, 4], (n) => n % 2 === 0);
// lodash library. using filter. 


$('#btn').on('click', () => {
    console.log('Callback are everywhere');
});
// JQuery 'on's is also a higher oreder function.
// don't click this function, until the button is clicked. So we're delaying execution. 
// So we can make a decision from here. We can tell them, go somewhere, fetch the data, when data is available, execute the function. 
// So this is the classical callback example. 


// now we'll see ajax request. 

const id = 'bindubritto';

$.getJSON({
    url: `https://api.github.com/users/${id}`,
    success: updateUI,
    error: showError
})

// Soon, we'll see the callback hell. One decision is dependent with another decision and another decision depends on another decision.
// soon pyramid of doom shape appear. 

// Next big problem of callback is inversion of control. 

// We have a function name criticalFuntion() {}, which do critical operation, and we have a thirdPartyLibrary which takes this critical function, 
// So we have no control over the thirdParty api, it may breaks, it not gonna works and many more scenario. So when we use this critical function
// as a callback funtion to the third party lib, we are inverting the control to that third party. 

function criticalFuntion() {

}

thirdPartyLib(criticalFuntion);


// So we have 2 problems with callback. a) callback hell  b) Inversion of control. 

// But how do we solve this problem actually ? Here comse Promises to play. Let's learn about promises. 

// A story first. Suppose, we're friends go in a resturant for lunch. But the resturant is too busy.So instead of sitting there for free the table, they say that,
// we can give our numbers and they promise us that, 
// they will text us, when any table is empty. But here is a problem, they can break their promise. Or in another way, they have all the control, they can text or not, 
// they will never text us and many more. And same for the callback function and third party scenario. They have all the control.
// But instead of giving them our number, resturant share a buzzer with us. This is the solution actually. And this is how, we can overcome the problem of inversion of control. 

// This buzzer has 3 states. 

// a) pending   - is the default, initial state. When they give us the buzzer, it's in this state. 
// b) fulfilled - is the state the buzzer is ringing and out table is ready. 
// c) rejected  - is the state the buzzer is ring when something goes wrong. May be the resturant is about to close or they forgot, etc. 

// Promises exist to make the complexity of making asynchronous requests more managable. 

// Here are some questions
// 1. How do I create a Promise?
// 2. How do I change the status of a promise?
// 3. How do I listen the status of a promise changes?

// sol 1 

const promise = new Promise();

// sol 2 
const promise = new Promise((resolve, reject) => {

    resolve() // fulfilled
    reject() // rejected
});

// When the status changes of promise to fulfilled, then the function name "then" invoked. 
// When the status changes of promise to rejected, then the function name "catch" invoked. 

// Way-1

// const personMethods = {
//     eat() {
//         console.log('Person is eating');
//     },
//     sleep() {
//         console.log('Person is sleeping');
//     },
//     play() {
//         console.log('Person is playing');
//     }
// }

// function Person(name, age) {
//     let person = {};

//     person.name = name;
//     person.age = age;

//     person.eat = personMethods.eat;
//     person.sleep = personMethods.sleep;
//     person.play = personMethods.play;

//     return person;
// }

// const sakib = new Person('Sakib', 29);
// const tamim = new Person('Tamim', 30);

// console.log(sakib)

// Points
// 1. We separate the common functions. So re-write is ommited. 
// 2. So only one copy is created for this file. Everyone is refering 
// the same thing. 
// But, when we create a new function in personMethods, we need to add 
// that method to this functions. This is cumbersome. We really want that 
// new object always/anytime use all the feature of personMethods class. 


// here, we are creating object, using function. Now we'll try to create object
// using Object.create()

// Way-2

// const Captain = {
//     name: 'Mashrafi',
//     age: '29',
//     country: 'Bangladesh'
// }

// const player1 = Object.create(Captain);
// const player2 = Captain;

// console.log('player1', player1);
// console.log('player2', player2);

// // Observations
// // Ekhane amra object.create diye new kono object banale normally empty object show kore. 
// // But child diye parent er property access kora jay. But how is it possible? 
// // Eikhane protytype er use hoy.

// // So amra ager code ta aro improve korte pari, ei way te. 

// // Way-3

// const personMethods = {
//     eat() {
//         console.log('Person is eating');
//     },
//     sleep() {
//         console.log('Person is sleeping');
//     },
//     play() {
//         console.log('Person is playing');
//     }
// }

// function Person(name, age) {
//     let person = Object.create(personMethods);
//     person.name = name;
//     person.age = age;

//     return person;
// }

// const sakib = new Person('Sakib', 29);
// const tamim = new Person('Tamim', 30);

// console.log(sakib)

// So here we use object.create to write more efficient code.
// Now we can develop our concept in the next level.

// Here is a good point. We can create object by using a reference of another object. 
// Which is not so cool. So, isn't there any way to do that without referencing another object in JS?
// Of course, and that is prototype. We'll learn that now. 

// function test() { }
// console.log(test.prototype);
// console.dir(test)

// So prototype is nothing but a property of a function,
// which points of an object.

// Prototypical way

// Constructor Function
function Person(name, age) {
    let person = Object.create(Person.prototype);
    // Parent er property k inherit kore niye ashlam. Just using prototype
    person.name = name;
    person.age = age;

    return person;
}

// using prototype

Person.prototype = {
    eat() {
        console.log('Person is eating');
    },
    sleep() {
        console.log('Person is sleeping');
    },
    play() {
        console.log('Person is playing');
    }
}

const sakib = Person('Sakib', 29);
console.log(sakib);
const tamim = new Person('Tamim', 30);
console.log(tamim)

// Learing
// 1. Constructor Function. 
// 2. How to add method in constructor function prototype
// 3. To inherit some property from parent, we used Object.create 


// Now we can omit Object.create by using new keyword in frot of Object creation. 


function PersonWithNew(name, age) {
    // let person = Object.create(PersonWithNew.prototype);
    // let this = Object.create(PersonWithNew.prototype);
    // JS omit prev line, when we using new keyword. and name this person variable as 'this'
    this.name = name;
    this.age = age;

    // return person;
    // also omit this return, when we are using new keyword.
}

PersonWithNew.prototype = {
    eat() {
        console.log('Person is eating');
    },
    sleep() {
        console.log('Person is sleeping');
    },
    play() {
        console.log('Person is playing');
    }
}

const rubel = new PersonWithNew('Rubel', 29);
console.log(rubel);
const musfiq = new PersonWithNew('Musfiq', 30);
console.log(musfiq);


// Now intruducing "Class" in ES6-2015


// constructor function

class PersonWithClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() { console.log('Person is eating'); };

    sleep() { console.log('Person is sleeping'); };

    play() { console.log('Person is playing'); };
}

const taskin = new PersonWithClass('Taskin', 29);
console.log(taskin);
const soummo = new PersonWithClass('Soummo', 30);
console.log(soummo);


// Real Example

let persons = [];
// same as 
let personss = new Array();

console.log(Array.prototype);
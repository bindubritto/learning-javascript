// Way-1

// var f = function Person() { };

// Object.prototype.sabbir = function () {
//     console.log('Hello from Sabbir');
// }

// var p = {};

// p.sabbir();
// console.dir(p);

// Way-2  Prototype based Inheritance

// Parent
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Sub
// function Cricketer(name, age, type, country) {
//     Person.call(this, name, age);
//     this.type = type;
//     this.country = country;
// }


// Person.prototype = {
//     eat: function () {
//         console.log(`${this.name} is eating`);
//     }
// }

// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;
// constructor over-write kora holo. cause default constructor call a Person.call(this)
// eita nai. So Cricketer er object create korar jonno jehetu amader person er property lagbei, 
// ei jonno amra ei kaj ta korlam. 
// Cricketer.prototype.play = function () {
//     console.log(`${this.name} is playing`);
// }

// let sakib = new Cricketer('Sakib', 30, 'Alrounder', 'Bangladesh');
// console.log(sakib.age);
// sakib.play();


// Class based Inheritance

// Parent class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         console.log(`${this.name} is eating`);
//     }
// }

// Sub class
// class Cricketer extends Person {
//     constructor(name, age, type, country) {
//         super(name, age);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     play() {
//         console.log(`${this.name} is playing`);
//     }
// }


// let sakib = new Cricketer('Sakib', 30, 'Alrounder', 'Bangladesh');
// console.log(sakib.age);
// sakib.play();
// sakib.eat();



// Now we're moving into getter, setter

class Person {
    constructor(name, age) {
        this.name = name; // Property
        this.age = age;
    }
    eat() { // Method
        console.log(`${this.name} is eating`);
    }

    // Getter method. Behave like method but need to call like property
    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }
}

let sakib = new Person('Sakib', 30);
console.log(sakib.getName);
sakib.setName = 'Tamim';
console.log(sakib.name);

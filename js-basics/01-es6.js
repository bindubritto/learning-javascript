const obj = {
    player: 'bobby', 
    age: 18, 
    wizardLevel: true
}

const player = obj.player;
const age = obj.age;
let wizardLevel = obj.wizardLevel;

// Same as above. This is called destructing. 
const { player, age } = obj;
let { wizardLevel } = obj;


// Declaring object property in a new way. 

// Dynamic key or property. it would be string, number etc.
const name = 'john snow';

const obj = {
    [name]: 'hello', 
    [1 + 2]: 'hihi'
}

//New style. If property and value name is same, then one will be omitted. No problem. 

const a = "Simon";
const b = true;
const c = {};

// Way-1
const obj1 = {
    a: a, 
    b: b, 
    c: c
}

// Way - 2. Both are same. 
const obj2 = {
    a,
    b,
    c
}


// Template String. 

const namee = "sabbir";
const agee = 25;
const pet = "horse";

const greeting = "Hello" + namee + " you seem to be " + agee;

// New way of doing 
const greetingBest = `Hello ${namee} you seem to be ${agee}`;


// Symbol data type

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// sym2 and sym3 are different. 



// Arrow function 

function add1(a, b) {
    return a + b;
}

// Same as above.
const add2 = (a, b) => {
    return a + b;
}

// Same as above.
const add3 = (a, b) => a + b;
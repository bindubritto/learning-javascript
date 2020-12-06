// ex-1
// console.log(a);
// var a = 'hi';

// ex-2 
// var a;
// console.log(a);
// a = 'hi';

// ex-3 using let
// console.log(b);
// let b = 'helo';

// ex-4

// let LANG = "Java";
// let lang = "JavaScript";

// function getLang() {
//     if (!lang) {
//         let lang = LANG;
//     }
//     return lang;
// }

// console.log(`I love ${getLang()}`);

// hoisting er jonno var lang ta function
// scope er sob theke upore exist kore. 
// ei jonno seikhane undefined assign hoye geche. 
// and if block ta true hoye, JAVA assign hoyche.


// ex-5

// myFunc();
// function myFunc() {
//     console.log('I love JavaScript');
// }

// Hoisting er jonnoi amra function define korar agei
// call korte parci. cause eita hoisting hoye upore uthe jay.

// ex-6

function hello() {
    lang = "JS";
    let lang;
    console.log(lang);
}

hello();
console.log(lang);
var lang;
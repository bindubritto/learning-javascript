// implicit binding
// explicit binding 
// new binding 
// window binding


// 1. Implicit binding

// let sakib = {
//     name: "Sakib",
//     age: 35,
//     printPlayerName: function () {
//         console.log(this.name);
//     }
// }

// sakib.printPlayerName();


var printPlayerNameFunction = function (obj) {
    obj.printPlayerName = function () {
        console.log(this.name);
    }
}

let sakib = {
    name: "Sakib",
    age: 35,
}

let tamim = {
    name: "Tamim",
    age: 35,
}

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);
sakib.printPlayerName();
tamim.printPlayerName();
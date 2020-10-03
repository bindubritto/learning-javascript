const array = [2, 3, 4, 5];

const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log(double);

// map, filter, reduce.

// map is different from forEach. It always have  to return something. Never mutate the old array. It always generate new array.


// const mapArray = array.map((num) => {
//     return num * 2; 
// });


// Short hand for single parameter return.
const mapArray = array.map(num => num * 2);

console.log(mapArray)
const array = [2, 3, 4, 5];

// const double = [];

// const newArray = array.forEach((num) => {
//     double.push(num * 2);
// })

// console.log(double);

// map, filter, reduce.

// map is different from forEach. It always have  to return something. 

// const mapArray = array.map((num) => {
//     return num * 2; 
// });


const mapArray = array.map(num => num * 2);

console.log('map', mapArray)



// To filter an array by using some conditions. It just filtering

// const filterArray = array.filter((num) => {
//     return (num%2 == 0);
// })

// shorthand

const filterArray = array.filter(num => num%2==0);

console.log('filter', filterArray);

// Map and filter both can be done using reduce. 
// There is a term accumulator, which is necessary for reduce. 

const reducedArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reducedArray);

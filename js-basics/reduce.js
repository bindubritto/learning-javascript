// Map and filter both can be done using reduce. 

// There is a term accumulator, which is necessary for reduce. 

const array = [2, 3, 4, 5];

const reducedArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log(reducedArray);
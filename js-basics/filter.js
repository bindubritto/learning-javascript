const array = [2, 3, 4, 5];

// To filter an array by using some conditions. It just filtering

// const filterArray = array.filter((num) => {
//     return (num%2 == 0);
// })

// shorthand

const filterArray = array.filter(num => num%2==0);

console.log(filterArray);

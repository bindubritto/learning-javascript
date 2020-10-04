const array = [1, 2, 3, 4, 6, 7, 8, 10];

const result = array.find(x => x > 10);
const result2 = array.filter(x => x > 4);

console.log(result2)
console.log(result);

// Filet array return kore. 
// find return kore j at first a condition fulfill kore. noyto undefined return kore. 
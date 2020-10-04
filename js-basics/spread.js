const age1 = [10, 15, 20];
const age2 = [22, 34, 53];
const age3 = [11, 19, 35, 24, 23];
const allAges1 = [age1, age2, age3];
console.log(allAges1);
const allAges2 = [...age1, ...age2, ...age3];
console.log(allAges2);
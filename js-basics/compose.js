// Compose means - The act of putting 2 function together to form a third function, 
// where the output of one function is the input of the other. 

// Compose 
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => num + 1;

console.log(compose(sum, sum)(5));
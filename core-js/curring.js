// Curring

// A process of converting a fuction that takes multiple arguments
// that takes one at a time. 

const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;

console.log(curriedMultiply(3));
console.log(curriedMultiply(3)(4)); // 12

// Use cases. we can extend our power by curring a function. 
// If I want to multiply by any nubmer by five, i can do this this way. 

const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(6)); // It will 30. 
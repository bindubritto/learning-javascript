const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 100
}

// 1
// for (let i = 0; i < basket.length; i++ ) {
//     console.log(basket[i]);
// }

// 2
// basket.forEach(item => {
//     console.log(item);
// })

// 3  for of
// Iterating. Go through a list one by one. JS provide us which is iterables. 
// Array, strings are iterable things. 
for (item of basket) {
    console.log(item);
}


// 4 for in => loop works with object. It loop over and see the object property.
// enumerating - object. Properties of an object are enumurable. 

for (item in detailedBasket) {
    console.log(item);
}
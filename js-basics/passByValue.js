let obj1 = { a: 'a', b: 'b', c: {deep: 'I am very deep'} };

let copy = obj1;


// shallow cloning
let obj2 = Object.assign({}, obj1);
let obj3 = { ...obj1 };
let deepClone = JSON.parse(JSON.stringify(obj1));

obj1.c.deep = 'hahahhaha';

console.log('main', obj1);
console.log('copy', copy);
console.log('obj assign', obj2);
console.log('spread', obj3);
console.log('deepClone', deepClone);

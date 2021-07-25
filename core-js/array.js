var array = [1, 2, 3, 4, 5];
console.log(array)

// Push and Pop works in back side. 

array.push(6);
console.log(array);

array.pop();
console.log(array)

// Unshift and shift works in front side.

array.unshift(0);
console.log(array);

array.shift();
console.log(array);

// Slice return a new object of array. Not affect the main array. 

var slicedArray = array.slice(2, 4);
console.log('slicedArray ' + slicedArray);
console.log('Main Array', array);

// Splice effect the array. 

Array.splice( index, remove_count, item_list )
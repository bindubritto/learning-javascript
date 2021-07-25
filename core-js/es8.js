'sabbir'.padStart(5);
'sabbir'.padEnd(12);


// Object.entries
// Object.values
// Object.keys


let obj = {
    username0: 'Santa', 
    username1: 'Rudolf', 
    username2: 'Sabbir'
}

Object.keys(obj).forEach((keeey, index) => {
    console.log(keeey, obj[keeey]);
});

Object.values(obj).forEach(val => {
    console.log(val);
})


// Return us an array. So we can use, map, filter, reduce. 
Object.entries(obj).forEach(val => {
    console.log(val);
});

// use cases 
Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
})
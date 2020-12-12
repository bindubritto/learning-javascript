// Step - 01 // simple callback not handling async behavior

// const processOrder = (customer) => {
//     console.log('2. Process order for customer 1');

//     setTimeout(() => {
//         console.log('3. Cooking completed');
//     }, 3000);

//     console.log('4. Order processed for customer 1');

// }

// console.log('1. Take order for customer 1');
// processOrder();
// console.log('5. Complete order for customer 1');


// Step - 02 // Better use of callback

// const takeOrder = (customer, callback) => {
//     console.log(`1. Take order for ${customer}`);
//     callback(customer);
// }

// const processOrder = (customer, callback) => {
//     console.log(`2. Order processing for ${customer}`);

//     setTimeout(() => {
//         console.log('3. Cooking completed');
//         console.log(`4. Order processed for ${customer}`);
//         callback(customer);

//     }, 3000);

// }

// const completeOrder = (customer) => {
//     console.log(`5. Order finally completed for ${customer}`)
// }


// // Now calling
// takeOrder('Customer 1', (hello) => {
//     processOrder(hello, (hi) => {
//         completeOrder(hi);
//     })
// });


// console.log('hello brother');



// Step - 03

// Promise

// Kichu korar ekta promise, jodi kono ekta condition true hoy.
// It mainly use to async request/operation more managable. 

// In JS, jodi promise rakha possible hoy, tahole amra boli 
// promise has been resolved otherwise promise has been rejected.

const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical meeting',
            place: 'Google Meeting',
            time: '10 P.M'
        }
        resolve(meetingDetails);
    } else {
        reject(new Error('meeting already scheduled!!'));
    }
});

// In order to use promise, we need to use .then() and .catch()

console.log(meeting);
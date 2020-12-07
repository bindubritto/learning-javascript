normalPeople = {
    name: 'kalam',
    age: 25,
    salary: 20000,
    chargeBill: function (amount) {
        this.salary = this.salary - amount;
        // console.log('this', this);
        //return this.salary;
    }
};

heroPeople = {
    name: 'balam',
    age: 26,
    salary: 25000,
}


// Bind 
// Bind return function. 
// const heroChargeBill = normalPeople.chargeBill.bind(heroPeople);
// heroChargeBill(200);
// console.log('hero people', heroPeople);

// Call, this works directly. not borrowing things. 
// normalPeople.chargeBill.call(heroPeople, 450);
// console.log(heroPeople);

// apply 

normalPeople.chargeBill.apply(heroPeople, [3000]);
console.log(heroPeople);
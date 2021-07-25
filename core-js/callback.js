function explain_callback(name, age, task) {
    console.log(name);
    console.log(age);
    task();
}

function washHand() {
    console.log('Wash your hand');
}

function takeShower() {
    console.log('Take shower first');
}

function scrollFacebook() {
    console.log('Scrolling facebook');
}

explain_callback('Abul', 13, washHand);
explain_callback('Babul', 15, takeShower);
explain_callback('Kabul', 20, scrollFacebook);


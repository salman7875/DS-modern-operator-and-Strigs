'use strict';

const rest1 = {
    name: 'Laziz',
    numGuest: 0,
}

const rest2 = {
    name: 'Jumbo',
    owner: 'Doctor',
}

// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// OR Assignment Operator
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// Nullish Assignment Operator
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// AND Assignment Operator
// rest2.owner = rest2.owner = 'Anonymous'; 
rest1.owner &&= 'Anonymous'; 
rest2.owner &&= 'Anonymous'; 

console.log(rest1);
console.log(rest2);
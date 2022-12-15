'use strict';

const restaurent = {
    name: 'Bella',
    location: 'Mumbai',
}

console.log('---- OR Operator ----');
// use ANY data type, return ANT data type, short-circuiting
console.log('Doctor' || 3);   // Return the FIRST truthy value
console.log('' || 'Doctor');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || '' || 0 || 'Hey' || null || 23);

// Practical Example
restaurent.numGuest = 0;
const guest1 = restaurent.numGuest ? restaurent.numGuest : 10;
console.log(guest1);

const guest2 = restaurent.numGuest || 10;
console.log(guest2);

console.log('---- AND Operator ----');

console.log(0 && 'Doctor');   // Return the FIRST falsy value
console.log('hey' && 'Doctor');   // Doctor 
console.log(23 && null && 'hey' && 'Doctor'); 

if (restaurent.orderPizza) {
    restaurent.orderPizza();
}

restaurent.orderPizza && restaurent.orderPizza('chicken');
'use strict';

const orderSet = new Set(['Pasta', 'Pizza', 'Burger', 'Pizza', 'Risotto']);
console.log(orderSet);

console.log(orderSet.size);

console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

orderSet.delete('Pasta');
// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) {
    console.log(order);
}

// Example
const staff = ['Chef', 'Waiter', 'Manager', 'Waiter', 'Chef', 'Waiter'];
// const staffUnique = new Set(staff);
const staffUnique = [...new Set(staff)];   // Converting to Array
console.log(staffUnique);
console.log(`We have ${staffUnique.size} Categories of Staff.`);

console.log(new Set('doctorxddcxNotdoctorFTW').size);
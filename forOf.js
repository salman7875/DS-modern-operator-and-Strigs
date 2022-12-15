'use strict';

const menu = ['Rice', 'Noodles', 'Triple Noodles', 'Chopar Rice', 'Burger', 'Pizza', 'Fries'];

// Just Looping
for (const item of menu) console.log(item);

// To get Index also
for (const [i, item] of menu.entries()) {
    // console.log(`${item[0] +1}: ${item[1]}`);
    console.log(`${i + 1}: ${item}`);
}
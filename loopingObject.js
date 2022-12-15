'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[2 + 3]]: {
        open: 0,   // Open 24 Hours
        close: 24,
    },
}

const restaurent = {
    name: 'Classico Italiano',
    location: 'Maharashtra Mumbai Santacruz, India',
    categories: ['Mughlai', 'Chinese', 'Italiano', 'Vegetarian'],
    starterMenu: ['Fried Rice', 'Chicken', 'Garlic Bread', 'Chana Masala'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours,   
    orderDelivery({  
        starterIndex = 1,
        mainIndex = 0,
        time = '22:00',
        address,
    }) {
        console.log(`Order Recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    order(startIndex, mainIndex) {
        return [this.starterMenu[startIndex], this.mainMenu[mainIndex]];
    },

    orderPasta(ing1, ing2, ing3, ing4) {
        console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3} ${ing4}`);
    },

    orderPizza(mainIngredient, ...otherIngredient) {
        console.log(mainIngredient);
        console.log(otherIngredient);
    },
}

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);  // Array

let openStr = `We are Open on ${properties.length} days: `;

// Looping Over Properties
for (const day of properties) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
    // console.log(key, open, close);
    console.log(`On ${key}, we open at ${open} and close at ${close}`);
}
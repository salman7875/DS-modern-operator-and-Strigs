'use strict';

const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
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

if (restaurent.openingHours.mon) {
    console.log(restaurent.openingHours.mon.open);
}

console.log(restaurent.openingHours.mon?.open); 
console.log(restaurent.openingHours?.mon?.open); 

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurent.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, We Open at ${open}`);
}

// Methods
console.log(restaurent.order?.(0, 1) ?? 'Method Does Not Exist');
console.log(restaurent.orderChilli?.(0, 1) ?? 'Method Does Not Exist');

// Arrays: to check if array is empty?
const user = [{ name: 'Doctor', email: 'doctor@gmail.com' }];
console.log(user[0]?.name ?? 'User Array Empty');
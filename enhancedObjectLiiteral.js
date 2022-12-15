'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// 1
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
    openingHours,   // 1
    orderDelivery({  // 2
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
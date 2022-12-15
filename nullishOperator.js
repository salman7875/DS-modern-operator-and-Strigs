'use strict';
const restaurent = {
    name: 'Bella',
    location: 'Mumbai',
}

restaurent.numGuest = 0;
const guest2 = restaurent.numGuest || 10;
console.log(guest2);

// Nullish Value: null and undefined (Not 0 or '')
const guestCorrect = restaurent.numGuest ?? 10;
console.log(guestCorrect);
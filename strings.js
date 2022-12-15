'use strict';

const airline = 'Air India';
const plane = 'A320';

const checkMiddleSeats = function(seat) {
    // B and E are Middle Seats
    const check = seat.slice(-1);
    if (check === 'B' || check === 'E') console.log(`You've got middle seat.`);
    else console.log(`You've got corner seat.`);
}
checkMiddleSeats('11B');
checkMiddleSeats('23C');
checkMiddleSeats('3E');

console.log('---- Part 2 ----');

const correctStr = function(str) {
    const c1 = str[0].toUpperCase() + str.slice(1).toLowerCase();
    console.log(c1);
}
correctStr('dOCtOR');
correctStr('dOCtOR xD');

const correctEmail = function(email) {
    const c1 = email.toLowerCase().trim();
    console.log(c1);
} 
correctEmail(' Imsalman76@gmail.com    ');
correctEmail('      imsalMAn76@gmail.com\n');

const capitalizeName = function(name) {
    const names = name.toLowerCase().split(' ');
    const nameUpper = [];
    for (const n of names) {
        nameUpper.push(n[0].toUpperCase() + n.slice(1));    
    }

    console.log(nameUpper.join(' '));
}
capitalizeName('doctor xd');
capitalizeName('jonas schmedtman');

const masking = function(number) {
    const str = String(number);
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}
console.log(masking(12345678));
console.log(masking(12345678762179));
console.log(masking('12345678762179892318'));
'use strict'

// set Method UPDATE the map and RETURN it.
const rest = new Map()
rest.set('name', 'Laziz')
rest.set(1, 'Santacruz, Mumbai')
console.log(rest.set(2, 'Bandra, Mumbai'))

rest
  .set('categories', ['Mughlai', 'Chinese', 'Italiano', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are Open :D')
  .set(false, 'We are Close :(')

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));

console.log(rest.has('categories'));
console.log(rest.delete(2));
console.log(rest);
console.log(rest.size);
// console.log(rest.clear());

// Array as Key
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

// Object as Key
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log('------ NEW SECTION ------');
// More on MAPS
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try Again!'],
]);
console.log(question);

// QUIZ GAME
// Looping Over Map
console.log(question.get('question'));
for (const [k, v] of question) {
    if (typeof k === 'number') {
        console.log(`${k}: ${v}`);
    }
}
// const answer = Number(prompt('You Answer.'));
// console.log(question.get(question.get('correct') === answer));

// Convert Map to Array
const mapArr = [...question];
console.log(mapArr);
console.log([...mapArr.entries()]);
console.log(mapArr.keys());
console.log(mapArr.values());
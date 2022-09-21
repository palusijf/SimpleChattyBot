const input = require('sync-input');

console.log("Hello! My name is Aid.");
console.log("I was created in 2022.");
console.log("Please, remind me your name.");

let name = input();
console.log(`What a great name you have, ${name}!`);

console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

let remainder3 = input();
let remainder5 = input();
let remainder7 = input();

let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;
console.log(`Your age is ${age}; that's a good time to start programming!`)

console.log("Now I will prove to you that I can count to any number you want.");
let number = input();

for (let i = 0; i <= number; i++) {
    console.log(`${i} !`);
}
console.log(`Let's test your programming knowledge.
Why do we use methods?`);

console.log(`1. To repeat a statement multiple times.
2. To decompose a program into several small subroutines.
3. To determine the execution time of a program.
4. To interrupt the execution of a program.`);

let choice = 0;

while ((choice) !== 2) {
    choice = Number(input());
    if (choice === 2)
        break;
    else
        console.log("Please, try again.");
}
console.log("Congratulations, have a nice day!");
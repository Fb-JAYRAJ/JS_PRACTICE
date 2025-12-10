// Concepts: map, filter, reduce, find, forEach
// Using the same array for all

const numbers = [10, 25, 40, 55, 70, 85];

// Q1. map()
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled:", doubled);
// [20,50,80,110,140,170]

// Q2. filter()
const greater50 = numbers.filter(function(num) {
    return num > 50;
});
console.log("Greater than 50:", greater50);
// [55,70,85]

// Q3. reduce()
const total = numbers.reduce(function(acc, cur) {
    return acc + cur;
}, 0);
console.log("Sum:", total);
// 285

// Q4. find()
const divisible5 = numbers.find(function(num) {
    return num % 5 === 0;
});
console.log("Divisible by 5:", divisible5);
// 10

// Q5. chain
const chained = numbers
    .filter(function(num) { return num % 2 === 0; })
    .map(function(num) { return num * 2; });

console.log("Chained:", chained);
// [20,80,140]
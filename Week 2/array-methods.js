// Concepts: map, filter, reduce, find, forEach

// Q1.	Use .map() to double all numbers in an array.
const numbers = [10, 25, 40, 55, 70, 85];
const doubledNumbers = numbers.map(num => num * 2);
console.log('Doubled Numbers:', doubledNumbers);
// Doubled Numbers: [20, 50, 80, 110, 140, 170]

// Q2.	Use .filter() to find numbers greater than 50.
const filteredNumbers = numbers.filter(num => num > 50);
console.log('Numbers Greater Than 50:', filteredNumbers);
// Numbers Greater Than 50: [55, 70, 85]

// Q3.	Use .reduce() to find the sum of all numbers.
const sumOfNumbers = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log('Sum of All Numbers:', sumOfNumbers);
// Sum of All Numbers: 285

// Q4.	Use .find() to get the first number divisible by 5.
const divisibleBy5 = numbers.find(num => num % 5 === 0);
console.log('First Number Divisible by 5:', divisibleBy5);
// First Number Divisible by 5: 10

// Q5.	Chain multiple methods — filter even numbers, then double them.
const chainedResult = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2);
console.log('Chained Result (Even Numbers Doubled):', chainedResult);
// Chained Result (Even Numbers Doubled): [20, 80, 140]
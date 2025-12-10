// Concepts: Creating arrays, accessing elements, loops with arrays

// Q1. Create an array of 10 numbers and print them.
let numbers = [5, 12, 8, 20, 33, 7, 14, 2, 19, 25];
console.log("Array elements:", numbers);
// [5,12,8,20,33,7,14,2,19,25]

// Q2. Find the sum of all numbers in an array.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum:", sum);
// Sum: 145

// Q3. Find the maximum and minimum element.
let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
}
console.log("Max:", max);
console.log("Min:", min);
// Max: 33, Min: 2

// Q4. Reverse an array manually.
let reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversed.push(numbers[i]);
}
console.log("Reversed:", reversed);
// [25,19,2,14,7,33,20,8,12,5]

// Q5. Count how many elements are even.
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenCount++;
    }
}
console.log("Even count:", evenCount);
// Even count: 5
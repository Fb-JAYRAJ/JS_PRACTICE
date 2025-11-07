// Concepts: Creating arrays, accessing elements, loops with arrays
// Using the same array created in Q1 for rest of the questions

// Q1.	Create an array of 10 numbers and print them.
let numbers = [5, 12, 8, 20, 33, 7, 14, 2, 19, 25];
console.log("Array elements are",numbers);
// Array elements are: [5, 12, 8, 20, 33, 7, 14, 2, 19, 25]

// Q2.	Find the sum of all numbers in an array.
let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log("Sum of array elements is", sum);
// Sum of array elements is: 145

// Q3.	Find the maximum and minimum element.
let max = numbers[0];
let min = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
    if(numbers[i] < min){
        min = numbers[i];
    }
}
console.log("Maximum element is", max);
console.log("Minimum element is", min);
// Maximum element is: 33
// Minimum element is: 2

// Q4.	Reverse an array manually.
let reversedArray = [];
for(let i=numbers.length-1; i>=0; i--){
    reversedArray.push(numbers[i]);
}
console.log("Reversed array is", reversedArray);
// Reversed array is: [25, 19, 2, 14, 7, 33, 20, 8, 12, 5]

// Q5.	Count how many elements are even.
let evenCount = 0;
for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 === 0){
        evenCount++;
    }
}
console.log("Count of even elements is", evenCount);
// Count of even elements is: 5
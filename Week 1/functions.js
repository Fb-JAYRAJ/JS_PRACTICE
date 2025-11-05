// Concepts: Function declaration, return values, parameters, arrow functions


// Q1.	Create a function that adds two numbers and returns the sum.
function addNumbers(a, b){
    return a + b;
}
console.log(addNumbers(5, 10)); // Example 

// Q2.	Write a function that checks if a number is prime.
function isPrime(num){
    if(num <= 1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7)); // Example 

// Q3.	Create a function that finds the largest among three numbers.
function largestOfThree(a, b, c){
    if(a >= b && a >= c){
        return a;
    } else if(b >= a && b >= c){
        return b;
    } else{
        return c;
    }
}
console.log(largestOfThree(10, 20, 15)); // Example

// Q4.	Write a function that takes a name and returns a greeting.
function greet(name){
    return "Hello, " + name + "!";
}
console.log(greet("Jayraj")); // Example

// Q5.	Create a function to calculate the area of a rectangle.
function areaOfRectangle(length, width){
    return length * width;
}
console.log(areaOfRectangle(5, 10)); // Example

// Q6.	Convert a normal function to an arrow function.
const multiplyNumbers = (a, b) => {
    return a * b;
};
console.log(multiplyNumbers(5, 10)); // Example

// Q7.	Write a function that reverses a string.
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("Jayraj")); // Example
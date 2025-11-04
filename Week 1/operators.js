// Concepts: Arithmetic, Assignment, Comparison, Logical, Ternary

// Q1.	Write a program using all arithmetic operators (+, -, *, /, %, **).
var a = 10;
var b = 3;

var sum=a+b; // Addition
var difference=a-b; // Subtraction
var product=a*b; // Multiplication
var quotient=a/b; // Division
var remainder=a%b; // Modulus
var power=a**b; // Exponentiation

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
console.log("Power: " + power);


// Q2.	Use compound assignment (+=, -=, etc.) to modify a number.
var num = 5;
num +=5; // num = num + 5
console.log("After += 5: " + num);
num -=2; // num = num - 2
console.log("After -= 2: " + num);
num *=3; // num = num * 3
console.log("After *= 3: " + num);
num /=4; // num = num / 4
console.log("After /= 4: " + num);
num %=3; // num = num % 3
console.log("After %= 3: " + num);
num **=2; // num = num ** 2
console.log("After **= 2: " + num);


// Q3.	Compare two numbers using all comparison operators.
var x = 7;
var y = 10;
console.log("x == y: " + (x == y)); // Equal to
console.log("x != y: " + (x != y)); // Not equal to
console.log("x > y: " + (x > y)); // Greater than
console.log("x < y: " + (x < y)); // Less than
console.log("x >= y: " + (x >= y)); // Greater than or equal to
console.log("x <= y: " + (x <= y)); // Less than or equal to


// Q4.	Use logical operators (&&, ||, !) in a condition.
var adult = true;
var  id= false;
if(adult && id){ // both conditions must be true
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}

var weekend = false;
var holiday = true;
if(weekend || holiday){ // at least one condition must be true
    console.log("You can relax today.");
} else {
    console.log("You have to work today.");
}

var isRaining = false;
if(!isRaining){ // negation
    console.log("You can go for a walk.");
} else {
    console.log("Stay indoors.");
}   


// Q5.	Write a ternary statement to check if a number is even or odd.
var num=5;
var result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);


// Q6.	Check if a user is eligible to vote (age >= 18 and isCitizen == true).
var age = 15;
var isCitizen = true;
if(age >= 18 && isCitizen){
    console.log("Eligible to vote.");
} else {
    console.log("Not eligible to vote.");
}

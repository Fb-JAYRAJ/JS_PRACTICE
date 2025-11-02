// Q1. Declare 5 variables (string, number, boolean, null, undefined) and log their types.

let var1 = "HELLO WORLD";
console.log(var1, typeof var1); // string

let var2 = 42;
console.log(var2, typeof var2); // number

let var3 = true;
console.log(var3, typeof var3); // boolean

let var4 = null;
console.log(var4, typeof var4); // object

let var5;
console.log(var5, typeof var5); // undefined


// Q2.	Reassign a variable declared with let and var; try reassigning a const.

let variable="START";
console.log(variable); // START

variable="UPDATED";
console.log(variable); // UPDATED

var anotherVariable = 10;
console.log(anotherVariable); // 10

anotherVariable = 20;
console.log(anotherVariable); // 20


// Q3.	Swap two numbers using a temporary variable.

let a=10;
let b=20;
let temp;
temp=a;
a=b;
b=temp; 
console.log(a,b); // 20 10


// Q4.	Create constants for your name, age, and city and print a sentence using template literals.

const name="JAYRAJ SAWANT";
const age=21;
const city="MUMBAI";
console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`); // My name is JAYRAJ SAWANT, I am 21 years old and I live in MUMBAI.


// Q5.	Create a variable without assigning a value, then assign it later and print before and after.
let unassignedVar;
console.log(unassignedVar); // undefined

unassignedVar="VALUE";
console.log(unassignedVar); // VALUE
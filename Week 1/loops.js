// Concepts: for, while, do-while, nested loops, break, continue


// Q1.	Print numbers from 1–10 using all three loop types.
// Using for loop
for(let i=1; i<=10; i++){
    console.log(i);
}

// Using while loop
let j=1;
while(j<=10){
    console.log(j);
    j++;
}

// Using do-while loop
let k=1;
do{
    console.log(k);
    k++;
}while(k<=10);

// Q2.	Print even numbers between 1–50.
for(let i=1; i<=50; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
// Q3.	Calculate the factorial of a number.
let number = 5;
if (number >= 0) { // factorial is defined for 0 and positive numbers
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    console.log("Factorial of " + number + " is " + factorial);
} else {
    console.log("Invalid Number");
}
// Q4.	Display the multiplication table of 7.
for(let i=1; i<=10; i++){
    console.log(7 * i);
}
// Q5.	Find the sum of numbers from 1–100.
let sum=0;
for(let i=1; i<=100; i++){
    sum += i;
}
console.log("Sum is " + sum);

// Q6.	Print a triangle pattern using *.
for(let i=1; i<=5; i++){
    let row="";
    for(let j=1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}
// Q7.	Use break to stop a loop at 5, and continue to skip 3.
for(let i=1; i<=10; i++){
    if(i === 3){
        continue;
    }
    if(i === 5){
        break;
    }
    console.log(i);
}
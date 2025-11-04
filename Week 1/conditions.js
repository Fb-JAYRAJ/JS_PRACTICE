// Concepts: if, else if, else, switch, nested conditions

// Q1.	Check if a number is positive, negative, or zero.
let num=-5;
if(num>0){
    console.log("Positive");
}
else if(num<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

// Q2.	Print “Grade A/B/C” based on marks entered by the user.
let marks=85;
if(marks>=90){
    console.log("Grade A");
}
else if(marks>=75){
    console.log("Grade B");
}
else if(marks>=60){
    console.log("Grade C");
}

// Q3.	Check if a year is a leap year.
let year=2020;
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// Q4.	Use switch to print the name of a weekday (1–7).
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Q5.	Create a simple login check using two variables (username, password).
let username="Jayraj";
let password="Jayraj123";
if(username==="Jayraj" && password==="Jayraj123"){
    console.log("Login successful");
} else {
    console.log("Invalid username or password");
}

// Q6.	Check whether a number is divisible by both 3 and 5
let number=15;
if(number % 3 === 0 && number % 5 === 0){
    console.log(number + " is divisible by both 3 and 5.");
} else {
    console.log(number + " is not divisible by both 3 and 5.");
}
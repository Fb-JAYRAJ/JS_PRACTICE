// Concepts: Destructuring, spread, rest, looping objects

let student = {
    name: "Jayraj",
    age: 20,
    city: "Mumbai"
};

// Q1. Destructure
let { name, age } = student;
console.log(name, age);

// Q2. Merge two objects
let extra = { marks: 90 };
let merged = { ...student, ...extra };
console.log(merged);

// Q3. Create a copy and modify
let copy = { ...student };
copy.city = "Pune";
console.log(copy);

// Q4. Loop through keys
for (let key in student) {
    console.log(key, student[key]);
}

// Q5. Count properties
let count = Object.keys(student).length;
console.log("Count:", count);
// 3
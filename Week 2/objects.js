// Concepts: Object creation, accessing properties, nested objects

// Q1. Create an object
let student = {
    name: "Jayraj",
    age: 20,
    marks: 85
};

// Q2. Access properties
console.log(student.name);
console.log(student.age);
console.log(student.marks);

// Q3. Add a new property
student.city = "Mumbai";
console.log(student.city);

// Q4. Delete a property
delete student.marks;
console.log(student);

// Q5. Nested object
student.address = {
    street: "Main Road",
    pin: 400001
};

console.log(student.address.street);
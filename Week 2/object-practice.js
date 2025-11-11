// Concepts: Destructuring, spread/rest, looping through objects


//Q1.	Destructure properties from a student object.
const student = {
    name: "Jayraj Sawant",
    age: 20,
    major: "Computer Science",
    cgpa: 9.2
};

const { name, age, major, cgpa } = student;
console.log(name); // Jayraj Sawant
console.log(age);  // 20
console.log(major); // Computer Science
console.log(cgpa);  // 9.2

//Q2.	Merge two objects using the spread operator.
const address = {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
};

const studentWithAddress = { ...student, ...address };
console.log(studentWithAddress);
/*
{
  name: 'Jayraj Sawant',
  age: 20,
  major: 'Computer Science',
  cgpa: 9.2,
  city: 'Mumbai',
  state: 'Maharashtra',
  country: 'India'
}
*/

//Q3.	Create a copy of an object and modify one key.
const updatedStudent = { ...student, cgpa: 9.5 };
console.log(updatedStudent);
/*
{
  name: 'Jayraj Sawant',
  age: 20,
  major: 'Computer Science',
  cgpa: 9.5
}
*/

//Q4.	Loop through keys using for...in.
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
/*
name: Jayraj Sawant
age: 20
major: Computer Science
cgpa: 9.2
*/

//Q5.	Count total properties in an object.
const propertyCount = Object.keys(student).length;
console.log(`Total properties in student object: ${propertyCount}`); // 4

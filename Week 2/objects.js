// Concepts: Object creation, accessing properties, nested objects

// Q1.	Create an object for a student with name, age, and marks.
const student = {
  name: 'Jayraj Sawant',
  age: 20,
  marks: 85
};
console.log('Student Object:', student);
// Student Object: { name: 'Jayraj Sawant', age: 20, marks: 85 }

// Q2.	Access and log each property.
console.log('Name:', student.name); // Name: Jayraj Sawant
console.log('Age:', student.age);   // Age: 20
console.log('Marks:', student.marks); // Marks: 85

// Q3.	Add a new property city.
student.city = 'Mumbai';
console.log('Updated Student Object:', student);
// Updated Student Object: { name: 'Jayraj Sawant', age: 20, marks: 85, city: 'Mumbai' }

// Q4.	Delete a property.
delete student.city;
console.log('After Deleting City:', student);
// After Deleting City: { name: 'Jayraj Sawant', age: 20, marks: 85 }

// Q5.	Create a nested object for address inside the student object.
student.address = {
  street: '123 Main Street',
  city: 'Mumbai',
  zip: '400001'
};
console.log('Student with Address:', student);
// Student with Address: { name: 'Jayraj Sawant', age: 20, marks: 85, address: { street: '123 Main Street', city: 'Mumbai', zip: '400001' } }
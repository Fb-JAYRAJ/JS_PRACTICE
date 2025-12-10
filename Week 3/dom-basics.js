// Concepts: Selecting and modifying DOM


// Q1.	Select an element by ID and change its text.
let myElement = document.getElementById('myElementId');
myElement.textContent = "New text content";


// Q2.	Change color of all <p> tags.
let paragraphs = document.getElementsByTagName('p');
for (let p of paragraphs) {
    p.style.color = 'blue';
}


// Q3.	Add a new <li> to a list.
let myList = document.getElementById('myListId');
let newListItem = document.createElement('li');
newListItem.textContent = "New List Item";
myList.appendChild(newListItem);


// Q4.	Remove an element by its ID.
let elementToRemove = document.getElementById('elementToRemoveId');
elementToRemove.parentNode.removeChild(elementToRemove);


// Q5.	Change the background color of the page.
document.body.style.backgroundColor = 'lightgray';
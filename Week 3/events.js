// Concepts: Event listeners, event handling

// Q1. Add a button that alerts "Hello JS!" when clicked.
const helloBtn = document.getElementById("helloBtn");
helloBtn.addEventListener("click", function() {
    alert("Hello JS!");
});

// Q2. Change text on hover.
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", function() {
    hoverText.textContent = "You hovered over me!";
});
hoverText.addEventListener("mouseout", function() {
    hoverText.textContent = "Hover over me";
});

// Q3. Show live character count as user types.
const inputField = document.getElementById("inputField");
const charCount = document.getElementById("charCount");

inputField.addEventListener("input", function() {
    charCount.textContent = inputField.value.length;
});

// Q4. Prevent a form from submitting.
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submission prevented");
});

// Q5. Toggle light/dark mode on button click.
const modeBtn = document.getElementById("modeBtn");
let darkMode = false;

modeBtn.addEventListener("click", function() {
    if (darkMode) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        darkMode = false;
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        darkMode = true;
    }
});
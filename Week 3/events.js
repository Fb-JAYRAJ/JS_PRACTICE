// Concepts: Event Listeners & Event Handling
// Outputs visible in index.html

document.addEventListener("DOMContentLoaded", () => {
  // Q1: Add a button that alerts “Hello JS!” when clicked.
  const btn = document.createElement("button");
  btn.textContent = "Click Me";
  btn.addEventListener("click", () => alert("Hello JS!"));
  document.body.append(btn);

  // Q2: Change text on hover.
  const hoverText = document.createElement("p");
  hoverText.textContent = "Hover over this text";
  hoverText.style.cursor = "pointer";
  document.body.append(hoverText);

  hoverText.addEventListener("mouseover", () => {
    hoverText.textContent = "You are hovering over the text!";
  });
  hoverText.addEventListener("mouseout", () => {
    hoverText.textContent = "Hover over this text";
  });

  // Q3: Show live character count as user types.
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type something...";
  const count = document.createElement("p");
  count.textContent = "Character Count: 0";
  document.body.append(input, count);
  input.addEventListener("input", () => {
    count.textContent = `Character Count: ${input.value.length}`;
  });

  // Q4: Prevent a form from submitting.
  const form = document.createElement("form");
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Submit Form";
  form.append(submit);
  document.body.append(form);
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Form submission prevented!");
  });

  // Q5: Create a button that toggles light/dark mode.
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Light/Dark Mode";
  document.body.append(toggle);
  toggle.addEventListener("click", () => {
    const dark = document.body.classList.toggle("dark-mode");
    toggle.textContent = dark ? "Switch to Light Mode" : "Switch to Dark Mode";
  });
});
// Simple mini todo app
// Features: add task, delete task, save to localStorage, restore on refresh

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

// load saved tasks from localStorage
function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved) {
    try {
      tasks = JSON.parse(saved);
    } catch (e) {
      tasks = [];
    }
  }
}

// save current tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// render all tasks in the <ul>
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const value = taskInput.value.trim();
  if (value === "") return;

  tasks.push(value);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// event listeners
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

// init
loadTasks();
renderTasks();
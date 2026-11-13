
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

// Add Task Function
function addTask() {
    const taskValue = taskInput.value.trim();

    // Input Validation
    if (taskValue === "") {
        message.innerText = "Please enter a task!";
        taskInput.focus();
        return;
    }

    message.innerText = "";

    // Create Task Item
    const li = document.createElement("li");
    li.classList.add("task-item");

    // Task Text
    const span = document.createElement("span");
    span.classList.add("task-text");
    span.innerText = taskValue;

    // Buttons Container
    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✓";
    completeBtn.classList.add("complete-btn");
    completeBtn.title = "Mark as completed";

    completeBtn.addEventListener("click", function () {
        li.classList.toggle("completed");
        updateCount();
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "✕";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.title = "Delete task";

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });

    // Append Elements
    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);

    // Clear Input
    taskInput.value = "";
    taskInput.focus();

    updateCount();
}

// Update Task Count
function updateCount() {
    const tasks = document.querySelectorAll(".task-item");
    const completed = document.querySelectorAll(".task-item.completed");

    totalTasks.innerText = tasks.length;
    completedTasks.innerText = completed.length;
}

// Add Task Button Event
addBtn.addEventListener("click", addTask);

// Enter Key Event
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Clear message while typing
taskInput.addEventListener("input", function () {
    message.innerText = "";
});

document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskinput"); // Correct ID for task input
    const addTask = document.getElementById("addtaskbutton"); // Correct ID for add task button
    const taskList = document.getElementById("tasklist"); // Correct ID for the task list

    let tasks = []; // Array to store tasks

    // Function to render tasks
    function renderTask() {
        taskList.innerHTML = ''; // Clear existing task list

        tasks.forEach((task, index) => {
            const taskItem = document.createElement("li"); // Corrected typo from taskiteam to taskItem
            taskItem.textContent = task;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                deleteTask(index); // Delete task when button is clicked
            });

            taskItem.appendChild(deleteButton); // Add delete button to task item
            taskList.appendChild(taskItem); // Add task item to task list
        });
    }

    // Function to add a task
    function addTask1() {
        const task = taskInput.value.trim(); // Get input value and trim spaces

        if (task) {
            tasks.push(task); // Add task to the array
            taskInput.value = ''; // Clear input field
            renderTask(); // Render the updated task list
        } else {
            alert("Please enter a task");
        }
    }

    // Function to delete a task
    function deleteTask(index) {
        tasks.splice(index, 1); // Remove task from array
        renderTask(); // Render the updated task list
    }

    // Event listener for adding a task when button is clicked
    addTask.addEventListener("click", addTask1);

    // Event listener for adding a task when "Enter" is pressed
    taskInput.addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            addTask1(); // Add task on Enter key press
        }
    });
});

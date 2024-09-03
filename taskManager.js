// taskManager.js
const fs = require("fs");
const path = "./tasks.json";

// Ensure the JSON file exists, otherwise create it
if (!fs.existsSync(path)) {
  fs.writeFileSync(path, JSON.stringify({ tasks: [] }, null, 2));
}

// Load tasks from the JSON file
const loadTasks = () => {
  try {
    const data = fs.readFileSync(path, "utf8");
    return JSON.parse(data).tasks;
  } catch (error) {
    console.error("Error loading tasks:", error);
    return []; // Return an empty array as a fallback
  }
};

// Save tasks to the JSON file
const saveTasks = (tasks) => {
  fs.writeFileSync(path, JSON.stringify({ tasks }, null, 2));
};

// Add a new task
const addTask = (description) => {
  const tasks = loadTasks();
  const newTask = {
    id: tasks.length + 1,
    description: description,
    status: "not done",
    createdAt: new Date().toISOString(), // Set createdAt
    updatedAt: new Date().toISOString(), // Set updatedAt
  };
  tasks.push(newTask);

  saveTasks(tasks);
  console.log("Task Added");
  return newTask;
};

// Update a task description
const updateTask = (id, newDescription) => {
  const tasks = loadTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex !== -1) {
    tasks[taskIndex].description = newDescription;
    tasks[taskIndex].updatedAt = new Date().toISOString(); // Update updatedAt
    saveTasks(tasks);
    console.log("Task Updated");
    return tasks[taskIndex];
  } else {
    console.log("Task not found with ID:", id); // Debugging: Log the task ID that wasn't found
    throw new Error("Task not found");
  }
};

// Delete a task
const deleteTask = (id) => {
  let tasks = loadTasks();
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));
  if (taskIndex !== -1) {
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    saveTasks(tasks);
    console.log("Task deleted.");
  } else {
    console.log("Task not found.");
  }
};

// Mark task as in progress
const markInProgress = (id) => {
  const tasks = loadTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].status = "in progress";
    tasks[taskIndex].updatedAt = new Date().toISOString(); // Update updatedAt
    saveTasks(tasks);
    return tasks[taskIndex];
  } else {
    throw new Error("Task not found");
  }
};
//Mark task as done
const markDone = (id) => {
  const tasks = loadTasks();
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex !== -1) {
    tasks[taskIndex].status = "done";
    tasks[taskIndex].updatedAt = new Date().toISOString(); // Update updatedAt
    saveTasks(tasks);
    return tasks[taskIndex];
  } else {
    throw new Error("Task not found");
  }
};

// List tasks based on status
const listTasks = (status) => {
  const tasks = loadTasks();
  if (status) {
    const filteredTasks = tasks.filter((task) => task.status === status);
    console.log(`${status.toUpperCase()} tasks:`, filteredTasks);
  } else {
    console.log("All tasks:", tasks);
  }
};

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  markInProgress,
  markDone,
  listTasks,
};

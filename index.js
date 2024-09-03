// index.js
const {
  addTask,
  updateTask,
  deleteTask,
  markInProgress,
  markDone,
  listTasks,
} = require("./taskManager");

// Command-line arguments handling
const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    addTask(args.join(" "));
    break;
  case "update":
    updateTask(args[0], args.slice(1).join(" "));
    break;
  case "delete":
    deleteTask(args[0]);
    break;
  case "progress":
    markInProgress(args[0]);
    break;
  case "done":
    markDone(args[0]);
    break;
  case "list":
    listTasks(args[0]);
    break;
  default:
    console.log("Unknown command.");
}

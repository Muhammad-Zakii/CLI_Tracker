# Task Tracker CLI

This is a simple command-line interface (CLI) task tracker built in Node.js. It allows you to add, update, delete, and list tasks. The tasks are stored in a `tasks.json` file for persistence.

## Features

- Add, update, and delete tasks.
- Mark tasks as "in progress" or "done".
- List tasks based on their status (done, not done, in progress).
- Tasks are stored in a JSON file for persistence.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

## How to Set Up the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repository-name.git
## Commands and Usage

Adds a new task with a description. The task will be marked as "not done" by default.

Command:
```bash
node taskManager.js add "Task Description"                    Adds a new task with a description. The task will be marked
node taskManager.js update <task_id> "New Task Description"   Updates the description of an existing task.
node taskManager.js delete <task_id>                          Deletes a task by its ID.
node taskManager.js progress 1                                Marks a task as "in progress" by its ID.
node taskManager.js done <task_id>                            Marks a task as "done" by its ID
node taskManager.js list                                      Lists all tasks, regardless of their status.
node taskManager.js list done                                 You can filter tasks by their status: done,

```
### Project URL
[[https://github.com/Muhammad-Zakii/CLI_Tracker.git](https://github.com/Muhammad-Zakii/CLI_Tracker)](https://roadmap.sh/projects/task-tracker)




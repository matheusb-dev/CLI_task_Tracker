import { loadTasks, saveTasks } from "../utils/fileUtils.js";

import { getCurrentTimestamp } from "../utils/timeUtils.js";

function addTask(title, description) {
  const tasks = loadTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
    status: "todo",
    createAt: getCurrentTimestamp(),
    updateAt: getCurrentTimestamp(),
  };

  tasks.push(newTask);
  saveTasks(tasks);
  console.log("Done");
}

function updateTask(id, description) {
  const tasks = loadTasks();
  const taskToUpdate = tasks[id - 1];
  taskToUpdate.description = description;
  taskToUpdate.updateAt = getCurrentTimestamp();
  saveTasks(tasks);
  console.log(`Task updated successfully (ID: ${taskToUpdate.id})`);
}

function deleteTask(id) {
  const tasks = loadTasks();
  const newTasks = tasks.filter((task) => task.id !== id);
  saveTasks(newTasks);
  console.log("task deleted successfully");
}

function deleteAll() {
  const tasks = loadTasks();
  saveTasks([]);
  console.log("task deleted successfully");
}

function listasTask() {
  const tasks = loadTasks();
  const listTask = tasks.map((task) => task.id);
  console.log(listTask);
}

function listTaskID(id) {
  const tasks = loadTasks();
  const listasTaskID = tasks.filter((task) => task.id == id);
  console.log(listasTaskID);
}

function markTask(id, status) {
  const tasks = loadTasks();
  const taskToMark = tasks[id - 1];
  taskToMark.status = status;
  taskToMark.updateAt = getCurrentTimestamp();
  saveTasks(tasks);
  console.log("Task marked successfully");
}

export {
  addTask,
  updateTask,
  deleteTask,
  listasTask,
  listTaskID,
  deleteAll,
  markTask,
};

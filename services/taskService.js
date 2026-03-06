import { loadTasks, saveTasks } from "../utils/fileUtils.js";
import { getCurrentTimestamp } from "../utils/timeUtils.js";

function addTask(description) {
  const tasks = loadTasks();
  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
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
  taskToUpdate.updatedAt = getCurrentTimestamp();
  saveTasks(tasks);
  console.log(`Task updated successfully (ID: ${taskToUpdate.id})`);
}

function listTask() {
  const tasks = loadTasks();
  console.log(tasks.length);
}

export { addTask, updateTask, listTask };

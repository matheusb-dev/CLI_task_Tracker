import { loadTasks, saveTasks } from "../utils/fileUtils.js";
import { getCurrentTimestamp } from "../utils/timeUtils.js";

function addTask(description) {
  const tasks = loadTasks();
  const newTask = {
    id: "tasksID",
    description,
    status: "todo",
    createAt: getCurrentTimestamp(),
    updateAt: getCurrentTimestamp(),
  };

  tasks.push(newTask);
  saveTasks(tasks);
  console.log("Done");
}

export { addTask };

import { existsSync, writeFileSync, readFileSync } from "fs";

const filepath = "./tasks.json";

function loadTasks() {
  try {
    if (!existsSync(filepath)) {
      writeFileSync(filepath, JSON.stringify([]));
      return [];
    }
    const data = readFileSync(filepatch, "utf-8");
    if (!data.trim()) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error("Erro");
  }
}

function saveTasks(tasks) {
  try {
    writeFileSync(filepatch, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing to task.json", error);
  }
}

export { loadTasks, saveTasks };

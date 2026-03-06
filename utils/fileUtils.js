import { existsSync, writeFileSync, readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filepath = path.join(__dirname, "../tasks.json");

function loadTasks() {
  try {
    if (!existsSync(filepath)) {
      writeFileSync(filepath, JSON.stringify([]));
      return [];
    }
    const data = readFileSync(filepath, "utf-8");
    if (!data.trim()) return [];
    return JSON.parse(data);
  } catch (err) {
    console.error("Erro");
  }
}

function saveTasks(tasks) {
  try {
    writeFileSync(filepath, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing to task.json", error);
  }
}

export { loadTasks, saveTasks };

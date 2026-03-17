#!/usr/bin/env node
import {
  addTask,
  deleteTask,
  listTaskID,
  listasTask,
  updateTask,
  deleteAll,
  markTask,
} from "./services/taskService.js";

/*#!/usr/bin/env node
console.log(
  "Hello World",
);  Fala ao sistema que quando for executador uso o interpretador node

/*"bin": {
    "CLI_task_Tracker": "./index.js"  Transformando esse indice em um executavel
},*/

const [, , command, ...args] = process.argv;

switch (command) {
  case "add":
    const title = args[0];
    const description = args[1];
    addTask(title, description);
    break;
  case "upt":
    const updateId = Number(args[0]);
    const newDescription = args.slice(1).join(" ");
    console.log(updateId, newDescription);
    updateTask(updateId, newDescription);
    break;
  case "list":
    listasTask();
    break;
  case "del":
    const deletID = Number(args[0]);
    deleteTask(deletID);
    break;
  case "delAll":
    deleteAll();
    break;
  case "listid":
    const listasTaskID = Number(args[0]);
    listTaskID(listasTaskID);
    break;
  case "mark":
    const markId = Number(args[0]);
    const status = args.slice(1).join(" ");
    markTask(markId, status);
    break;
  default:
    console.log(
      "❓ Unknown command. Try 'add', 'upt', 'list', 'listid', 'delAll', 'del' .",
    );
}

#!/usr/bin/env node
import { addTask, listTask, updateTask } from "./services/taskService.js";

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
    const description = args.join(" ");
    addTask(description);
    break;
  case "update":
    const updateId = Number(args[0]);
    const newDescription = args.slice(1).join(" ");
    console.log(updateId, newDescription);
    updateTask(updateId, newDescription);
    break;
  case "list":
    listTask();
    break;
  default:
    console.log("no command");
}

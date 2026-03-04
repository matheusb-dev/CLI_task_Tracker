#!/usr/bin/env node
import { addTask } from "./services/taskService.js";

/*#!/usr/bin/env node
console.log(
  "Hello World",
);  Fala ao sistema que quando for executador uso o interpretador node

/*"bin": {
    "CLI_task_Tracker": "./index.js"  Transformando esse indice em um executavel
},*/

const [, , command, ...args] = process.argv;
const description = args.join(" ");

console.log(`Comando: ${command} | Descrição: ${description}`);

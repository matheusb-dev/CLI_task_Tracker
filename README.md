# 📝 CLI_Tracker_Tasks

Simples projeto de **CLI (Interface de Linha de Comando)** com **Node.js** que permite executar comandos via terminal. 
Você pode **add(adicionar)**, **upt(update)**, **del(deletar)** e **mark(Marcar)** as tarefas em `todo`, `in-progress`, ou `done`, sempre salvando localmente num arquivo  JSON file.

## ⚙️ Instalação e Configuração

### 1️⃣ Clone o repositório

```bash
git clone https://github.com/matheusb-dev/CLI_task_Tracker.git
cd CLI_task_Tracker
```

### 2️⃣ Instalação de Dependências

```bash
npm install
```

### 3️⃣ Disponibilizar o comando da CLI globalmente

Esta etapa vincula a CLI para que você possa executá-la usando `CLI_task_Tracker` de qualquer lugar.

```bash
npm link
```

> ⚠️ Certifique-se de que seu arquivo `package.json` inclua uma entrada **bin** como esta:
>
> ```json
> "bin": {
>   "task-cli": "./index.js"
> }
> ```

---

## 🚀 Usage

### 🟢 Add a Nova Tarefa

```bash
CLI_task_Tracker add "Comprar Iphone 17air"
```

---

### ✏️ Atualizar uma tarefa existente

```bash
CLI_task_Tracker upt 1 "Comprar o Samsung"
```

---

### ❌ Deletar tarefas

```bash
CLI_task_Tracker del 1
```

### ❌ Deletar todas as tarefas

```bash
CLI_task_Tracker delAll
```

---

### 🔄 Marcar o status da tarefa

```bash
CLI_task_Tracker 1 in-progress
CLI_task_Tracker 1 done
```

Show tasks by **status**:

```bash
task-cli list todo
task-cli list in-progress
task-cli list done
```

---

### 📋 Listar todas as Tarefas

Mostrar todas as tarefas

```bash
CLI_task_Tracker list
```

### 📋 Listar Tarefas por ID

```bash
CLI_task_Tracker listid
```

---

## 🗂️ Esrutura de Pasta

```
CLI_task_Tracker/
├── Services        
│   └── taskServices.js # Lógica principal para gerenciar tarefas
├── index.js          # Entry point 
├── tasks.json        # Armazenamento JSON local
├── package.json
└── README.md
```

---

## 💡 Example

```bash
$ CLI_task_Tracker add "Comprar Ovos"
✅ Task added successfully!

$ task-cli list
{
    "id": 1,
    "title": "Comprar Ovos",
    "status": "todo",
    "createAt": "13/03/2026, 10:41:51",
    "updateAt": "13/03/2026, 10:41:51"
  }
```

---

## 🧰 Tecnologias Usadas

- **Node.js**
- **File System (fs)**
- **Path Module**
- **Command Line Interface (CLI)**

---

## 🧑‍💻 Autor

**Matheus Bezerra Domingos**
📧 [matheusbezerradomingos@gmail.com]
🌐 [https://github.com/matheusb-dev](https://github.com/matheusb-dev)

---

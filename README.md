---
# 📝 Tasks Tracker CLI

Uma simple Interface de Linha de Comando - **Command Line Interface (CLI)**, que permite executar comandos no nosso terminal, utilizando **Node.js**. 
---

## ⚙️ Instalação e Configuração

### 1️⃣ Clone esse repositório

```bash
git clone https://github.com/matheusb-dev/CLI_task_Tracker
cd CLI_task_Tracker
```

### 2️⃣ instalação das dependências

```bash
npm install ou npm i
```

### 3️⃣ Deixando o CLI como arquivo global

permite executar o CLI para que você possa executá-la usando `task-cli` de qualquer lugar.

```bash
npm link
```

> ⚠️ Certifique-se de que seu arquivo `package.json` inclua uma entrada **bin** como esta:
>
> ```json
> "bin": {
>   "CLI_task_Tracker": "./index.js"
> }
> ```

---

## 🚀 Como usar

### 🟢 Adicionar uma nova tarefa

```bash
CLI_task_Tracker add "Finalizar Contrato", "Sepultura Q.H1-SIMPLES, LOTE N°90"
```

---

### ✏️ Atualizar uma tarefa

```bash
CLI_task_Tracker upt 1 "Contrato Finalizado", "Sepultura Q.H1-SIMPLES, LOTE N°90"
```

---

### ❌ Delete a task

```bash
CLI_task_Tracker del 1
```

---

### 🔄 Mark task status

```bash
CLI_task_Tracker mark 1 in-progress
CLI_task_Tracker mark 1 done
```

---

### 📋 Listar tarefas

Mostrar **Todas as tarefas**:

```bash
CLI_task_Tracker listAll
```

Mostar **por id**:

```bash
CLI_task_Tracker listid 1 
```

---

## 🗂️ Estrutura de Pasta

```
CLI_task_Tracker/
├── index.js          # Entry point / CLI handler
├── services/
│   └── taskServices.js # Lógica principal para gerenciar tarefas
├── utils/
│   └── timeUtils # Lógica para salvar/alterar Data/Hora
│   └── fileUtils # Lógica para ler tasks.json
├── tasks.json        # Armazenamento JSON local
├── package.json
└── README.md
```

---

## 💡 Example

```bash
$ CLI_task_Tracker add "Arroz", "Com feijão"
✅ Task added successfully!

$  CLI_task_Tracker list
[1]

$  CLI_task_Tracker listid 1
{
    id: 1,
    title: 'Arroz,',
    description: 'Com feijão',
    status: 'todo',
    createAt: '16/03/2026, 15:58:35',
    updateAt: '16/03/2026, 15:58:35'
}
```

---

## 🧰 Tecnologias Usadas

- **Node.js**
- **File System (fs)**
- **Path Module**
- **Command Line Interface (CLI)**

---


### 🤔 Novas implementações - Milestones

| 1. New Features <a href="https://github.com/matheusb-dev/CLI_task_Tracker/milestones">New Features</a>                                                                                |         Status          |
|-------------------------------------------------------------------------------|-------------------------------|
| <a href="https://github.com/matheusb-dev/CLI_task_Tracker/issues/3">Melhorar Código</a> | todo |                       
| <a href="https://github.com/matheusb-dev/CLI_task_Tracker/issues/2">Validações</a>      |todo |
| <a href="https://github.com/matheusb-dev/CLI_task_Tracker/issues/1">Retornar erros</a>      |todo |


---


## 🧑‍💻 Author

**Matheus Bezerra Domingos**
🌐 [https://github.com/matheusb-dev](https://github.com/matheusb-dev)

---

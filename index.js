const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

const DATA_FILE = 'todos.json';

 const loadTodos = () => {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
};

 const saveTodos = (todos) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2), 'utf8');
};

 program
  .command('add <task>')
  .description('Add a new todo')
  .action((task) => {
    const todos = loadTodos();
    todos.push({ id: todos.length + 1, task, done: false });
    saveTodos(todos);
    console.log(`Todo added: "${task}"`);
  });

 program
  .command('delete <id>')
  .description('Delete a todo by ID')
  .action((id) => {
    const todos = loadTodos();
    const filteredTodos = todos.filter((todo) => todo.id !== parseInt(id, 10));
    if (todos.length === filteredTodos.length) {
      console.log(`Todo with ID ${id} not found.`);
    } else {
      saveTodos(filteredTodos);
      console.log(`Todo with ID ${id} deleted.`);
    }
  });

 
program
  .command('done <id>')
  .description('Mark a todo as done by ID')
  .action((id) => {
    const todos = loadTodos();
    const todo = todos.find((todo) => todo.id === parseInt(id, 10));
    if (!todo) {
      console.log(`Todo with ID ${id} not found.`);
    } else {
      todo.done = true;
      saveTodos(todos);
      console.log(`Todo with ID ${id} marked as done.`);
    }
  });

// Command: List all todos
program
  .command('list')
  .description('List all todos')
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      console.log('No todos found.');
    } else {
      console.log('Todos:');
      todos.forEach((todo) => {
        console.log(
          `[${todo.done ? 'completed' : ' '}] ${todo.id}: ${todo.task}`
        );
      });
    }
  });

program.parse(process.argv);

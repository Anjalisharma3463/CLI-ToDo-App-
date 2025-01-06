# CLI Todo App

A command-line interface (CLI) Todo App to manage your tasks efficiently. This app allows you to:

- Add a todo task
- Delete a todo task
- Mark a todo task as done

All data is stored in a file named `todos.json`.

## Installation

To use this CLI app, follow these steps:

### 1. Install the App

Run the following command to install the CLI app globally:

```bash
npm install -g clitodoappp
```

### 2. Verify Installation

Ensure the app is installed by running:

```bash
clitodoappp --version
```

This should display the version of the app.

## Usage

Here are the available commands you can use with this app:

### Add a Todo

Add a new todo task by running:

```bash
clitodoappp add "Your task description here"
```

Example:

```bash
clitodoappp add "Finish the project documentation"
```

### Delete a Todo

Delete a specific todo task by providing its index (from the list):

```bash
clitodoappp delete <index>
```

Example:

```bash
clitodoappp delete 2
```

### Mark a Todo as Done

Mark a specific task as done by providing its index:

```bash
clitodoappp done <index>
```

Example:

```bash
clitodoappp done 1
```

### List All Todos

List all your current todos along with their status:

```bash
clitodoappp list
```

## File Management

All tasks are saved in a file named `todos.json` in the current working directory. This file contains all your todos in JSON format.

## Notes

1. Ensure that you have Node.js and npm installed on your system before using this app.
2. If you encounter any issues with installation or usage, try running the commands with administrative privileges or contact the app's creator.

## License

This project is licensed under the ISC License.


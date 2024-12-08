class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        if (!task || typeof task !== 'string' || task.trim() === '') {
            throw new Error('A task must be a non-empty string');
        }
        this.tasks.push({ task, done: false });
    }

    markTaskAsDone(index) {
        if (index < 0 || index >= this.tasks.length) {
            throw new Error('Invalid task index');
        }
        this.tasks[index].done = true;
    }

    deleteTask(index) {
        if (index < 0 || index >= this.tasks.length) {
            throw new Error('Invalid task index');
        }
        this.tasks.splice(index, 1);
    }

    getTasks() {
        return this.tasks;
    }
}

module.exports = ToDoList;

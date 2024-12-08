const ToDoList = require('./todo');

describe('ToDoList', () => {
    let todo;

    beforeEach(() => {
        todo = new ToDoList();
    });

    test('should add a task to the list', () => {
        todo.addTask('Buy groceries');
        expect(todo.getTasks().length).toBe(1);
        expect(todo.getTasks()[0].task).toBe('Buy groceries');
    });

    test('should not allow adding an empty task', () => {
        expect(() => todo.addTask('')).toThrow('A task must be a non-empty string');
        expect(() => todo.addTask(null)).toThrow('A task must be a non-empty string');
        expect(() => todo.addTask('   ')).toThrow('A task must be a non-empty string');
    });

    test('should mark a task as done', () => {
        todo.addTask('Clean the house');
        todo.markTaskAsDone(0);
        expect(todo.getTasks()[0].done).toBe(true);
    });

    test('should throw an error if trying to mark a non-existing task', () => {
        expect(() => todo.markTaskAsDone(1)).toThrow('Invalid task index');
    });

    test('should delete a task from the list', () => {
        todo.addTask('Do homework');
        todo.addTask('Clean the house');
        todo.deleteTask(0);
        expect(todo.getTasks().length).toBe(1);
        expect(todo.getTasks()[0].task).toBe('Clean the house');
    });

    test('should throw an error if trying to delete a non-existing task', () => {
        expect(() => todo.deleteTask(1)).toThrow('Invalid task index');
    });
});

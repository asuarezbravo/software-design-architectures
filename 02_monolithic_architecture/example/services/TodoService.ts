
import { Todo } from "../models/Todo";

export class TodoService {
    private todos: Todo[] = [];

    create(title: string): Todo {
        const todo = new Todo(this.todos.length + 1, title);
        this.todos.push(todo);
        return todo;
    }

    findAll(): Todo[] {
        return this.todos;
    }

    // Additional methods for update, delete, etc.
}

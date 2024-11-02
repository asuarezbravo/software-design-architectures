
import { Request, Response } from "express";
import { TodoService } from "../services/TodoService";

const todoService = new TodoService();

export const getTodos = (req: Request, res: Response) => {
    res.json(todoService.findAll());
};

export const createTodo = (req: Request, res: Response) => {
    const { title } = req.body;
    const todo = todoService.create(title);
    res.json(todo);
};

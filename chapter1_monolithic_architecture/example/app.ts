
import express from "express";
import bodyParser from "body-parser";
import { getTodos, createTodo } from "./controllers/TodoController";

const app = express();
app.use(bodyParser.json());

app.get("/todos", getTodos);
app.post("/todos", createTodo);

app.listen(3000, () => {
    console.log("Monolithic app listening on port 3000");
});

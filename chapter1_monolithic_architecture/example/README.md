
# Monolithic Architecture Example

This is a basic example of a monolithic application architecture implemented in TypeScript. This example demonstrates how all application components—such as data access, business logic, and presentation layers—are structured within a single codebase.

The application provides a simple REST API for managing a to-do list. All components (models, services, and controllers) are located within a unified project structure.

## Project Structure

```
monolith-example/
├── controllers/       # Contains route controllers
├── models/            # Contains data models
├── services/          # Contains business logic
├── app.ts             # Main application setup
└── package.json       # Project dependencies
```

## Example Files

### `models/Todo.ts`
Defines the `Todo` class used to represent to-do list items.

### `services/TodoService.ts`
Provides the core business logic for managing to-do items, including creating and retrieving tasks.

### `controllers/TodoController.ts`
Contains route handlers that manage API requests for to-do items.

### `app.ts`
Sets up and runs the Express application, defining routes for to-do list management.

## Running the Example

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Server**
   ```bash
   npm start
   ```

3. **Access the API**
   - **GET /todos**: Retrieve all to-do items.
   - **POST /todos**: Create a new to-do item.

### Example Requests

- To create a to-do item:
  ```bash
  curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title": "My new task"}'
  ```

- To retrieve all to-do items:
  ```bash
  curl http://localhost:3000/todos
  ```

## Dependencies

- **express**: Web framework for building API endpoints.
- **body-parser**: Middleware to parse JSON request bodies.
- **typescript**: TypeScript language support.
- **ts-node**: TypeScript execution environment for Node.js.

## About Monolithic Architecture

In this example, all application logic and components are managed within a single codebase. This structure is typical of monolithic architectures, where components are tightly coupled but allow for straightforward development, testing, and deployment.

---

This example provides a simple introduction to monolithic architecture and its typical project structure in TypeScript.

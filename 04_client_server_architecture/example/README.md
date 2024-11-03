
# Client-Server Architecture Example

This is a basic example of client-server architecture implemented using TypeScript with Express for the server and a simple HTML/JavaScript client. The example demonstrates a RESTful API for managing an inventory system.

## Project Structure

```
client-server-example/
├── client/               # Contains client-side files (HTML, JavaScript)
│   ├── index.html        # HTML page with JavaScript to interact with server
│   └── script.js         # Client-side script for API calls
├── server/               # Contains server-side code
│   ├── src/
│   │   ├── app.ts        # Express server setup
│   │   ├── routes.ts     # API routes for inventory management
│   │   └── inventory.ts  # Inventory management logic
│   ├── package.json
│   └── tsconfig.json
```

## Running the Example

1. **Install Dependencies**

   In the `server` directory, run:
   ```bash
   npm install
   ```

2. **Start the Server**

   Run the following command in the `server` directory:
   ```bash
   npm start
   ```
   The server will be available at `http://localhost:3000`.

3. **Access the Client**

   Open `client/index.html` in a browser. Click "Load Inventory" to retrieve and display the inventory list from the server.

4. **Usage**

   - **View Inventory**: Press "Load Inventory" to fetch the current inventory list.
   - **Add Item**: Enter item details and click "Add Item" to create a new inventory entry.

## Purpose

This example demonstrates the client-server architecture pattern using a RESTful API to manage inventory data. It highlights the interaction between a front-end client and a back-end server over HTTP.

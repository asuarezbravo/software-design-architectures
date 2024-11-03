
import express from 'express';
import inventoryController from './inventoryController';

const app = express();

// Routes
app.use('/', inventoryController);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Inventory Service running at http://localhost:${PORT}`);
});

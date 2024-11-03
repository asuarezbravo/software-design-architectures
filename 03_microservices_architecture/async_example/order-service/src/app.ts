
import express from 'express';
import bodyParser from 'body-parser';
import orderController from './orderController';

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/order', orderController);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Order Service running at http://localhost:${PORT}`);
});

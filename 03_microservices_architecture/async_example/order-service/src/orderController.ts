
import express, { Request, Response } from 'express';
import amqp from 'amqplib';

const router = express.Router();

async function publishToQueue(queue: string, message: string) {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));
    setTimeout(() => {
        connection.close();
    }, 500);
}

// Endpoint to create an order and publish an event asynchronously
router.post('/createOrder', async (req: Request, res: Response) => {
    const { productId, quantity } = req.body;

    // Creating the order (mocked)
    const order = { productId, quantity, status: 'created', timestamp: new Date() };
    await publishToQueue('orderQueue', JSON.stringify(order));
    
    res.json({ message: 'Order created and sent to inventory for processing', order });
});

export default router;

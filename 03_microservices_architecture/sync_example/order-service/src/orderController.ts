
import express, { Request, Response } from 'express';
import axios from 'axios';

const router = express.Router();

// Endpoint to create an order and check stock synchronously via HTTP
router.post('/createOrder', async (req: Request, res: Response) => {
    const { productId, quantity } = req.body;

    try {
        // Synchronously call the Inventory Service to check stock
        const inventoryResponse = await axios.get(`http://localhost:3001/checkStock`, {
            params: { productId, quantity }
        });

        if (inventoryResponse.data.inStock) {
            res.json({ message: 'Order created successfully', orderDetails: { productId, quantity } });
        } else {
            res.status(400).json({ message: 'Not enough stock available' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error checking stock', error: error.message });
    }
});

export default router;

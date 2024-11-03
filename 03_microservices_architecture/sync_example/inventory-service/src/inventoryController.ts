
import express, { Request, Response } from 'express';

const router = express.Router();

// Mock inventory data
const inventory = { 'product-1': 100, 'product-2': 50 };

// Check stock for a product
router.get('/checkStock', (req: Request, res: Response) => {
    const { productId, quantity } = req.query;

    if (inventory[productId] && inventory[productId] >= Number(quantity)) {
        res.json({ inStock: true });
    } else {
        res.json({ inStock: false });
    }
});

export default router;

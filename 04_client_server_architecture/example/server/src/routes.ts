
import { Router } from 'express';
import inventory from './inventory';

const router = Router();

// GET all items
router.get('/items', (req, res) => {
    res.json(inventory.getAllItems());
});

// POST a new item
router.post('/items', (req, res) => {
    const newItem = inventory.addItem(req.body);
    res.status(201).json(newItem);
});

// DELETE an item
router.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    const success = inventory.deleteItem(id);
    if (success) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
});

export default router;

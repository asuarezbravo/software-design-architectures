
import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;

app.get('/service1', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3001/service1');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching from Service 1' });
    }
});

app.get('/service2', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:3002/service2');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching from Service 2' });
    }
});

app.listen(PORT, () => {
    console.log(`API Gateway running at http://localhost:${PORT}`);
});


import express from 'express';
const app = express();
const PORT = 3002;

app.get('/service2', (req, res) => {
    res.json({ message: 'Hello from Service 2', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Service 2 running at http://localhost:${PORT}`);
});

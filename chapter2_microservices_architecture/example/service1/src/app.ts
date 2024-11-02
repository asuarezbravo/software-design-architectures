
import express from 'express';
const app = express();
const PORT = 3001;

app.get('/service1', (req, res) => {
    res.json({ message: 'Hello from Service 1', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Service 1 running at http://localhost:${PORT}`);
});

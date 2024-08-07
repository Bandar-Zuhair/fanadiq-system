import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000; // Use the port provided by Repl.it

// Use CORS middleware
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['POST', 'GET'], // Allow POST and GET methods
}));

app.use(bodyParser.json());

app.post('/api/handleRequest', async (req, res) => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwtKdvg7GrtqexL5diXA_Uo9RgRkv8uVIG6VQ2y1iN2q1Xc_Sl2lPICaYcDfPE5ld7e/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Proxy server listening at https://b1d72741-6c12-4316-a0dc-897de7e0a31d-00-1flammxb2btfj.pike.replit.dev/`);
});

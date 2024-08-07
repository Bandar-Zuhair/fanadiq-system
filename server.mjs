import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

// The rest of your code...


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
    console.log(`Proxy server listening at http://localhost:${port}`);
});

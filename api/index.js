const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 8080;
require('dotenv').config()

// Middleware to parse JSON body
app.use(express.json());

// Store the API key securely on the server side
const API_KEY = process.env.API_KEY;

// Webhook URL (e.g., Discord, Slack, or your own endpoint)
const WEBHOOK_URL = process.env.webhook;

// Configure CORS to allow requests from developers-fun.com
const corsOptions = {
    origin: (origin, callback) => {
        if (origin === 'https://developers-fun.com' || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware to check if request is from Postman
const postmanChecker = (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    if (userAgent && userAgent.includes('PostmanRuntime')) {
        next(); // Allow Postman requests
    } else if (req.get('origin') === 'https://developers-fun.com') {
        next(); // Allow requests from developers-fun.com
    } else {
        res.status(403).json({ error: 'Access Denied' });
    }
};

// Function to send data to the webhook
const sendWebhook = async (data) => {
    try {
        await axios.post(WEBHOOK_URL, {
            content: `New request received with values:\n\`\`\`json\n${JSON.stringify(data, null, 2)}\n\`\`\``
        });
        console.log('Webhook sent successfully');
    } catch (error) {
        console.error('Error sending webhook:', error);
    }
};

// Backend route to accept two values and process them
app.post('/api/data', postmanChecker, async (req, res) => {
    try {
        const { TEXT, URL } = req.body;  // Capture the two values

        if (!TEXT || !URL) {
            return res.status(400).json({ error: 'Both TEXT and URL are required' });
        }

        // Send the data to the webhook
        await sendWebhook({ TEXT, URL });

        // Example call to a third-party API (you can replace this with your real API)
        const response = await axios.get('https://api.example.com/data', {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });

        // Send the data back to the frontend
        res.json({ message: 'Success', data: response.data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing request');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

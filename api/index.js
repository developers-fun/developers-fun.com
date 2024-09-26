const PORT = 8080;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

const allowedOrigins = ['https://developers-fun.com'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));  // Apply the updated CORS options
app.use(express.json());  // Middleware to parse JSON request bodies

// Create the /api endpoint
app.post('/api', (req, res) => {
  // Capture the data from the frontend request body
  const { text, Creator } = req.body;

  // Define the Discord webhook URL (replace with your actual webhook URL)
  const webhookUrl = 'https://discord.com/api/webhooks/1275787515265028137/9lD2eThfQV6dcIuBvijt5EsmYRPAwVsotPpeO_4M-J5eAwgilvciOcAddLuOghw5CcHI';

  // Format the payload for the Discord webhook
  const payload = {
    content: `${text}\n${Creator}`
  };

  // Send the payload to the Discord webhook using axios
  axios.post(webhookUrl, payload)
    .then(response => {
      // Respond with success if webhook is sent successfully
      res.json({ message: 'Webhook sent successfully', response: response.data });
    })
    .catch(error => {
      // Respond with an error message if the request fails
      console.error('Error sending webhook:', error.message);
      res.status(500).json({ error: 'Failed to send webhook', details: error.message });
    });
});

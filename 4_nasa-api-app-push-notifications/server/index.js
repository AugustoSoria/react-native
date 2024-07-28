const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

const EXPO_TOKEN = ""

app.post('/send-notification', async (req, res) => {

  try {
    await axios.post('https://exp.host/--/api/v2/push/send', {
      to: EXPO_TOKEN,
      title: "Test Notification",
      body: "This is a test notification",
    });
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (error) {
    console.error('Error sending notification:', error);
    res.status(500).json({ message: 'Failed to send notification' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
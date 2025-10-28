// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (HTML, CSS, images) from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// POST route for contact form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('📩 New Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // For now, just send a success message back
  res.send('Thank you for contacting us!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

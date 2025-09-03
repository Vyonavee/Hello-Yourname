// server.js
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Serve static files (like index.html)
app.use(express.static('.'));           // Serves files from current folder
app.use(express.json());                // Can read JSON from requests

// Handle POST request from frontend
app.post('/greet', (req, res) => {
  const name = req.body.name;
  console.log("Received name:", name);

  // Save name to file
  fs.appendFileSync('visitors.txt', name + '\n');

  // Send response back (optional)
  res.json({ message: `Hello ${name}! Saved.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎉 Server running at http://localhost:${PORT}`);
  console.log(`👉 Open http://localhost:${PORT} in your browser`);
});
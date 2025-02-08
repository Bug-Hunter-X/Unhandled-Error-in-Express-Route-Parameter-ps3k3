const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Check if the ID is a valid number
  if (isNaN(userId) || parseInt(userId) <= 0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // Fetch user from database or other data source
  // ...  
  // Handle case where user not found
  // ...
});
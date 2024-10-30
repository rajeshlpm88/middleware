const express = require('express');
const app = express();

// Custom middleware to log request details
function logger(req, res, next) {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next(); // Pass control to the next middleware or route handler
}

// Use the custom middleware
app.use(logger);

// Define some routes
app.get('/home', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('About Us Page');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

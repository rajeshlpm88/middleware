var express = require("express");
var app = express();

app.use(function(req, res, next) {
  console.log("Request Method:", req.method, "URL:", req.url);
  next();
});

app.get('/home', function(req, res) {
  console.log("First Page");
  res.send("Welcome to CBIT First Page");
});

app.get('/exit', function(req, res) {
  console.log("Second Page");
  res.send("Thanks for Your Support");
});

app.use(function(req, res) {
  console.log("The END");
  res.status(404).send("Page Not Found");
});

app.listen(8080, function() {
  console.log('Server is running on http://localhost:8080');
});





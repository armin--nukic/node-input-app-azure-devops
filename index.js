const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Endpoint for form submission
app.post("/submit", (req, res) => {
  const userInput = req.body.userInput;
  res.send(`You entered: ${userInput}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

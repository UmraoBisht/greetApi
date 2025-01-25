// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// Initialize the app and configure middleware
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// In-memory mock database
const users = [];

// API endpoint to greet users
app.post("/api/greet", (req, res) => {
  const { name,email } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required!" });
  }

  // Store the user in the mock database
  users.push({ name, email });

  // Respond with a personalized greeting
  res.json({ message: `Hello ${name}, welcome to the Full Stack App!` });
});

// API endpoint to retrieve stored users (optional)
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

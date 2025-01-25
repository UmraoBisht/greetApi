require("dotenv").config();
// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


// Initialize the app and configure middleware
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Import the greet route
const greetRoute = require("./routes/greet.route.js");

// Use the greet route
app.use("/api", greetRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

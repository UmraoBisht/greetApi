const users = [];

const greet = (req, res) => {
  const { name, email } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required!" });
  }

  // Store the user in the mock database
  users.push({ name, email });

  // Respond with a personalized greeting
  res.json({ message: `Hello ${name}, welcome to the Full Stack App!` });
};

const getUsers = (req, res) => {
  res.json(users);
};

module.exports = { greet, getUsers };

const { getUsers, greet } = require("../controllers/greet.controller.js");

const express = require("express");
const router = express.Router();

router.post("/greet", greet);
router.get("/users", getUsers);

module.exports = router;

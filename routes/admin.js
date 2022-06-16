const express = require('express');

// Express router
const router = express.Router()

router.get("/products", (req, res) => {
  res.json({ method: "GET products" });
});

router.post("/add-product", (req, res) => {
  res.json({ method: "POST method added" });
});

module.exports = router
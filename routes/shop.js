const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ method: "GET method ran" });
});

router.get("/products/:id", (req, res) => {
  res.json({ method: "GET method to get single product" });
});

router.delete("/products/:id", (req, res) => {
  res.json({ method: "DELETE method to delete single product" });
});

router.patch("/products/:id", (req, res) => {
  res.json({ method: "PATCH method to patch single product" });
});

module.exports = router;

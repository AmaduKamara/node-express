const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

// Express router
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

module.exports = router;

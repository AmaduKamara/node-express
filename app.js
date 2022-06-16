const express = require("express");

// Initialize express app
const app = express();

// Middlewares
app.use((req, res, next) => {
  console.log(req.url, req.method, "Middlewre ran");
  next();
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

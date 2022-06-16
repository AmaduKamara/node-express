const express = require("express");

// File imports
const adminRoutes = require("./routes/admin.js");
const shopRoutes = require("./routes/shop.js");

// Initialize express app
const app = express();
app.use(express.json());

// Middlewares
app.use((req, res, next) => {
  console.log(req.url, req.method, "Middlewre ran");
  next();
});

// Admin routes usages
app.use(adminRoutes);

// Shop routes usages
app.use(shopRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
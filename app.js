const express = require("express");
const path = require("path");

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

// Serving static files for CSS
app.use(express.static(path.join(__dirname, "public")));

// Admin routes usages
app.use("/admin", adminRoutes);

// Shop routes usages
app.use("/shop", shopRoutes);

// 404 catch all route
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

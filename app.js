const express = require("express");

// Initialize express app
const app = express();
app.use(express.json());

// Middlewares
app.use((req, res, next) => {
  console.log(req.url, req.method, "Middlewre ran");
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ method: "GET method ran" });
});

app.get("/products", (req, res) => {
  res.json({ method: "GET products" });
});

app.post("/add-product", (req, res) => {
  res.json({ method: "POST method added" });
});

app.get("/products/:id", (req, res) => {
  res.json({ method: "GET method to get single product" });
});

app.delete("/products/:id", (req, res) => {
  res.json({ method: "DELETE method to delete single product" });
});

app.patch("/products/:id", (req, res) => {
  res.json({ method: "PATCH method to patch single product" });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

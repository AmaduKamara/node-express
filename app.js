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

app.post("/add-product", (req, res) => {
  res.json({ method: "POST method added" });
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

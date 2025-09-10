require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/inventoryDB";
const PORT = process.env.PORT || 3010;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB");
})
.catch(err => {
  console.error("❌ Error connecting to MongoDB:", err.message);
});

app.get("/", (req, res) => {
  res.send("🚀 Product Inventory Tracker Backend is running!");
});

app.listen(PORT, () => {
  console.log(`🌍 Server listening on http://localhost:${PORT}`);
});

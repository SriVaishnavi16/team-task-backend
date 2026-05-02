const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Simple CORS (works for deployment)
app.use(cors());

app.use(express.json());

// ✅ Root route (to test backend)
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Port fix for Render
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running"));
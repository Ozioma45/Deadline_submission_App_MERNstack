const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const projectRoutes = require("./routes/projects");

dotenv.config();

console.log("Mongo URI:", process.env.MONGO_URI);

const app = express();
app.use(cors());
app.use(express.json());

console.log("Mongo URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api", projectRoutes);

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// To serve profile pictures from the 'uploads' directory
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

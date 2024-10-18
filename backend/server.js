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
  .connect(
    "mongodb+srv://oziomaegole:Oziblink2846@submissionproject.fbcfi.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.use("/api", projectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

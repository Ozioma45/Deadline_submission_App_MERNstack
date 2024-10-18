const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  livePreview: { type: String, required: true },
  githubLink: { type: String, required: true },
  dateSubmitted: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Project", projectSchema);

const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// Submit a project
router.post("/submit", async (req, res) => {
  const { name, title, description, livePreview, githubLink } = req.body;
  try {
    const newProject = new Project({
      name,
      title,
      description,
      livePreview,
      githubLink,
    });
    await newProject.save();
    res.status(201).json({ message: "Project submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit project" });
  }
});

// Get all projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

module.exports = router;

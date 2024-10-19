import React, { useState } from "react";
import axios from "axios";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    livePreview: "",
    githubLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://deadline-submission-app-backend.onrender.com/api/submit",
        formData
      );
      alert(res.data.message);
    } catch (error) {
      alert("Error submitting project");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Submit Your Project</h2>
      <form
        className="mx-auto mt-4"
        style={{ maxWidth: "600px" }}
        onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Project Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            placeholder="Project Title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Live Preview Link</label>
          <input
            className="form-control"
            type="url"
            name="livePreview"
            placeholder="Live Preview Link"
            value={formData.livePreview}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">GitHub Link</label>
          <input
            className="form-control"
            type="url"
            name="githubLink"
            placeholder="GitHub Link"
            value={formData.githubLink}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Project Description</label>
          <textarea
            className="form-control"
            name="description"
            placeholder="Project Description"
            value={formData.description}
            onChange={handleChange}></textarea>
        </div>

        <button type="submit">Submit Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;

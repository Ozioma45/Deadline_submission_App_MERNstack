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
        "http://localhost:5000/api/submit",
        formData
      );
      alert(res.data.message);
    } catch (error) {
      alert("Error submitting project");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="title"
        placeholder="Project Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Project Description"
        value={formData.description}
        onChange={handleChange}></textarea>
      <input
        type="url"
        name="livePreview"
        placeholder="Live Preview Link"
        value={formData.livePreview}
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="githubLink"
        placeholder="GitHub Link"
        value={formData.githubLink}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit Project</button>
    </form>
  );
};

export default ProjectForm;
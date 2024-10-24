import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    livePreview: "",
    githubLink: "",
  });

  const [loading, setLoading] = useState(false); // Track form submission state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const res = await axios.post(
        "https://deadline-submission-app-mernstack.onrender.com/api/submit",
        formData
      );
      Swal.fire({
        title: "Success!",
        text: res.data.msg,
        icon: "success",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      console.error(err.response?.data || err.message); // Improved error logging
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.msg || "An error occurred!",
        icon: "error",
      });
    } finally {
      setLoading(false); // Stop loading
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
            onChange={handleChange}
            required></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Submitting..." : "Submit Project"}
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;

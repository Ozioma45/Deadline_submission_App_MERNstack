import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    portfolio: "",
    github: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePicture: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();

    // Append each field to the FormData object
    Object.keys(formData).forEach((key) => {
      formDataObj.append(key, formData[key]);
    });

    try {
      const res = await axios.post(
        "https://deadline-submission-app-mernstack.onrender.com/api/auth/register",
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      Swal.fire({
        title: "Success!",
        text: res.data.msg,
        icon: "success",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      console.error(err.response?.data || err.message); // Detailed logging
      Swal.fire({
        title: "Error!",
        text: err.response?.data?.msg || "An error occurred!",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />
      <input
        type="url"
        name="portfolio"
        placeholder="Portfolio URL"
        onChange={handleChange}
      />
      <input
        type="url"
        name="github"
        placeholder="GitHub Profile"
        onChange={handleChange}
      />
      <input
        type="url"
        name="instagram"
        placeholder="Instagram Handle"
        onChange={handleChange}
      />
      <input
        type="url"
        name="linkedin"
        placeholder="LinkedIn Profile"
        onChange={handleChange}
      />
      <input
        type="url"
        name="twitter"
        placeholder="Twitter Handle"
        onChange={handleChange}
      />
      <input type="file" name="profilePicture" onChange={handleFileChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
